import { useState } from "react";

import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  Filter,
  Plus,
  Search,
  Wallet,
} from "lucide-react";

import { useSelector } from "react-redux";

import ApplicationDataCard from "./ApplicationDataCard";
import ApplicationDataColumn from "./ApplicationDataColumn";
import ApplicationDataRow from "./ApplicationDataRow";
import ApplicationForm from "./ApplicationForm";

const Applications = () => {
  const [applicationForm, setApplicationForm] = useState({
    mode: null,
    data: {},
  });

  const applications =
    useSelector((state) => state?.application?.data) || [];

  const summaryCards = [
    {
      title: "Total Applications",
      value: applications.length,
      icon: ClipboardList,
    },
    {
      title: "Pending Mandates",
      value: applications.filter(
        (application) => application.mandate_status === "pending"
      ).length,
      icon: Clock3,
    },
    {
      title: "Allotted",
      value: applications.filter(
        (application) => application.allotment_status === "allotted"
      ).length,
      icon: CheckCircle2,
    },
    {
      title: "Total Invested",
      value: `₹${applications
        .reduce(
          (total, application) =>
            total + Number(application.profit || 0),
          0
        )
        .toLocaleString("en-IN")}`,
      icon: Wallet,
    },
  ];

  const tableColumns = [
    "IPO",
    "Applicant",
    "Bank",
    "Applied Lots",
    "Invested",
    "Allotted Lots",
    "Selling Price",
    "Sale Proceeds",
    "Profit",
    "Actions",
  ];

  const handleAddApplication = () => {
    setApplicationForm({
      mode: "add",
      data: {},
    });
  };

  const handleEditApplication = (application) => {
    setApplicationForm({
      mode: "update",
      data: application,
    });
  };

  const handleCloseForm = () => {
    setApplicationForm({
      mode: null,
      data: {},
    });
  };

  return (
    <main className="min-h-full bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 lg:px-2 lg:py-2">

      {/* Page Header */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            IPO Ledger
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            Applications
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track your IPO applications, mandates and allotment details.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddApplication}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
        >
          <Plus className="h-4 w-4" />
          Add Application
        </button>
      </header>

      {/* Summary Cards */}
      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>

                <div className="rounded-lg bg-emerald-50 p-2 dark:bg-emerald-500/10">
                  <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>

              <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                {card.value}
              </p>
            </div>
          );
        })}
      </section>

      {/* Search and Filter */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-col gap-3 md:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              placeholder="Search by IPO, applicant or application number..."
              disabled
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Filter */}
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-500 transition dark:border-slate-600 dark:text-slate-400"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </section>

      {/* Application History */}
      <section className="mt-6">
        {/* Section Header */}
        <div className="mb-3 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Application History
            </h2>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              All your IPO applications and their current status.
            </p>
          </div>

          <span className="whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
            {applications.length}{" "}
            {applications.length === 1 ? "application" : "applications"}
          </span>
        </div>

        {/* Mobile and Tablet Cards */}
        <div className="space-y-4 lg:hidden">
          {applications.length > 0 ? (
            applications.map((application) => (
              <ApplicationDataCard
                key={application.id}
                application={application}
                onEdit={() => handleEditApplication(application)}
              />
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
              <ClipboardList className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600" />

              <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                No applications yet
              </h3>

              <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
                Start tracking your IPO applications by adding your first
                application.
              </p>

              <button
                type="button"
                onClick={handleAddApplication}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
              >
                <Plus className="h-4 w-4" />
                Add Application
              </button>
            </div>
          )}
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:block">
          {applications.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] text-left">
                <ApplicationDataColumn columns={tableColumns} />

                <tbody>
                  {applications.map((application) => (
                    <ApplicationDataRow
                      key={application.id}
                      application={application}
                      onEdit={() => handleEditApplication(application)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-16 text-center">
              <ClipboardList className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600" />

              <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                No applications yet
              </h3>

              <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
                Start tracking your IPO applications by adding your first
                application.
              </p>

              <button
                type="button"
                onClick={handleAddApplication}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
              >
                <Plus className="h-4 w-4" />
                Add Application
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      {applicationForm.mode && (
        <ApplicationForm
          mode={applicationForm.mode}
          data={applicationForm.data}
          onClose={handleCloseForm}
        />
      )}
    </main>
  );
};

export default Applications;