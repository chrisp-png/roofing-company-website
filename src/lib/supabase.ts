// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Use env vars if they exist, otherwise fall back to your Bolt Database values.
// Get these two values from Bolt → Database → Connection / API settings.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://flpmxlyvdprupupotlxm.supabase.co'; // <-- replace with your actual URL if different

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZscG14bHl2ZHBydXB1cG90bHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTE0MDgsImV4cCI6MjA4MDI2NzQwOH0.4I_2gklraNDDX8d923vIglMK40ZImH5IfR56Mxlmf4Q';

// IMPORTANT:
// - Do NOT throw errors here.
// - Even if env vars are missing, this file must never crash the app.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
