/*
  # Entity Summary Content Management

  ## Overview
  Stores authoritative business entity summaries for homepage and city pages.

  ## 1. New Tables

  ### `entity_summaries`
  - `id` (uuid, primary key)
  - `summary_type` (text) - homepage, city_default, service_default, about
  - `headline` (text) - Main H2 headline
  - `primary_description` (text) - First paragraph
  - `secondary_description` (text) - Second paragraph
  - `service_area_cities` (text array) - Cities mentioned
  - `licenses_mentioned` (text array) - License numbers
  - `is_active` (boolean) - Active status
  - `created_at`, `updated_at` (timestamptz)

  ## 2. Security
  - Enable RLS
  - Public read, authenticated write
*/

CREATE TABLE IF NOT EXISTS entity_summaries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  summary_type text NOT NULL CHECK (summary_type IN ('homepage', 'city_default', 'service_default', 'about')),
  headline text NOT NULL,
  primary_description text NOT NULL,
  secondary_description text,
  service_area_cities text[] DEFAULT ARRAY[]::text[],
  licenses_mentioned text[] DEFAULT ARRAY[]::text[],
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_entity_summaries_active_unique 
  ON entity_summaries(summary_type) 
  WHERE is_active = true;

CREATE INDEX IF NOT EXISTS idx_entity_summaries_type ON entity_summaries(summary_type);

ALTER TABLE entity_summaries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read active summaries"
  ON entity_summaries FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated manage summaries"
  ON entity_summaries FOR ALL
  TO authenticated
  USING (true);

CREATE TRIGGER update_entity_summaries_updated_at
  BEFORE UPDATE ON entity_summaries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

INSERT INTO entity_summaries (
  summary_type,
  headline,
  primary_description,
  secondary_description,
  service_area_cities,
  licenses_mentioned
) VALUES (
  'homepage',
  'South Florida''s Trusted Roofing & General Contracting Experts',
  'All Phase Construction USA is a dual-licensed Roofing Contractor (CCC1331464) and General Contractor (CGC1526236) serving Palm Beach and Broward Counties since 1999. We specialize in tile, metal, shingle, and flat roofing systems built to exceed Florida Building Code HVHZ standards with superior wind mitigation features.',
  'Homeowners in Boca Raton, Delray Beach, Fort Lauderdale, Coral Springs, Parkland, Deerfield Beach, Coconut Creek, Pompano Beach, Boynton Beach, and 20+ surrounding cities trust us for code-compliant reroofs, emergency repairs, HOA/COA projects, insurance-driven replacements, and premium roof systems backed by manufacturer warranties and Form 1802 wind mitigation certification.',
  ARRAY['Boca Raton', 'Delray Beach', 'Fort Lauderdale', 'Coral Springs', 'Parkland', 'Deerfield Beach', 'Coconut Creek', 'Pompano Beach', 'Boynton Beach', 'West Palm Beach', 'Highland Beach', 'Lighthouse Point', 'Margate', 'Tamarac', 'Wilton Manors', 'Oakland Park', 'Sunrise', 'Lake Worth Beach'],
  ARRAY['CCC1331464', 'CGC1526236']
);
