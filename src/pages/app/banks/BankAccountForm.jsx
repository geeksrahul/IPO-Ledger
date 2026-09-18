import { Building2, X } from "lucide-react";

const BankAccountForm = ({ mode, data, onClose}) => {
    const isUpdateMode = mode === "update";

    return (
        <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <Building2 className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {isUpdateMode
                                    ? "Update Bank Account"
                                    : "Add Bank Account"}
                            </h2>

                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {isUpdateMode
                                    ? "Update account details"
                                    : "Enter bank account details"}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close form"
                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-5 p-6">
                    {/* Applicant Name */}
                    <div className="space-y-2">
                        <label
                            htmlFor="applicant-name"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Applicant Name
                        </label>

                        <input
                            id="applicant-name"
                            name="applicant_name"
                            type="text"
                            defaultValue={data?.applicant_name || ""}
                            placeholder="Enter applicant name"
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                        />
                    </div>

                    {/* PAN Number */}
                    <div className="space-y-2">
                        <label
                            htmlFor="pan-number"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            PAN Number
                        </label>

                        <input
                            id="pan-number"
                            name="pan_number"
                            type="text"
                            maxLength={10}
                            defaultValue={data?.pan_number || ""}
                            placeholder="Enter PAN number"
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm uppercase tracking-wider text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                        />
                    </div>

                    {/* Account Number */}
                    <div className="space-y-2">
                        <label
                            htmlFor="account-number"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Account Number
                        </label>

                        <input
                            id="account-number"
                            name="account_number"
                            type="text"
                            inputMode="numeric"
                            defaultValue={data?.account_number || ""}
                            placeholder="Enter account number"
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm tracking-wide text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                        />
                    </div>

                    {/* Bank Name */}
                    <div className="space-y-2">
                        <label
                            htmlFor="bank-name"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Bank Name
                        </label>

                        <input
                            id="bank-name"
                            name="bank_name"
                            type="text"
                            defaultValue={data?.bank_name || ""}
                            placeholder="Enter bank name"
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                        />
                    </div>

                    {/* IFSC Code */}
                    <div className="space-y-2">
                        <label
                            htmlFor="ifsc-code"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            IFSC Code
                        </label>

                        <input
                            id="ifsc-code"
                            name="ifsc_code"
                            type="text"
                            maxLength={11}
                            defaultValue={data?.ifsc_code || ""}
                            placeholder="Enter IFSC code"
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm uppercase tracking-wider text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end dark:border-slate-700">
                        <button
                            type="button"
                            onClick={onClose}
                            className="h-11 rounded-xl border border-slate-200 px-5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="h-11 rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                        >
                            {isUpdateMode ? "Update Account" : "Add Account"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BankAccountForm;