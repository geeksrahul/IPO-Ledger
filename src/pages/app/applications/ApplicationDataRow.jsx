import { Edit } from "lucide-react";

const getStatusClasses = (status) => {
  const statusStyles = {
    accepted:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",

    pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",

    rejected:
      "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",

    allotted:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",

    "not allotted":
      "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
  };

  return (
    statusStyles[status?.toLowerCase()] ||
    "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
  );
};

const ApplicationDataRow = ({ application, onEdit }) => {
  const {
    applicants,
    applied_lots,
    invested_amount,
    alloted_lots,
    selling_price,
    sales_proceeds,
    mandate_status,
    allotment_status,
  } = application;

  const isAllotted = allotment_status?.toLowerCase() === "allotted";

  const profit =
    isAllotted && sales_proceeds != null
      ? Number(sales_proceeds) - Number(invested_amount || 0)
      : null;

  return (
    <tr className="border-b border-slate-200 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50">

      {/* IPO */}
      <td className="whitespace-nowrap px-5 py-4">
        <div className="font-medium text-slate-900 dark:text-white">
          {application?.IPO?.company_name || "—"}
        </div>
      </td>

      {/* Applicant */}
      <td className="whitespace-nowrap px-5 py-4">
        <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
          {applicants?.name || "—"}
        </div>
      </td>

      {/* Bank */}
      <td className="whitespace-nowrap px-5 py-4">
        <div className="text-sm text-slate-700 dark:text-slate-300">
          {application?.["bank-accounts"]?.bank_name || "—"}
        </div>

        <div className="text-xs text-slate-400 dark:text-slate-500">
          {application?.["bank-accounts"]?.account_number
            ? `••••${application["bank-accounts"].account_number.slice(-4)}`
            : ""}
        </div>
      </td>

      {/* Applied Lots */}
      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
        <span className="font-medium text-slate-900 dark:text-white">
          {applied_lots || 0}
        </span>{" "}
        {Number(applied_lots) === 1 ? "Lot" : "Lots"}
      </td>

      {/* Invested */}
      <td className="whitespace-nowrap px-5 py-4">
        <span className="text-sm font-semibold text-slate-900 dark:text-white">
          ₹{Number(invested_amount || 0).toLocaleString("en-IN")}
        </span>
      </td>

      {/* Allotted Lots */}
      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
        {isAllotted ? (
          <span className="font-medium text-slate-900 dark:text-white">
            {alloted_lots || 0}
          </span>
        ) : (
          <span className="text-slate-400 dark:text-slate-500">
            —
          </span>
        )}
      </td>

      {/* Selling Price */}
      <td className="whitespace-nowrap px-5 py-4">
        {isAllotted && selling_price != null ? (
          <span className="text-sm font-medium text-slate-900 dark:text-white">
            ₹{Number(selling_price).toLocaleString("en-IN")}
          </span>
        ) : (
          <span className="text-slate-400 dark:text-slate-500">
            —
          </span>
        )}
      </td>

      {/* Sale Proceeds */}
      <td className="whitespace-nowrap px-5 py-4">
        {isAllotted && sales_proceeds != null ? (
          <span className="text-sm font-semibold text-slate-900 dark:text-white">
            ₹{Number(sales_proceeds).toLocaleString("en-IN")}
          </span>
        ) : (
          <span className="text-slate-400 dark:text-slate-500">
            —
          </span>
        )}
      </td>

      {/* Profit */}
      <td className="whitespace-nowrap px-5 py-4">
        {profit !== null ? (
          <span
            className={`text-sm font-semibold ${
              profit > 0
                ? "text-emerald-600 dark:text-emerald-400"
                : profit < 0
                  ? "text-red-600 dark:text-red-400"
                  : "text-slate-600 dark:text-slate-400"
            }`}
          >
            {profit > 0 ? "+" : ""}₹
            {profit.toLocaleString("en-IN")}
          </span>
        ) : (
          <span className="text-slate-400 dark:text-slate-500">
            —
          </span>
        )}
      </td>

      {/* Action */}
      <td className="px-5 py-4 text-right">
        <button
          type="button"
          onClick={onEdit}
          aria-label={`Edit application of ${
            applicants?.name || "applicant"
          }`}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
        >
          <Edit className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
};

export default ApplicationDataRow;