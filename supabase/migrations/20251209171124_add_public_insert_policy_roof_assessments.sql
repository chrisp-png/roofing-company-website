/*
  # Enable Public Form Submissions for Roof Assessments

  1. Changes
    - Add policy to allow anonymous (public) users to submit contact forms
    - This enables the website contact forms to work without authentication
  
  2. Security
    - Policy only allows INSERT operations
    - Users cannot read, update, or delete submissions
    - Each submission is write-only from the public perspective
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'roof_assessments' 
    AND policyname = 'Anyone can submit roof assessment'
  ) THEN
    CREATE POLICY "Anyone can submit roof assessment"
      ON roof_assessments
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;
