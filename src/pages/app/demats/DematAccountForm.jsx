import { Building2, Eye, EyeOff, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dbService } from "../../../supabase";
import { addDematAccount, updateDematAccount } from "../../../feature/accounts/dematSlice";
import { useState } from "react";

const DematAccountForm = ({ mode, data, onClose }) => {
    const isUpdateMode = mode === "update";
    const { register, handleSubmit } = useForm();
    const user_id = useSelector(
        state => state.auth.userData.id
    )
    const applicants = useSelector(
        state => state.applicants.data
    );

    const [showLoginPin, setShowLoginPin] = useState(false);
    const [showTpin, setShowTpin] = useState(false);


    const dispatch = useDispatch();
    const handleDematAccountForm = async (formData) => {
        if (isUpdateMode) {
            const response = await dbService.updateDematAccount(data.id, { ...formData, user_id });
            if (response.success) {
                dispatch(updateDematAccount({ id: data.id, data: response.data }));
            } else {
                console.log("cannot update demat account");
            }
        } else {
            const response = await dbService.createDematAccount({ ...formData, user_id });
            if (response.success) {
                dispatch(addDematAccount(response.data));
            } else {
                console.log("cannot add demat account", response.error);
            }
        }
        onClose();
    }
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
                    onSubmit={handleSubmit(handleDematAccountForm)}
                >
                    {/* Applicant Name */}
                    <div className="space-y-2">
                        <label
                            htmlFor="applicant-name"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Select Applicant
                        </label>

                        <select
                            id="applicant-name"
                            name="applicant_id"
                            defaultValue={data?.applicant_id || ""}
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                            {...register("applicant_id", {
                                required: {
                                    value: true,
                                    message: "Field cannot remain empty"
                                }
                            })}
                        >
                            <option value="" disabled>
                                Select applicant
                            </option>

                            {applicants?.map((applicant) => (
                                <option
                                    key={applicant.id}
                                    value={applicant.id}
                                >
                                    {applicant.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Broker */}
                    <div>
                        <label
                            htmlFor="broker"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Broker Name (i.e. Angle One, Grow, Upstox, Zerodha)
                        </label>

                        <input
                            id="broker"
                            name="broker"
                            type="text"
                            placeholder="Enter broker name"
                            defaultValue={data?.broker || ""}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                            {...register("broker", {
                                required: {
                                    value: true,
                                    message: "Field cannot remain empty"
                                }
                            })}
                        />
                    </div>

                    {/* Login Pin */}
                    <div>
                        <label
                            htmlFor="login-pin"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Login Pin
                        </label>

                        <div className="relative">
                            <input
                                id="login-pin"
                                name="login-pin"
                                type={showLoginPin ? "text" : "password"}
                                placeholder="Enter TPIN"
                                defaultValue={data?.pin || ""}
                                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                                {...register("pin", {
                                    required: {
                                        value: true,
                                        message: "Field cannot remain empty",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "Login pin must be 4 digits",
                                    },
                                    maxLength: {
                                        value: 4,
                                        message: "Login pin must be 4 digits",
                                    },
                                })}
                            />

                            <button
                                type="button"
                                onClick={() => setShowLoginPin((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-200"
                                aria-label={showLoginPin ? "Hide Login Pin" : "Show Login Pin"}
                            >
                                {showLoginPin ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* TPIN */}
                    <div>
                        <label
                            htmlFor="tpin"
                            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            TPIN
                        </label>

                        <div className="relative">
                            <input
                                id="tpin"
                                name="tpin"
                                type={showTpin ? "text" : "password"}
                                placeholder="Enter TPIN"
                                defaultValue={data?.tpin || ""}
                                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                                {...register("tpin", {
                                    required: {
                                        value: true,
                                        message: "Field cannot remain empty",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "TPIN must be 6 digits",
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: "TPIN must be 6 digits",
                                    },
                                })}
                            />

                            <button
                                type="button"
                                onClick={() => setShowTpin((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-200"
                                aria-label={showTpin ? "Hide TPIN" : "Show TPIN"}
                            >
                                {showTpin ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
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