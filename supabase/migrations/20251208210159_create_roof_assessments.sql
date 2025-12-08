/*
  # Create Roof Assessment Form Submissions Table

  1. New Tables
    - `roof_assessments`
      - `id` (uuid, primary key) - Unique identifier
      - `full_name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `email` (text) - Customer's email address
      - `street_address` (text) - Property street address
      - `city` (text) - Property city
      - `zip_code` (text) - Property zip code
      - `heard_about_us` (text) - Marketing source
      - `property_type` (text) - Type of property
      - `preferred_contact_method` (text) - How they want to be contacted
      - `preferred_time_of_day` (text) - When they prefer to be contacted
      - `message` (text) - Additional details/notes
      - `source` (text) - Form source identifier
      - `page_url` (text) - URL where form was submitted
      - `submitted_at` (timestamptz) - Timestamp of submission
      - `created_at` (timestamptz) - Record creation timestamp
      - `jobnimbus_sent` (boolean) - Whether data was sent to JobNimbus
      - `email_sent` (boolean) - Whether email notification was sent

  2. Security
    - Enable RLS on `roof_assessments` table
    - Add policy for service role to insert records (Edge Function)
    - Add policy for authenticated admins to read records
    
  3. Indexes
    - Index on email for quick lookup
    - Index on created_at for sorting/filtering
*/

-- Create the roof_assessments table
CREATE TABLE IF NOT EXISTS roof_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  street_address text DEFAULT '',
  city text NOT NULL,
  zip_code text DEFAULT '',
  heard_about_us text DEFAULT '',
  property_type text NOT NULL,
  preferred_contact_method text DEFAULT 'Phone Call',
  preferred_time_of_day text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'Website Roof Assessment Form',
  page_url text DEFAULT '',
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  jobnimbus_sent boolean DEFAULT false,
  email_sent boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE roof_assessments ENABLE ROW LEVEL SECURITY;

-- Policy for service role (Edge Functions) to insert
CREATE POLICY "Service role can insert assessments"
  ON roof_assessments
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy for authenticated users to read (for future admin dashboard)
CREATE POLICY "Authenticated users can read assessments"
  ON roof_assessments
  FOR SELECT
  TO authenticated
  USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_roof_assessments_email ON roof_assessments(email);
CREATE INDEX IF NOT EXISTS idx_roof_assessments_created_at ON roof_assessments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_roof_assessments_submitted_at ON roof_assessments(submitted_at DESC);