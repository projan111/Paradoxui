import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://duaunqehgjdoundcwkjd.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1YXVucWVoZ2pkb3VuZGN3a2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NDE4MDAsImV4cCI6MjAyODIxNzgwMH0.6rYqV9ZrDEXuxWXPQwd_FkbyPeVA_N6MwEmtZyX82nQ";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1YXVucWVoZ2pkb3VuZGN3a2pkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjY0MTgwMCwiZXhwIjoyMDI4MjE3ODAwfQ.QmqcSi-0EE9tEBurB8qkNzPEa01FyZ-kiQNiVZwgBNo";
export const supabase = createClient(supabaseUrl, supabaseKey);