import React from "react";
import { Pencil, Trash2 } from "lucide-react";

import IPOStatusBadge from "./IPOStatusBadge";

function IPODataCard({ ipo, onEdit, onRemove }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
      {/* Company + Status + Actions */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
            {ipo.company_name.toUpperCase().slice(0, 2)}
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-gray-900 dark:text-white">
              {ipo.company_name}
            </h3>

            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {ipo.company_name.split(" ")[0]}
            </p>
          </div>
        </div>

        {/* Status + Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <IPOStatusBadge status={ipo.status} />

          <button
            type="button"
            onClick={onEdit}
            aria-label={`Edit ${ipo.company_name}`}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-emerald-50 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-gray-400 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-400"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${ipo.company_name}`}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-red-400/10 dark:hover:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Price + Lot */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/60">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Cutoff Price
          </p>
          <p className="mt-1 font-semibold text-gray-900 dark:text-white">
            {ipo.cutoff_price}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/60">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Lot Size
          </p>
          <p className="mt-1 font-semibold text-gray-900 dark:text-white">
            {ipo.lot_size} shares
          </p>
        </div>
      </div>

      {/* Dates */}
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Open Date
          </p>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            {ipo.open_date}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Close Date
          </p>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            {ipo.close_date}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Allotment Date
          </p>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            {ipo.allotment_date}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Listing Date
          </p>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            {ipo.listing_date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IPODataCard;