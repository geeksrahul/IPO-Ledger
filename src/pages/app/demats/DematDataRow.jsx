const DematDataRow = ({ demat }) => {
    const {
        applicant_name,
        pan,
        broker,
        loginPin,
        tpin,
    } = demat;

    return (
        <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40">
            {/* Applicant Name */}
            <td className="px-6 py-5 text-sm font-medium text-slate-800 dark:text-slate-100">
                {applicant_name}
            </td>

            {/* PAN */}
            <td className="px-6 py-5 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
                {pan}
            </td>

            {/* Broker */}
            <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                {broker}
            </td>

            {/* Login PIN */}
            <td className="px-6 py-5 text-sm tracking-widest text-slate-600 dark:text-slate-400">
                {"•".repeat(loginPin.length)}
            </td>

            {/* TPIN */}
            <td className="px-6 py-5 text-sm tracking-widest text-slate-600 dark:text-slate-400">
                {"•".repeat(tpin.length)}
            </td>
        </tr>
    );
};

export default DematDataRow;