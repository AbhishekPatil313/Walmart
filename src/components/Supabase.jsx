import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rszknqntkyexxofuyiwa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzemtucW50a3lleHhvZnV5aXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMDE3MTksImV4cCI6MjA0MjY3NzcxOX0.nfW6s4Ji0C093yPcIuWkXkBu-z90p6FQiAuu7oeQ1qs'
const Supabase = createClient(supabaseUrl, supabaseKey)

export default Supabase;