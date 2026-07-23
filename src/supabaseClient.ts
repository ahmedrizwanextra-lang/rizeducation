import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owkxtvzxkxhehmlockis.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93a3h0dnp4a3hoZWhtbG9ja2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxOTg1NTcsImV4cCI6MjA5OTc3NDU1N30.Yk-jq-xD8XBWTf5DlNAO7s4IKDUDraoZcCMsi3obKCI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
