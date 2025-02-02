import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjgyiltxejmzegrtyzmu.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY; // Utilisation d'une variable d'environnement pour des raisons de sécurité
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
