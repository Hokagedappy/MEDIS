import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://htoxlmwfezbdnpfbzxbc.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0b3hsbXdmZXpiZG5wZmJ6eGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2MDUyMzAsImV4cCI6MjA5OTE4MTIzMH0.2ECIDnW_yYzgIWo7Tok3ATIDEpQilxkDKec702l3w64'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
