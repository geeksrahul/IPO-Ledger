import {
    Building2,
    CreditCard,
    ShieldCheck,
    UserRound,
} from "lucide-react";

const BankDataCard = ({ bank }) => {
    const {
        applicant_name,
        pan_number,
        account_number,
        bank_name,
        ifsc_code,
    } = bank;

    const maskedAccountNumber = `••••${account_number.slice(-4)}`;

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <Building2 className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                    <h3 className="truncate font-semibold text-slate-800 dark:text-slate-100">
                        {applicant_name}
                    </h3>

                    <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                        {bank_name}
                    </p>
                </div>
            </div>

            {/* Details */}
            <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <UserRound className="h-4 w-4" />
                        PAN
                    </div>

                    <span className="text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                        {pan_number}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <CreditCard className="h-4 w-4" />
                        Account
                    </div>

                    <span className="text-sm tracking-wide text-slate-600 dark:text-slate-400">
                        {maskedAccountNumber}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Building2 className="h-4 w-4" />
                        Bank
                    </div>

                    <span className="text-right text-sm text-slate-600 dark:text-slate-400">
                        {bank_name}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <ShieldCheck className="h-4 w-4" />
                        IFSC
                    </div>

                    <span className="text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                        {ifsc_code}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default BankDataCard;