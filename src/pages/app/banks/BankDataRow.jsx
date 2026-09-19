import { Edit } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { dbService } from "../../../supabase";

const BankDataRow = ({ bank, onClick }) => {
    const {
        applicant_id,
        account_number,
        bank_name,
        ifsc_code,
    } = bank;

    const maskedAccountNumber = `••••${account_number.slice(-4)}`;
    const [applicantName, setApplicantName] = useState("");
    
     useLayoutEffect(() => {
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
            <td className="px-6 py-5 text-sm font-medium text-slate-800 dark:text-slate-100">
                {applicantName}
            </td>

            <td className="px-6 py-5 text-sm tracking-wide text-slate-600 dark:text-slate-400">
                {maskedAccountNumber}
            </td>

            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {bank_name}
            </td>

            <td className="px-6 py-5 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                {ifsc_code}
            </td>

            {/* Edit Action */}
            <td className="px-6 py-5 text-sm font-medium text-slate-700 dark:text-slate-300">
                <button
                    type="button"
                    onClick={onClick}
                    aria-label={`Edit ${applicant_id}`}
                    className="rounded-lg p-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                    <Edit className="h-4 w-4" />
                </button>
            </td>
        </tr>
    );
};

export default BankDataRow;