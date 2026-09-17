import React from 'react'

function IPOSummaryCard({card}) {
    const Icon = card.icon;
    return (
        <div
            className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
        >
            <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm">
                    {card.label}
                </p>

                <Icon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            </div>

            <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                {card.value}
            </p>
        </div>
    )
}

export default IPOSummaryCard