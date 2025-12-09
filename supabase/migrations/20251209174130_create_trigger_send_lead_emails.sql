/*
  # Create Trigger to Send Lead Notification Emails

  1. Overview
    - Creates a trigger on the roof_assessments table
    - Automatically fires AFTER INSERT for each new lead submission
    - Calls the Edge Function to send notification emails
    - Email failures do NOT prevent the database insert from succeeding

  2. Components
    - Function: notify_new_lead()
      - Converts the NEW row to JSON
      - Makes HTTP POST request to send-new-lead-emails Edge Function
      - Returns NULL to continue with the insert regardless of email status
    
    - Trigger: on_roof_assessment_created
      - Fires AFTER INSERT on roof_assessments table
      - Executes notify_new_lead() for each new row
      - Runs asynchronously so UI remains responsive

  3. How It Works
    - User submits contact form → Row inserted into roof_assessments
    - Trigger fires → Calls Edge Function with row data
    - Edge Function sends emails (lead setter + customer)
    - Front-end shows success immediately (doesn't wait for emails)

  4. Important Notes
    - The Edge Function must be deployed before this trigger is created
    - Environment variables (RESEND_API_KEY, etc.) must be set in Supabase Dashboard
    - Email failures are logged but don't block the insert
    - Front-end behavior remains unchanged (green checkmark shows immediately)
*/

-- Create the function that will be called by the trigger
CREATE OR REPLACE FUNCTION notify_new_lead()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  request_id bigint;
  function_url text;
  supabase_url text;
  service_role_key text;
BEGIN
  -- Get Supabase project URL from environment
  -- This uses the internal Supabase function to get the project URL
  supabase_url := current_setting('app.settings.supabase_url', true);
  
  -- If not set via app settings, construct from project ref
  IF supabase_url IS NULL OR supabase_url = '' THEN
    supabase_url := 'https://flpmxlyvdprupupotlxm.supabase.co';
  END IF;
  
  -- Construct the Edge Function URL
  function_url := supabase_url || '/functions/v1/send-new-lead-emails';
  
  -- Make async HTTP POST request to the Edge Function
  -- Using pg_net extension for non-blocking HTTP requests
  SELECT INTO request_id
    net.http_post(
      url := function_url,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := jsonb_build_object(
        'record', to_jsonb(NEW)
      )
    );
  
  -- Log the request (optional)
  RAISE LOG 'Triggered email notification for lead ID: %, request_id: %', NEW.id, request_id;
  
  -- Always return NEW to allow the insert to proceed
  -- Even if the HTTP request fails, the lead data is saved
  RETURN NEW;
  
EXCEPTION WHEN OTHERS THEN
  -- Log any errors but don't prevent the insert
  RAISE LOG 'Error in notify_new_lead trigger: %', SQLERRM;
  RETURN NEW;
END;
$$;

-- Create the trigger
DROP TRIGGER IF EXISTS on_roof_assessment_created ON roof_assessments;

CREATE TRIGGER on_roof_assessment_created
  AFTER INSERT ON roof_assessments
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_lead();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA net TO postgres, anon, authenticated, service_role;
