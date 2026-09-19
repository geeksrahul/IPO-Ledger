import {
  ContactRound,
  Filter,
  Search,
  UsersRound,
} from "lucide-react";

import ApplicantDataCard from "./ApplicantDataCard";
import ApplicantDataColumn from "./ApplicantDataColumn";
import ApplicantDataRow from "./ApplicantDataRow";
import ApplicantForm from "./ApplicantForm";
import { useState } from "react";
import { useSelector } from "react-redux";

const tableColumns = [
  "Name",
  "Email",
  "Contact",
  "PAN Number",
  "Date of Birth",
  "Actions"
];

function Applicants() {
  const [applicantForm, setApplicantForm] = useState({
    mode:null,
    data:{}
  })
  const applicantData = useSelector(state => state.applicants.data);
  return (

    <section className="space-y-6">
      {applicantForm.mode && (
        <ApplicantForm
          mode={applicantForm.mode}
          data={applicantForm.data}
          onClose={()=>{
            setApplicantForm({
              mode:null,
              data:{},
            })
          }}
        />
      )}
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Applicant Management
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Applicants
          </h1>

          <p className="max-w-xl text-sm text-gray-500 dark:text-gray-400">
            Manage and organize applicant information in one place.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <button
            type="button"
            className="bg-emerald-600 text-white px-5 py-2 rounded-md font-medium cursor-pointer"
            onClick={()=>{
              setApplicantForm({mode:"add", data:{}})
            }}
          >
            Add Applicant
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="max-w-xs">
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Applicants
            </p>

            <UsersRound className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </div>

          <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
            {applicantData.length}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="search"
              placeholder="Search applicants..."
              disabled
              aria-label="Search applicants"
              className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Filters */}
          <button
            type="button"
            disabled
            className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-500 disabled:cursor-not-allowed lg:self-auto dark:border-gray-700 dark:text-gray-400"
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Applicant Data */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        {/* Section Header */}
        <div className="flex flex-col gap-1 border-b border-gray-200 px-4 py-4 sm:px-6 dark:border-gray-800">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            Applicant Directory
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            View registered applicants and their information.
          </p>
        </div>

        {/* Mobile and Tablet Cards */}
        <div className="grid gap-3 p-4 lg:hidden">
          {applicantData.map((applicant) => (
            <ApplicantDataCard
              key={applicant.id}
              applicant={applicant}
              onEdit={()=>{
                setApplicantForm({
                  mode:"update",
                  data:applicant,
                })
              }}
            />
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <ApplicantDataColumn columns={tableColumns} />
              <tbody>
                {applicantData.map((applicant) => (
                  <ApplicantDataRow
                    key={applicant.id}
                    applicant={applicant} 
                    onEdit={()=>{
                      setApplicantForm({
                        mode:"update",
                        data:applicant,
                      })
                    }}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-2 border-t border-gray-200 px-4 py-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:border-gray-800 dark:text-gray-400">
          <p>Showing {applicantData.length} applicants</p>

          <p>Search and filtering will be added later.</p>
        </div>
      </div>
    </section>
  );
}

export default Applicants;