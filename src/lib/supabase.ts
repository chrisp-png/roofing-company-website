import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://flpmxlyvdprupupotlxm.supabase.co';

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZscG14bHl2ZHBydXB1cG90bHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTE0MDgsImV4cCI6MjA4MDI2NzQwOH0.4I_2gklraNDDX8d923vIglMK40ZImH5IfR56Mxlmf4Q';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase env vars are missing; using fallback Supabase values.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
