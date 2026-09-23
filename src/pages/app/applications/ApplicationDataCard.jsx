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

const ApplicationDataCard = ({ application, onEdit }) => {
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
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-slate-900 dark:text-white">
            {application?.IPO?.company_name || "—"}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {applicants?.name || "—"}
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          aria-label={`Edit application of ${
            applicants?.name || "applicant"
          }`}
          className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
        >
          <Edit className="h-4 w-4" />
        </button>
      </div>

      {/* Status */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${getStatusClasses(
            mandate_status
          )}`}
        >
          Mandate: {mandate_status || "Pending"}
        </span>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${getStatusClasses(
            allotment_status
          )}`}
        >
          {allotment_status || "Pending"}
        </span>
      </div>

      {/* Application Details */}
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">

        {/* Bank */}
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Bank
          </p>

          <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
            {application?.["bank-accounts"]?.bank_name || "—"}
          </p>
        </div>

        {/* Applied Lots */}
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Applied Lots
          </p>

          <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
            {applied_lots || 0}{" "}
            {Number(applied_lots) === 1 ? "Lot" : "Lots"}
          </p>
        </div>

        {/* Invested */}
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Invested
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
            ₹{Number(invested_amount || 0).toLocaleString("en-IN")}
          </p>
        </div>

        {/* Allotted Lots */}
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Allotted Lots
          </p>

          <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
            {isAllotted ? alloted_lots || 0 : "—"}
          </p>
        </div>

        {/* Selling Price */}
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Selling Price
          </p>

          <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
            {isAllotted && selling_price != null
              ? `₹${Number(selling_price).toLocaleString("en-IN")}`
              : "—"}
          </p>
        </div>

        {/* Sale Proceeds */}
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sale Proceeds
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
            {isAllotted && sales_proceeds != null
              ? `₹${Number(sales_proceeds).toLocaleString("en-IN")}`
              : "—"}
          </p>
        </div>
      </div>

      {/* Profit */}
      {profit !== null && (
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Profit
            </p>

            <p
              className={`text-sm font-bold ${
                profit > 0
                  ? "text-emerald-600 dark:text-emerald-400"
                  : profit < 0
                    ? "text-red-600 dark:text-red-400"
                    : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {profit > 0 ? "+" : ""}₹
              {profit.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

export default ApplicationDataCard;