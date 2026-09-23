const ApplicationDataColumn = ({ columns }) => {
  return (
    <thead className="bg-slate-50 dark:bg-slate-800/70">
      <tr>
        {columns.map((column) => (
          <th
            key={column}
            scope="col"
            className="whitespace-nowrap px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ApplicationDataColumn;