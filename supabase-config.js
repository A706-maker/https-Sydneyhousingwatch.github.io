// Supabase Configuration
// Get these from Supabase > Settings > API
const SUPABASE_URL = "https://bixaifcnznkkqmemfqes.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpeGFpZmNuem5ra3FtZW1mcWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NDk4ODAsImV4cCI6MjA5MDQyNTg4MH0._6L8e77pp6iFD-CecNPc_-GyhaWQu8fqsVKpVGKuf1w";

// Initialize Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
