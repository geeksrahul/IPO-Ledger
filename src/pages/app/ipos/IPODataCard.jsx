import React from 'react'
import IPOStatusBadge from './IPOStatusBadge'

function IPODataCard({ipo}) {
    return (
        <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
            {/* Company + Status */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
                        {ipo.symbol.slice(0, 2)}
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate font-semibold text-gray-900 dark:text-white">
                            {ipo.company}
                        </h3>

                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            {ipo.symbol}
                        </p>
                    </div>
                </div>

                <IPOStatusBadge status={ipo.status} />
            </div>

            {/* Price + Lot */}
            <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/60">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Cutoff Price
                    </p>

                    <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                        {ipo.cutoffPrice}
                    </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/60">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Lot Size
                    </p>

                    <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                        {ipo.lotSize} shares
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
                        {ipo.openDate}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Close Date
                    </p>

                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                        {ipo.closeDate}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Allotment Date
                    </p>

                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                        {ipo.allotmentDate}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Listing Date
                    </p>

                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                        {ipo.listingDate}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IPODataCard