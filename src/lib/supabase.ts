// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Use env vars if they exist, otherwise fall back to your Bolt Database values.
// Get these two values from Bolt → Database → Connection / API settings.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://flpmxlyvdprupupotlxm.supabase.co'; // <-- replace with your actual URL if different

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'YOUR_SUPABASE_ANON_KEY_HERE'; // <-- paste the anon key from Bolt Database settings

// IMPORTANT:
// - Do NOT throw errors here.
// - Even if env vars are missing, this file must never crash the app.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
