import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

class SupabaseService {
    supabase;
    constructor() {
        if(!supabaseUrl || !supabaseKey) {
            throw new Error("Supabase Environment Variables Are Missing");
        }
        
        this.supabase = createClient(supabaseUrl, supabaseKey);
       
    }
}

export default SupabaseService;