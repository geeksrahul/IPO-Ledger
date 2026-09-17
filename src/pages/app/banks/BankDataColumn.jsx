const BankDataColumn = ({ columns }) => {
    return (
        <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50">
            <tr>
                {columns.map((column) => (
                    <th
                        key={column}
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                        {column}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default BankDataColumn;