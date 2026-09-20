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
                        {ipo.company_name.toUpperCase().slice(0, 2)}
                    </div>

                    <div>
                        <p className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {ipo.company_name}
                        </p>

                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            {ipo.company_name.split(" ")[0]}
                        </p>
                    </div>
                </div>
            </td>

            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-gray-200">
                {ipo.cutoff_price}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.lot_size} shares
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.open_date}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.close_date}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.allotment_date}
            </td>

            <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                {ipo.listing_date}
            </td>

            <td className="px-6 py-4">
                <IPOStatusBadge status={ipo.status} />
            </td>
        </tr>
    )
}

export default IPODataRow