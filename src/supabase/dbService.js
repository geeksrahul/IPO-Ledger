import supabase from "./supabaseService";
import executeService from "./utils/executeService";

class DbService {
    constructor(supabase) {
        this.supabase = supabase;
    }
    // CRUD: Applicant
    async getApplicants() {
        return executeService(()=> {
            return this.supabase.from("applicants").select("*");
        });
    }
    async getApplicantById(id) {
        return executeService(() => {
            return this.supabase.from("applicants").select("*").eq("id", id).single();
        });
    }
    async createApplicant(applicant) {
        return executeService(() => {
            return this.supabase.from("applicants").insert(applicant).select().single();
        })
    }
    async deleteApplicant(id) {
        return executeService(() => {
            return this.supabase.from("applicants").delete().eq("id", id);
        })
    }
    async updateApplicant(id, applicant) {
        return executeService(() => {
            return this.supabase.from("applicants").update(applicant).eq("id", id).select().single();
        })
    }
    // CRUD: bank accounts
    async getBankAccounts() {
        return executeService(() => {
            return this.supabase.from("bank-accounts").select("*");
        })
    }
    async createBankAccount(bankAccount) {
        return executeService(() => {
            return this.supabase.from("bank-accounts").insert(bankAccount).select().single();
        })
    }
    async removeBankAccount(bankAccountId) {
        return executeService(() => {
            return this.supabase.from("bank-accounts").delete().eq("id", bankAccountId).select().single();
        })
    }
    async updateBankAccount(bankAccountId, bankAccountData) {
        return executeService(() => {
            return this.supabase.from("bank-accounts").update(bankAccountData).eq("id", bankAccountId).select().single();
        })
    }
    // CRUD: Demat Account
    async getDematAccounts(){
        return executeService(() => {
            return this.supabase.from("demats").select("*");
        });
    }
    async getDematAccountById(id) {
        return executeService(() => {
            return this.supabase.from("demats").select("*").eq("id", id).single();
        });
    }
    async createDematAccount(dematAccountData) {
        return executeService(() => {
            return this.supabase.from("demats").insert(dematAccountData).select().single();
        });
    }
    async removeDematAccount(dematId) {
        return executeService(() => {
            return this.supabase.from("demats").delete().eq("id", dematId).select().single();
        });
    }
    async updateDematAccount(dematId, dematAccountData) {
        return executeService(() => {
            return this.supabase.from("demats").update(dematAccountData).eq("id", dematId).select().single();
        });
    }
    // CRUD: IPO
    async getIPOs() {
        return executeService(() => {
            return this.supabase.from("IPO").select("*");
        });
    }
    async getIPOById(id) {
        return executeService(() => {
            return this.supabase.from("IPO").select("*").eq("id", id).single();
        });
    }
    async createIPO(ipoData) {
        return executeService(() => {
            return this.supabase.from("IPO").insert(ipoData).select().single();
        });
    }
    async removeIPO(ipoId) {
        return executeService(() => {
            return this.supabase.from("IPO").delete().eq("id", ipoId).select().single();
        });
    }
    async updateIPO(ipoId, ipoData) {
        return executeService(() => {
            return this.supabase.from("IPO").update(ipoData).eq("id", ipoId).select().single();
        });
    }
}

export const dbService = new DbService(supabase);

