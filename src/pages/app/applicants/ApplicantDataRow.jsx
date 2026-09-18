import { Edit } from "lucide-react";

const ApplicantDataRow = ({ applicant, onEdit }) => {
    const {
        name,
        email,
        contact,
        pan_number,
        dob,
    } = applicant;

    return (
        <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40">

            {/* Name */}
            <td className="px-6 py-5 text-sm font-medium text-slate-800 dark:text-slate-100">
                {name}
            </td>

            {/* Email */}
            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {email}
            </td>

            {/* Contact */}
            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {contact}
            </td>

            {/* PAN */}
            <td className="px-6 py-5 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                {pan_number}
            </td>

            {/* Date of Birth */}
            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {dob}
            </td>

            {/* Actions */}
            <td className="px-6 py-5 text-right">
                <button
                    type="button"
                    onClick={onEdit}
                    aria-label={`Edit ${name}`}
                    className="inline-flex rounded-lg p-2 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                >
                    <Edit className="h-4 w-4" />
                </button>
            </td>
        </tr>
    );
};

export default ApplicantDataRow;