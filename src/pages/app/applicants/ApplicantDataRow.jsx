const ApplicantDataRow = ({ applicant, onClick }) => {
    const { name, email, contact, pan_number, dob } = applicant;

    return (
        <tr onClick={onClick} className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40">

            <td className="px-6 py-5 text-sm font-medium text-slate-800 dark:text-slate-100">
                {name}
            </td>

            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {email}
            </td>

            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {contact}
            </td>

            <td className="px-6 py-5 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                {pan_number}
            </td>

            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {dob}
            </td>
        </tr>
    );
};

export default ApplicantDataRow;