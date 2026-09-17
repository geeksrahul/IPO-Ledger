import {
    EyeOff,
    ShieldCheck,
    UserRound,
    WalletCards,
} from "lucide-react";

const DematDataCard = ({ demat }) => {
    const {
        applicant_name,
        pan,
        broker,
        loginPin,
        tpin,
    } = demat;

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <WalletCards className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                    <h3 className="truncate font-semibold text-slate-800 dark:text-slate-100">
                        {applicant_name}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {broker}
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
                        {pan}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <ShieldCheck className="h-4 w-4" />
                        Login PIN
                    </div>

                    <span className="text-sm tracking-widest text-slate-600 dark:text-slate-400">
                        {"•".repeat(loginPin.length)}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <EyeOff className="h-4 w-4" />
                        TPIN
                    </div>

                    <span className="text-sm tracking-widest text-slate-600 dark:text-slate-400">
                        {"•".repeat(tpin.length)}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default DematDataCard;