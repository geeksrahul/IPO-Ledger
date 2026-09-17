import React from 'react'
import IPOStatusBadge from './IPOStatusBadge'

function IPODataRow({ipo}) {
    return (
        <tr
            className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
        >
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
                        {ipo.symbol.slice(0, 2)}
                    </div>

                    <div>
                        <p className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {ipo.company}
                        </p>

                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            {ipo.symbol}
                        </p>
                    </div>
                </div>
            </td>

            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-gray-200">
                {ipo.cutoffPrice}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.lotSize} shares
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.openDate}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.closeDate}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.allotmentDate}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.listingDate}
            </td>

            <td className="px-6 py-4">
                <IPOStatusBadge status={ipo.status} />
            </td>
        </tr>
    )
}

export default IPODataRow