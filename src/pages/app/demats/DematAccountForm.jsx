import { Building2, X } from "lucide-react";

const DematAccountForm = ({ mode, data, onClose }) => {
    const isUpdateMode = mode === "update";
    return (
        <div className="h-screen fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <Building2 className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {isUpdateMode
                                    ? "Update Demat Account"
                                    : "Add Demat Account"}
                            </h2>

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Enter demat account details
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                        aria-label="Close form"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <form
                    className="space-y-5 px-6 py-6"
                >
                    {/* Applicant Name */}
                    <div>
                        <label
                            htmlFor="applicant_name"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Applicant Name
                        </label>

                        <input
                            id="applicant_name"
                            name="applicant_name"
                            type="text"
                            placeholder="Enter applicant name"
                            defaultValue={data?.applicant_name || ""}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    {/* PAN Number */}
                    <div>
                        <label
                            htmlFor="pan"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            PAN Number
                        </label>

                        <input
                            id="pan"
                            name="pan"
                            type="text"
                            placeholder="Enter PAN number"
                            defaultValue={data?.pan || ""}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm uppercase text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    {/* Applicant Record */}
                    <div>
                        <label
                            htmlFor="applicant_Record"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Applicant Record
                        </label>

                        <input
                            id="applicant_Record"
                            name="applicant_Record"
                            type="text"
                            placeholder="Enter applicant record ID"
                            defaultValue={data?.applicant_Record || ""}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    {/* Broker */}
                    <div>
                        <label
                            htmlFor="broker"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Broker
                        </label>

                        <input
                            id="broker"
                            name="broker"
                            type="text"
                            placeholder="Enter broker name"
                            defaultValue={data?.broker || ""}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    {/* Login PIN */}
                    <div>
                        <label
                            htmlFor="loginPin"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Login PIN
                        </label>

                        <input
                            id="loginPin"
                            name="loginPin"
                            type="password"
                            placeholder="Enter login PIN"
                            defaultValue={data?.loginPin || ""}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    {/* TPIN */}
                    <div>
                        <label
                            htmlFor="tpin"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            TPIN
                        </label>

                        <input
                            id="tpin"
                            name="tpin"
                            type="password"
                            placeholder="Enter TPIN"
                            defaultValue={data?.tpin || ""}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-5 dark:border-slate-700">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                        >
                            {isUpdateMode ? "Update Account" : "Add Account"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DematAccountForm;