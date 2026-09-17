import {
    Building2,
    Filter,
    Search,
} from "lucide-react";

import BankDataColumn from "./BankDataColumn";
import BankDataRow from "./BankDataRow";
import BankDataCard from "./BankDataCard";

const Banks = () => {
    const bankData = [
        {
            applicant_id: 1,
            applicant_name: "Rahul Baraiya",
            pan_number: "ABCDE1234F",
            account_number: "123456789012",
            bank_name: "HDFC Bank",
            ifsc_code: "HDFC0001234",
        },
        {
            applicant_id: 2,
            applicant_name: "Amit Patel",
            pan_number: "FGHIJ5678K",
            account_number: "234567890123",
            bank_name: "State Bank of India",
            ifsc_code: "SBIN0004567",
        },
        {
            applicant_id: 3,
            applicant_name: "Neha Shah",
            pan_number: "KLMNO9012P",
            account_number: "345678901234",
            bank_name: "ICICI Bank",
            ifsc_code: "ICIC0007890",
        },
    ];

    const tableColumns = [
        "Applicant Name",
        "PAN Number",
        "Account Number",
        "Bank Name",
        "IFSC Code",
    ];

    return (
        <main className="space-y-8">
            {/* Page Header */}
            <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Account Management
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                        Bank Accounts
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                        Manage applicant bank account details and banking information.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Building2 className="h-4 w-4" />
                    Bank Directory
                </div>
            </section>

            {/* Summary Card */}
            <section className="max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            Total Accounts
                        </p>

                        <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                            {bankData.length}
                        </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <Building2 className="h-5 w-5" />
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                        type="text"
                        placeholder="Search bank accounts..."
                        disabled
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    />
                </div>

                <button
                    type="button"
                    disabled
                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400"
                >
                    <Filter className="h-4 w-4" />
                    Filters
                </button>
            </section>

            {/* Directory */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Bank Directory
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        View registered applicant bank accounts.
                    </p>
                </div>

                {/* Mobile / Tablet Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                    {bankData.map((bank) => (
                        <BankDataCard
                            key={bank.applicant_id}
                            bank={bank}
                        />
                    ))}
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:block">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px] text-left">
                            <BankDataColumn columns={tableColumns} />

                            <tbody>
                                {bankData.map((bank) => (
                                    <BankDataRow
                                        key={bank.applicant_id}
                                        bank={bank}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Showing {bankData.length} bank accounts.
            </footer>
        </main>
    );
};

export default Banks;