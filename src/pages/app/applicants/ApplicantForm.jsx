import { X, UserRound } from "lucide-react";
import { dbService } from "../../../supabase";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addApplicant, updateApplicant } from "../../../feature/applicants/applicantsSlice";

const ApplicantForm = ({ onClose, mode, data }) => {
    const {register, handleSubmit} = useForm();
    const isUpdateMode = mode === "update";
    const user_id = useSelector(state => state.auth.userData.id);
    const {name, contact, email, pan_number, dob} = data;
    const dispatch = useDispatch();
    const handleApplicantFormSubmit = async (formData) => {
        const {name, contact, email, pan_number, dob} = formData;
        if(isUpdateMode) {
            const response = await dbService.updateApplicant(data.id, {name, contact, email, pan_number, dob, user_id});
            if(response.success) {
                console.log(data.id);
                dispatch(updateApplicant({
                    id: data.id,
                    data : {
                        name, contact, email, pan_number, dob
                    }
                }));
                console.log("applicant updated successfully");
                onClose();
            } else {
                console.log("can't update applicant", response.error);
            }
        } else {
            const response = await dbService.createApplicant({name, contact, email, pan_number, dob, user_id});
            if(response.success) {
                dispatch(addApplicant(response.data));
                console.log("applicant added successfully");
                onClose();
            } else {
                console.log("can't add applicant", response.error);
            }
        }
    }
    return (
        <div className="h-screen fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
            {/* Form Container */}
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <UserRound className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {mode === "update" ? "Update" : "Add"} Applicant
                            </h2>

                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Enter applicant details
                            </p>
                        </div>
                    </div>

                    {/* Close Button */}
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
                <form
                    className="space-y-5 p-6"
                    onSubmit={handleSubmit(handleApplicantFormSubmit)}
                >
                    {/* Name */}
                    <div className="space-y-2">
                        <label
                            htmlFor="applicant-name"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Full Name
                        </label>

                        <input
                            id="applicant-name"
                            name="name"
                            type="text"
                            placeholder="Enter full name"
                            defaultValue={name}
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                            {...register("name",{
                                required: {
                                    value: true,
                                    message: "field cannot remain empty"
                                }
                            })}
                        />
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                        <label
                            htmlFor="applicant-contact"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Contact Number
                        </label>

                        <input
                            id="applicant-contact"
                            name="contact"
                            type="tel"
                            placeholder="Enter contact number"
                            defaultValue={contact}
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                            {...register("contact",{
                                required: {
                                    value: true,
                                    message: "field cannot remain empty"
                                }
                            })}
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label
                            htmlFor="applicant-email"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Email Address
                        </label>

                        <input
                            id="applicant-email"
                            name="email"
                            type="email"
                            placeholder="Enter email address"
                            defaultValue={email}
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                            {...register("email",{
                                required: {
                                    value: true,
                                    message: "field cannot remain empty"
                                }
                            })}
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="space-y-2">
                        <label
                            htmlFor="applicant-dob"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            Date of Birth
                        </label>

                        <input
                            id="applicant-dob"
                            name="dob"
                            type="date"
                            defaultValue={dob}
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                            {...register("dob",{
                                required: {
                                    value: true,
                                    message: "field cannot remain empty"
                                }
                            })}
                        />
                    </div>

                    {/* PAN */}
                    <div className="space-y-2">
                        <label
                            htmlFor="applicant-pan"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            PAN Number
                        </label>

                        <input
                            id="applicant-pan"
                            name="pan"
                            type="text"
                            placeholder="Enter PAN number"
                            maxLength={10}
                            defaultValue={pan_number}
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm uppercase tracking-wider text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                            {...register("pan_number",{
                                required: {
                                    value: true,
                                    message: "field cannot remain empty"
                                }
                            })}
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
                            {mode === "update" ? "Update" : "Add"} Applicant
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicantForm;