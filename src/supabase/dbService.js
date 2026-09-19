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
}

export const dbService = new DbService(supabase);

