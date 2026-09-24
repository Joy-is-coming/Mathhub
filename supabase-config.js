// MathHub Supabase configuration
//
// Create a Supabase project and replace the two placeholder values below.
// Use the project's browser-safe Publishable key (or legacy anon key).
// NEVER put a Supabase service_role/secret key in this file.

const MATHHUB_SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const MATHHUB_SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

const MATHHUB_SUPABASE_CONFIGURED =
  !MATHHUB_SUPABASE_URL.startsWith("YOUR_") &&
  !MATHHUB_SUPABASE_PUBLISHABLE_KEY.startsWith("YOUR_");

let mathHubSupabase = null;

if (MATHHUB_SUPABASE_CONFIGURED && window.supabase) {
  mathHubSupabase = window.supabase.createClient(
    MATHHUB_SUPABASE_URL,
    MATHHUB_SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );
}
