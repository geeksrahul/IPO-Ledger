import SupabaseService from "./supabaseService";
import executeService from "./utils/executeService";

class DbService extends SupabaseService {
    constructor() {
        super();
    }
    // CRUD: Applicant
    async getApplicants() {
        return executeService(()=> {
           return this.supabase.client.from("applicants").select("*");
        });
    }
    async createApplicant(applicant) {
        return executeService(() => {
            return this.client.from("applicants").insert(applicant).select().single();
        })
    }
    async deleteApplicant(id) {
        return executeService(() => {
            return this.client.from("applicants").delete().eq("id", id);
        })
    }
    async updateApplicant(id, applicant) {
        return executeService(() => {
            return this.client.from("applicants").update(applicant).eq("id", id).select().single();
        })
    }
}

export const dbService = new DbService();

