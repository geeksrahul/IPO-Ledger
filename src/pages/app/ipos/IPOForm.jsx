import { CalendarDays, ChartNoAxesCombined, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { dbService } from "../../../supabase/dbService";
import { useDispatch } from "react-redux";
import { addIPO } from "../../../feature/ipo/ipoSlice";

const IPOForm = ({ mode, data, onClose}) => {
  const isUpdateMode = mode === "update";
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
    // handle form submit
  const handleIPOForm = async (formData) => {
    if(isUpdateMode) {
        // update logic here...
    } else {
      const response = await dbService.createIPO(formData);
      if(response.success) {
        dispatch(addIPO(formData));
      } else {
        console.log("unable to add ipo data");
      }
        // add logic here
    }
    onClose();
  }
  return (
    <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <ChartNoAxesCombined className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {isUpdateMode ? "Update IPO" : "Add New IPO"}
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Enter IPO details below
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close IPO form"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form
          className="space-y-5 overflow-y-auto p-5"
          onSubmit={handleSubmit(handleIPOForm)}
        >
          {/* Company Name */}
          <div className="space-y-2">
            <label
              htmlFor="company-name"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Company Name
            </label>

            <input
              id="company-name"
              name="company_name"
              type="text"
              defaultValue={data?.company_name || ""}
              placeholder="Enter company name"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              {...register("company_name", {
                required: {
                    value: true,
                    message: "Field cannot remain empty",
                }
              })}
            />
          </div>

          {/* Cutoff Price and Lot Size */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="cutoff-price"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Cutoff Price (₹)
              </label>

              <input
                id="cutoff-price"
                name="cutoff_price"
                type="number"
                min="0"
                step="0.01"
                defaultValue={data?.cutoff_price || ""}
                placeholder="Example: 125"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                 {...register("cutoff_price", {
                required: {
                    value: true,
                    message: "Field cannot remain empty",
                }
              })}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="lot-size"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Lot Size (Shares)
              </label>

              <input
                id="lot-size"
                name="lot_size"
                type="number"
                min="1"
                defaultValue={data?.lot_size || ""}
                placeholder="Example: 120"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                 {...register("lot_size", {
                required: {
                    value: true,
                    message: "Field cannot remain empty",
                }
              })}
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="open-date"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <CalendarDays className="h-4 w-4" />
                Open Date
              </label>

              <input
                id="open-date"
                name="open_date"
                type="date"
                defaultValue={data?.open_date || ""}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                 {...register("open_date", {
                required: {
                    value: true,
                    message: "Field cannot remain empty",
                }
              })}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="close-date"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <CalendarDays className="h-4 w-4" />
                Close Date
              </label>

              <input
                id="close-date"
                name="close_date"
                type="date"
                defaultValue={data?.close_date || ""}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                 {...register("close_date", {
                required: {
                    value: true,
                    message: "Field cannot remain empty",
                }
              })}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="allotment-date"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <CalendarDays className="h-4 w-4" />
                Allotment Date
              </label>

              <input
                id="allotment-date"
                name="allotment_date"
                type="date"
                defaultValue={data?.allotment_date || ""}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                 {...register("allotment_date", {
                required: {
                    value: true,
                    message: "Field cannot remain empty",
                }
              })}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="listing-date"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <CalendarDays className="h-4 w-4" />
                Listing Date
              </label>

              <input
                id="listing-date"
                name="listing_date"
                type="date"
                defaultValue={data?.listing_date || ""}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                 {...register("listing_date", {
                required: {
                    value: true,
                    message: "Field cannot remain empty",
                }
              })}
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end dark:border-slate-700">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            >
              {isUpdateMode ? "Update IPO" : "Add IPO"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IPOForm;