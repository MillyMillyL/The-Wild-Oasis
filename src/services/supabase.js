import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jyuyjvsepmblfmsirfid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5dXlqdnNlcG1ibGZtc2lyZmlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NjIzMTUsImV4cCI6MjAxMTEzODMxNX0.hvc4sVUP0zJV_nt2j-JjBMziPjylMvAun1HhriBjrk8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
