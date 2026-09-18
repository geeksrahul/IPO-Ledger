import SupabaseService from "./supabaseService";

class AuthService extends SupabaseService {
    constructor() {
        super();
    }
    // signIn or login
    async login({email, password}) {
        try {
            const {data, error} = await this.supabase.auth.signInWithPassword({email, password});            
            if(error) throw error;
            return {
                data,
                success: true,
                error: null,
            };
        } catch (error) {
            return {
                data:null,
                success: false,
                error
            };
        }
    }
    // signUp  or register
    async register({email, password}) {
        try {
            const {data, error} = await this.supabase.auth.signUp({email, password});
            if(error) throw error;
            return {
                data,
                success: true,
                error:null,
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                success: false,
                error,
            };
        }
    }
}

export const authService = new AuthService();