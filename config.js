// config.js
const SUPABASE_URL = 'https://canitmocloswuvsuxxgn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhbml0bW9jbG9zd3V2c3V4eGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NjEwMjEsImV4cCI6MjA5MDQzNzAyMX0.YaUI6eDX_NvVJIRgY1rPzxzJcZIdcrahJILUQB0KhfI';

// Initialize the client once and export it (globally available since we use script tags)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);