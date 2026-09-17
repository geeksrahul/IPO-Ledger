const BankDataRow = ({ bank }) => {
    const {
        applicant_name,
        pan_number,
        account_number,
        bank_name,
        ifsc_code,
    } = bank;

    const maskedAccountNumber = `••••${account_number.slice(-4)}`;

    return (
        <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40">
            {/* Applicant Name */}
            <td className="px-6 py-5 text-sm font-medium text-slate-800 dark:text-slate-100">
                {applicant_name}
            </td>

            {/* PAN Number */}
            <td className="px-6 py-5 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                {pan_number}
            </td>

            {/* Account Number */}
            <td className="px-6 py-5 text-sm tracking-wide text-slate-600 dark:text-slate-400">
                {maskedAccountNumber}
            </td>

            {/* Bank Name */}
            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {bank_name}
            </td>

            {/* IFSC Code */}
            <td className="px-6 py-5 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                {ifsc_code}
            </td>
        </tr>
    );
};

export default BankDataRow;