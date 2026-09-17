import {
    Filter,
    Search,
    WalletCards,
} from "lucide-react";

import DematDataColumn from "./DematDataColumn";
import DematDataRow from "./DematDataRow";
import DematDataCard from "./DematDataCard";

const Demats = () => {
    const dematData = [
        {
            applicant_id: 1,
            applicant_name: "Rahul Baraiya",
            pan: "ABCDE1234F",
            broker: "Zerodha",
            loginPin: "123456",
            tpin: "456789",
        },
        {
            applicant_id: 2,
            applicant_name: "Amit Patel",
            pan: "FGHIJ5678K",
            broker: "Groww",
            loginPin: "234567",
            tpin: "567890",
        },
        {
            applicant_id: 3,
            applicant_name: "Neha Shah",
            pan: "KLMNO9012P",
            broker: "Upstox",
            loginPin: "345678",
            tpin: "678901",
        },
    ];

    const tableColumns = [
        "Applicant Name",
        "PAN",
        "Broker",
        "Login PIN",
        "TPIN",
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
                        Demat Accounts
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                        Manage applicant demat account details and broker information.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <WalletCards className="h-4 w-4" />
                    Demat Directory
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
                            {dematData.length}
                        </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <WalletCards className="h-5 w-5" />
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                        type="text"
                        placeholder="Search demat accounts..."
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
                        Demat Directory
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        View registered demat accounts.
                    </p>
                </div>

                {/* Mobile / Tablet Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                    {dematData.map((demat) => (
                        <DematDataCard
                            key={demat.applicant_id}
                            demat={demat}
                        />
                    ))}
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:block">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px] text-left">
                            <DematDataColumn columns={tableColumns} />

                            <tbody>
                                {dematData.map((demat) => (
                                    <DematDataRow
                                        key={demat.applicant_id}
                                        demat={demat}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Showing {dematData.length} demat accounts.
            </footer>
        </main>
    );
};

export default Demats;