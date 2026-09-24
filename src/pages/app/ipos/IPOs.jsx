import {
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Filter,
  Layers3,
  Search,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IPODataCard from "./IPODataCard";
import IPODataColumn from "./IPODataColumn";
import IPODataRow from "./IPODataRow";
import IPOSummaryCard from "./IPOSummaryCard";
import IPOForm from "./IPOForm";
import getIPOStatus from "../../../utils/ipo";
import { dbService } from "../../../supabase/dbService";
import { removeIPO } from "../../../feature/ipo/ipoSlice";
import { ConfirmationPopup } from "../../../components/ui"

const tableColumns = [
  "Company Name",
  "Cutoff Price",
  "Lot Size",
  "Open Date",
  "Close Date",
  "Allotment",
  "Listing",
  "Status",
  "Action",
];


function IPOs() {
  const dispatch = useDispatch();
  const [deletePopup, setDeletePopup] = useState({
    isOpen: false,
    data: {},
  });
  const ipoData = useSelector(state => state.ipo.data).map(ipo => {
    return { ...ipo, status: getIPOStatus(ipo) }
  });
  const summaryCards = [
    {
      label: "Total IPOs",
      value: ipoData.length,
      icon: Layers3,
    },
    {
      label: "Open IPOs",
      value: ipoData.filter(ipo => ipo.status === "open").length,
      icon: TrendingUp,
    },
    {
      label: "Upcoming",
      value: ipoData.filter(ipo => ipo.status === "upcoming").length,
      icon: Clock3,
    },
    {
      label: "Closed",
      value: ipoData.filter(ipo => ipo.status === "closed").length,
      icon: CalendarDays,
    },
  ];

  const [ipoForm, setIPOForm] = useState({
    mode: null,
    data: {},
  });

  const deleteIPO = async (ipoId) => {
    const response = await dbService.removeIPO(ipoId);
    if (response.success) {
      dispatch(removeIPO(ipoId));
      console.log("IPO deleted successfully");
    } else {
      console.log("Unable to delete IPO data", response.error);
    }
  }
  return (
    <section className="space-y-6">
      {ipoForm.mode &&
        <IPOForm
          mode={ipoForm.mode}
          data={ipoForm.data}
          onClose={() => {
            setIPOForm({
              mode: null,
              data: {},
            })
          }}
        />}
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            IPO Management
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            IPOs
          </h1>

          <p className="max-w-xl text-sm text-gray-500 dark:text-gray-400">
            Explore and track initial public offering information in one
            place.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <CircleDollarSign className="h-4 w-4" />
          <span>IPO Overview</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <IPOSummaryCard key={card.label} card={card} />
        ))}
      </div>

      {/* Search and Filters */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="search"
              placeholder="Search IPOs..."
              disabled
              aria-label="Search IPOs"
              className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-500 transition-colors disabled:cursor-not-allowed dark:border-gray-700 dark:text-gray-400"
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className="h-4 w-4" />
            </button>

            <button
              type="button"
              disabled
              className="inline-flex h-10 items-center justify-center rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-500 transition-colors disabled:cursor-not-allowed dark:border-gray-700 dark:text-gray-400"
            >
              All Statuses
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>

            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-lg border bg-emerald-600 text-white border-gray-200 px-5 text-sm font-medium transition-colors disabled:cursor-not-allowed dark:border-gray-700 dark:text-gray-400"
              onClick={() => {
                setIPOForm({
                  mode: "add",
                  data: {},
                })
              }}
            >
              Add IPO
            </button>
          </div>
        </div>
      </div>

      {/* IPO Data Section */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        {/* Section Header */}
        <div className="flex flex-col gap-1 border-b border-gray-200 px-4 py-4 sm:px-6 dark:border-gray-800">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            IPO Listings
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Overview of available and previously listed IPOs.
          </p>
        </div>

        {/* Mobile and Tablet Cards */}
        <div className="grid gap-3 p-4 lg:hidden">
          {ipoData.map((ipo) => (
            <IPODataCard
              key={ipo.id} ipo={ipo}
              onEdit={() => {
                setIPOForm({
                  mode: "update",
                  data: ipo,
                })
              }}
              onRemove={() => {
                setDeletePopup({
                  isOpen: true,
                  data: ipo,
                })
              }}
            />
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-275 text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500 dark:bg-gray-800/60 dark:text-gray-400">
              <tr>
                {tableColumns.map((column) => (
                  <IPODataColumn key={column} column={column} />
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {ipoData.map((ipo) => (
                <IPODataRow
                  key={ipo.id}
                  ipo={ipo}
                  onEdit={() => {
                    setIPOForm({
                      mode: "update",
                      data: ipo,
                    })
                  }}
                  onRemove={() => {
                    setDeletePopup({
                      isOpen: true,
                      data: ipo,
                    })
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-2 border-t border-gray-200 px-4 py-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:border-gray-800 dark:text-gray-400">
          <p>Showing {ipoData.length} IPOs</p>
          <p>Search and filtering will be added later.</p>
        </div>
      </div>
      {
        deletePopup.isOpen &&
        <ConfirmationPopup
          message="Are you sure you want to delete IPO ?"
          onConfirm={async () => {
            await deleteIPO(deletePopup.data.id);
            setDeletePopup({
              isOpen: false,
              data: {},
            })
          }}
          onCancel={() => {
            setDeletePopup({
              isOpen: false,
              data: {},
            })
          }}
        />
      }
    </section>
  );
}

export default IPOs;