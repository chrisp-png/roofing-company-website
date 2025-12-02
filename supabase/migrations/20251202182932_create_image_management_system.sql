/*
  # Image Management System for SEO & GBP Optimization

  ## Overview
  Complete image management system for roofing website with ALT text optimization,
  Google Business Profile post templates, trust scoring, and page placement tracking.

  ## 1. New Tables

  ### `images`
  Core image metadata table
  - `id` (uuid, primary key)
  - `image_number` (integer, unique) - Sequential image identifier
  - `file_name` (text, not null) - Original filename
  - `file_path` (text, not null) - Storage path or URL
  - `alt_text` (text, not null) - SEO-optimized ALT text
  - `caption` (text) - User-facing caption
  - `category` (text, not null) - Image category (project, service, team, etc.)
  - `trust_score` (integer, 1-10) - Trust/quality rating
  - `width` (integer) - Image width in pixels
  - `height` (integer) - Image height in pixels
  - `file_size` (integer) - File size in bytes
  - `format` (text) - Image format (jpg, webp, png)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `page_placements`
  Where images appear on the website
  - `id` (uuid, primary key)
  - `image_id` (uuid, foreign key to images)
  - `page_type` (text, not null) - Page category (home, city, service, blog)
  - `page_slug` (text) - Specific page identifier
  - `placement_location` (text, not null) - Location on page (hero, gallery, testimonial)
  - `display_order` (integer) - Order in gallery/carousel
  - `is_active` (boolean) - Currently displayed
  - `created_at` (timestamptz)

  ### `gbp_post_templates`
  Google Business Profile post templates
  - `id` (uuid, primary key)
  - `image_id` (uuid, foreign key to images)
  - `post_type` (text, not null) - Type (project, offer, update, event)
  - `headline` (text, not null) - Post headline (max 58 chars)
  - `description` (text, not null) - Post description (max 1500 chars)
  - `cta_type` (text) - Call to action (book, call, learn_more, sign_up)
  - `cta_url` (text) - CTA destination URL
  - `target_city` (text) - Geographic target
  - `service_type` (text) - Related service (tile, metal, shingle, flat)
  - `post_date` (date) - Scheduled/posted date
  - `performance_score` (integer) - Engagement tracking (1-10)
  - `is_published` (boolean) - Published status
  - `created_at` (timestamptz)

  ### `image_keywords`
  SEO keyword tracking for images
  - `id` (uuid, primary key)
  - `image_id` (uuid, foreign key to images)
  - `keyword` (text, not null) - SEO keyword
  - `keyword_type` (text) - Type (primary, secondary, location, service)
  - `created_at` (timestamptz)

  ## 2. Security
  - Enable RLS on all tables
  - Public read access for published content
  - Authenticated write access for content management

  ## 3. Indexes
  - Performance indexes on common query patterns
  - Full-text search on ALT text and captions
*/

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_number integer UNIQUE NOT NULL,
  file_name text NOT NULL,
  file_path text NOT NULL,
  alt_text text NOT NULL,
  caption text,
  category text NOT NULL CHECK (category IN ('project', 'service', 'team', 'process', 'material', 'before_after', 'testimonial', 'hero', 'logo', 'certification')),
  trust_score integer CHECK (trust_score >= 1 AND trust_score <= 10),
  width integer,
  height integer,
  file_size integer,
  format text CHECK (format IN ('jpg', 'jpeg', 'webp', 'png', 'svg')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create page_placements table
CREATE TABLE IF NOT EXISTS page_placements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_id uuid REFERENCES images(id) ON DELETE CASCADE,
  page_type text NOT NULL CHECK (page_type IN ('home', 'city', 'service', 'blog', 'about', 'contact', 'projects', 'calculator')),
  page_slug text,
  placement_location text NOT NULL,
  display_order integer DEFAULT 1,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create gbp_post_templates table
CREATE TABLE IF NOT EXISTS gbp_post_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  post_type text NOT NULL CHECK (post_type IN ('project', 'offer', 'update', 'event')),
  headline text NOT NULL CHECK (char_length(headline) <= 58),
  description text NOT NULL CHECK (char_length(description) <= 1500),
  cta_type text CHECK (cta_type IN ('book', 'call', 'learn_more', 'sign_up', 'get_offer')),
  cta_url text,
  target_city text,
  service_type text CHECK (service_type IN ('tile', 'metal', 'shingle', 'flat', 'residential', 'commercial', 'wind_mitigation', 'general')),
  post_date date,
  performance_score integer CHECK (performance_score >= 1 AND performance_score <= 10),
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create image_keywords table
CREATE TABLE IF NOT EXISTS image_keywords (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_id uuid REFERENCES images(id) ON DELETE CASCADE,
  keyword text NOT NULL,
  keyword_type text CHECK (keyword_type IN ('primary', 'secondary', 'location', 'service')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(image_id, keyword)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_images_category ON images(category);
CREATE INDEX IF NOT EXISTS idx_images_trust_score ON images(trust_score DESC);
CREATE INDEX IF NOT EXISTS idx_images_number ON images(image_number);
CREATE INDEX IF NOT EXISTS idx_page_placements_page ON page_placements(page_type, page_slug);
CREATE INDEX IF NOT EXISTS idx_page_placements_active ON page_placements(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_gbp_posts_city ON gbp_post_templates(target_city);
CREATE INDEX IF NOT EXISTS idx_gbp_posts_service ON gbp_post_templates(service_type);
CREATE INDEX IF NOT EXISTS idx_gbp_posts_published ON gbp_post_templates(is_published) WHERE is_published = true;
CREATE INDEX IF NOT EXISTS idx_image_keywords_keyword ON image_keywords(keyword);

-- Full-text search index on alt_text and caption
CREATE INDEX IF NOT EXISTS idx_images_search ON images USING gin(to_tsvector('english', alt_text || ' ' || COALESCE(caption, '')));

-- Enable Row Level Security
ALTER TABLE images ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE gbp_post_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE image_keywords ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Public read for active content
CREATE POLICY "Public read access to images"
  ON images FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access to active placements"
  ON page_placements FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public read access to published GBP posts"
  ON gbp_post_templates FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Public read access to keywords"
  ON image_keywords FOR SELECT
  TO public
  USING (true);

-- Authenticated insert/update/delete policies
CREATE POLICY "Authenticated users can insert images"
  ON images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update images"
  ON images FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage placements"
  ON page_placements FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage GBP posts"
  ON gbp_post_templates FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage keywords"
  ON image_keywords FOR ALL
  TO authenticated
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_images_updated_at
  BEFORE UPDATE ON images
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
