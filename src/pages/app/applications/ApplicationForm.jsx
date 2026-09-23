import { X, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dbService } from "../../../supabase/dbService";
import { addApplication, updateApplication } from "../../../feature/application/applicationSlice";

const ApplicationForm = ({ mode, data = {}, onClose, onSubmit }) => {
  const isUpdateMode = mode === "update";
  // user data
  const user_id = useSelector((state) => state.auth.userData.id);
  // app data
  const ipos = useSelector((state) => state.ipo?.data || []);
  const applicants = useSelector((state) => state.applicants?.data || []);
  const demats = useSelector((state) => state.demat?.data || []);
  const banks = useSelector((state) => state.bank?.data || []);

  const {register, handleSubmit, watch, setValue} = useForm();
  const dispatch = useDispatch();
  // status
  const isAllotted = watch("allotment_status") === "allotted";
  const isMandateAccepted = watch("mandate_status") === "accepted" || false;
  // for automatic calculation of invested amount 
  const ipoId = watch("ipo_id");
  const appliedLots = watch("applied_lots") || 0;
  useEffect(() => {
    const ipo = ipos.find(ipo => String(ipo.id) === String(ipoId));
    if(ipo) {
      const investedAmount = Number(appliedLots) * Number(ipo?.lot_size) *  Number(ipo?.cutoff_price);
      setValue("invested_amount", investedAmount);
    } else {
      setValue("invested_amount", 0);
    }
  }, [appliedLots, setValue, ipoId, ipos]);
  // for automatic calculation of sales proceeds
  const allotedLots = watch("alloted_lots") || 0;
  const sellingPrice = watch("selling_price") || 0;
  const investedAmount = watch("invested_amount") || 0;
  useEffect(() => {
    const ipo = ipos.find(ipo => String(ipo.id) === String(ipoId));
    if(ipo && isAllotted) {
      const salesProceeds = Number(allotedLots) * Number(ipo?.lot_size) * Number(sellingPrice);
      const profit = salesProceeds - investedAmount;
      setValue("sales_proceeds", salesProceeds); 
      setValue("profit", profit);
    } else {
      setValue("sales_proceeds", 0);
    }
  }, [ipos, ipoId, setValue, allotedLots, sellingPrice])
  

  // handle form 
  const handleApplicationSubmit = async (formData) => {
    console.log(formData);
    console.log(user_id)
    // const {applicant_id, bank_id, ipo_id, applied_lots, application_date, mandate_status, allotment_status, sales_proceeds=0, profit=0, selling_price=0, allotted_lots=0, invested_amount} = formData;
    if(isUpdateMode) {
      const response = await dbService.updateApplication(data?.id, {...formData, user_id});
      if(response.success) {
        dispatch(updateApplication({
          id: data?.id,
          data: response.data
        }));
        console.log("updated successfully");
      } else {
        console.log("Error: ", response.error);
      }
    } else {
      const response = await dbService.createApplication({...formData, user_id});
      if(response.success) {
        dispatch(addApplication(response.data));
        console.log("Added Successfully");
      } else {
        console.log("error: ", response.error);
      }
    }
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {isUpdateMode ? "Update Application" : "Add Application"}
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Manage IPO application details
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close application form"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Content */}
        <form
          onSubmit={handleSubmit(handleApplicationSubmit)}
          className="space-y-6 overflow-y-auto p-5"
        >
          {/* Application References */}
          <section className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Application References
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* IPO */}
              <div className="space-y-2">
                <label
                  htmlFor="ipo-id"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  IPO
                </label>

                <select
                  id="ipo-id"
                  name="ipo_id"
                  defaultValue={data?.ipo_id || ""}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  {...register("ipo_id", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                >
                  <option value="" disabled>
                    Select IPO
                  </option>

                  {ipos.map((ipo) => (
                    <option key={ipo.id} value={ipo.id}>
                      {ipo.company_name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Applicant */}
              <div className="space-y-2">
                <label
                  htmlFor="applicant-id"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Applicant
                </label>

                <select
                  id="applicant-id"
                  name="applicant_id"
                  defaultValue={data?.applicant_id || ""}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  {...register("applicant_id", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                >
                  <option value="" disabled>
                    Select applicant
                  </option>

                  {applicants.map((applicant) => (
                    <option key={applicant.id} value={applicant.id}>
                      {applicant.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Demat Account */}
              <div className="space-y-2">
                <label
                  htmlFor="demat-id"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Demat Account
                </label>

                <select
                  id="demat-id"
                  name="demat_id"
                  defaultValue={data?.demat_id || ""}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  {...register("demat_id", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                >
                  <option value="" disabled>
                    Select demat account
                  </option>

                  {demats.map((demat) => (
                    <option
                      key={demat.id || demat.applicant_id}
                      value={demat.id || demat.applicant_id}
                    >
                      {demat.applicants.name} - {demat.broker}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bank Account */}
              <div className="space-y-2">
                <label
                  htmlFor="bank-id"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Bank Account
                </label>

                <select
                  id="bank-id"
                  name="bank_id"
                  defaultValue={data?.bank_id || ""}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  {...register("bank_id", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                >
                  <option value="" disabled>
                    Select bank account
                  </option>

                  {banks.map((bank) => (
                    <option key={bank.id} value={bank.id}>
                      {bank.applicants.name} - {bank.bank_name}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </section>

          {/* Application Details */}
          <section className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Application Details
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Applied Lots */}
              <div className="space-y-2">
                <label
                  htmlFor="applied-lots"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Applied Lots
                </label>

                <input
                  id="applied-lots"
                  name="applied_lots"
                  type="number"
                  min="1"
                  defaultValue={data?.applied_lots || 1}
                  placeholder="Enter applied lots"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  {...register("applied_lots", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                />
              </div>

              {/* Invested Amount */}
              <div className="space-y-2">
                <label
                  htmlFor="invested-amount"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Invested Amount
                </label>

                <input
                  id="invested-amount"
                  name="invested_amount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter invested amount"
                  defaultValue={0}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  readOnly
                  {...register("invested_amount", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                />
              </div>

              {/* Application Date */}
              <div className="space-y-2">
                <label
                  htmlFor="application-date"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Application Date
                </label>

                <input
                  id="application-date"
                  name="application_date"
                  type="date"
                  defaultValue={data?.application_date || ""}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  {...register("application_date", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                />
              </div>

              {/* Mandate Status */}
              <div className="space-y-2">
                <label
                  htmlFor="mandate-status"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Mandate Status
                </label>

                <select
                  id="mandate-status"
                  name="mandate_status"
                  defaultValue={data?.mandate_status || ""}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  {...register("mandate_status", {
                    required: {
                      value: true,
                      message: "Field cannot remain empty",
                    }
                  })}
                >
                  <option value="" disabled>
                    Select mandate status
                  </option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                  <option value="expired">Expired</option>
                </select>
              </div>

            </div>
          </section>

          {/* Allotment Details */}

          {isMandateAccepted && 
          
          
            (<section className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Allotment Details
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Allotment Status */}
                <div className="space-y-2">
                  <label
                    htmlFor="allotment-status"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Allotment Status
                  </label>

                  <select
                    id="allotment-status"
                    name="allotment_status"
                    defaultValue={data?.allotment_status || ""}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    {...register("allotment_status", {
                      required: {
                        value: true,
                        message: "Field cannot remain empty",
                      }
                    })}
                  >
                    <option value="" disabled>
                      Select allotment status
                    </option>
                    <option value="pending">Pending</option>
                    <option value="allotted">Allotted</option>
                    <option value="not_allotted">Not Allotted</option>
                  </select>
                </div>
                {isAllotted &&
                
                  (<>
                  
                  <div className="space-y-2">
                    <label
                      htmlFor="allotted-lots"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Allotted Lots
                    </label>

                    <input
                      id="allotted-lots"
                      name="allotted_lots"
                      type="number"
                      min="0"
                      defaultValue={data?.allotted_lots || 0}
                      placeholder="Enter allotted lots"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      {...register("alloted_lots", {
                        required: {
                          value: true,
                          message: "Field cannot remain empty",
                        }
                      })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="selling-price"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Selling Price
                    </label>

                    <input
                      id="selling-price"
                      name="selling_price"
                      type="number"
                      min="0"
                      step="0.01"
                      defaultValue={data?.selling_price || ""}
                      placeholder="Enter selling price"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      {...register("selling_price", {
                        required: {
                          value: true,
                          message: "Field cannot remain empty",
                        }
                      })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="sale-proceeds"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Sale Proceeds
                    </label>

                    <input
                      id="sale-proceeds"
                      name="sale_proceeds"
                      type="number"
                      min="0"
                      step="0.01"
                      defaultValue={data?.sale_proceeds || ""}
                      placeholder="Enter sale proceeds"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      readOnly
                      {...register("sales_proceeds", {
                        required: {
                          value: true,
                          message: "Field cannot remain empty",
                        }
                      })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="sale-proceeds"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Estimated Profit
                    </label>

                    <input
                      id="sale-proceeds"
                      name="sale_proceeds"
                      type="number"
                      min="0"
                      step="0.01"
                      defaultValue={""}
                      placeholder="Enter sale proceeds"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      readOnly
                      {...register("profit", {
                        required: {
                          value: true,
                          message: "Field cannot remain empty",
                        }
                      })}
                    />
                  </div>
                  </>
                  ) 
                }
              </div>
            </section>)
          }

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
              {isUpdateMode ? "Update Application" : "Add Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;