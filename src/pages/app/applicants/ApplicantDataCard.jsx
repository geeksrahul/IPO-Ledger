import {
  CalendarDays,
  Mail,
  Phone,
  ShieldCheck,
  Pencil,
  Trash2,
} from "lucide-react";

const ApplicantDataCard = ({ applicant, onEdit, onRemove }) => {
  const { name, email, contact, pan_number, dob } = applicant;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-base font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-slate-800 dark:text-slate-100">
              {name}
            </h3>
            <p className="truncate text-sm text-slate-500 dark:text-slate-400">
              Applicant
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onEdit}
            aria-label={`Edit ${name}`}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${name}`}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-slate-400 dark:hover:bg-red-500/10 dark:hover:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Applicant Details */}
      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <Mail className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="truncate text-slate-600 dark:text-slate-400">
            {email}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Phone className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="text-slate-600 dark:text-slate-400">
            {contact}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <ShieldCheck className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="font-medium tracking-wide text-slate-700 dark:text-slate-300">
            {pan_number.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <CalendarDays className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="text-slate-600 dark:text-slate-400">
            {dob}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ApplicantDataCard;