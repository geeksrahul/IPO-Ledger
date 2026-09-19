import { Edit } from "lucide-react";
import { dbService } from "../../../supabase";
import { useEffect, useState } from "react";

const DematDataRow = ({ demat, onEdit }) => {
    const {
        applicant_id,
        pan,
        broker,
        pin,
        tpin,
    } = demat;
    const [applicantName, setApplicantName] = useState("");
    useEffect(() => {
        const loadApplicantData = async () => {
            const response = await dbService.getApplicantById(applicant_id);
            if(response.success) {
                setApplicantName(response.data.name);
            } else {
                console.log("error: ",response.error)
            }
        }
        loadApplicantData();
    }, [applicant_id]);
    return (
        <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40">

            {/* Applicant Name */}
            <td className="px-6 py-5 text-sm font-medium text-slate-800 dark:text-slate-100">
                {applicantName}
            </td>

            {/* Broker */}
            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {broker}
            </td>

            {/* Login PIN */}
            <td className="px-6 py-5 text-sm tracking-widest text-slate-600 dark:text-slate-400">
                {"•".repeat(pin?.length || 0)}
            </td>

            {/* TPIN */}
            <td className="px-6 py-5 text-sm tracking-widest text-slate-600 dark:text-slate-400">
                {"•".repeat(tpin?.length || 0)}
            </td>

            {/* Actions */}
            <td className="px-6 py-5">
                <button
                    type="button"
                    onClick={onEdit}
                    aria-label={`Edit ${applicantName}'s demat account`}
                    className="inline-flex rounded-lg p-2 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                >
                    <Edit className="h-4 w-4"/>
                </button>
            </td>
        </tr>
    );
};

export default DematDataRow;