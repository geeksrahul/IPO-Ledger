import { useState } from "react";

import {
    Building2,
    Filter,
    Search,
} from "lucide-react";

import BankDataColumn from "./BankDataColumn";
import BankDataRow from "./BankDataRow";
import BankDataCard from "./BankDataCard";
import BankAccountForm from "./BankAccountForm";
import { useDispatch, useSelector } from "react-redux";
import { removeBankAccount } from "../../../feature/accounts/bankSlice";
import { dbService } from "../../../supabase";
import {ConfirmationPopup} from "../../../components/ui"

const Banks = () => {
    const dispatch = useDispatch();
    const [deletePopup, setDeletePopup] = useState({
        isOpen: false,
        data: {},
    })
    const [bankForm, setBankForm] = useState({
        mode: null,
        data: {},
    })
    const bankData = useSelector(state => state.bank.data);
    const deleteBankAccount = async (bankId) => {
        const response = await dbService.removeBankAccount(bankId);
        if (response.success) {
            dispatch(removeBankAccount(bankId));
            console.log("bank_account_deleted_successfully");
        } else {
            console.log(
                "unable to delete data from database",
                response.error
            );
        }
    }
    const tableColumns = [
        "Applicant Id",
        "Account Number",
        "Bank Name",
        "IFSC Code",
        "Actions"
    ];

    return (
        <main className="space-y-8">
            {bankForm.mode && <BankAccountForm
                mode={bankForm.mode}
                data={bankForm.data}
                onClose={() => {
                    setBankForm({
                        mode: null,
                        data: {},
                    })
                }}
            />}
            {/* Page Header */}
            <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Account Management
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                        Bank Accounts
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                        Manage applicant bank account details and banking information.
                    </p>
                </div>

                <button className="px-5 py-2 bg-emerald-700 text-white rounded-md cursor-pointer" onClick={() => {
                    setBankForm({
                        mode: "add",
                        data: {},
                    })
                }}>
                    Add Bank Account
                </button>
            </section>

            {/* Summary Card */}
            <section className="max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            Total Accounts
                        </p>

                        <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                            {bankData.length}
                        </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <Building2 className="h-5 w-5" />
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                        type="text"
                        placeholder="Search bank accounts..."
                        disabled
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    />
                </div>

                <button
                    type="button"
                    disabled
                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400"
                >
                    <Filter className="h-4 w-4" />
                    Filters
                </button>
            </section>

            {/* Directory */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Bank Directory
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        View registered applicant bank accounts.
                    </p>
                </div>

                {/* Mobile / Tablet Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                    {bankData.map((bank) => (
                        <BankDataCard
                            key={bank.id}
                            bank={bank}
                            onEdit={() => {
                                setBankForm({
                                    mode: "update",
                                    data: bank,
                                })
                            }}
                             onRemove={() => {
                                setDeletePopup({
                                    isOpen: true,
                                    data: bank,
                                })
                            }}  
                        />
                    ))}
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:block">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px] text-left">
                            <BankDataColumn columns={tableColumns} />

                            <tbody>
                                {bankData.map((bank) => (
                                    <BankDataRow
                                        key={bank.id}
                                        bank={bank}
                                        onEdit={() => {
                                            setBankForm({
                                                mode: "update",
                                                data: bank,
                                            })
                                        }}
                                        onRemove={() => {
                                            setDeletePopup({
                                                isOpen: true,
                                                data: bank,
                                            })
                                        }}  
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Showing {bankData.length} bank accounts.
            </footer>
            {
                deletePopup.isOpen &&
                <ConfirmationPopup 
                    message="Are you sure you want to delete bank account ?"
                    onConfirm={async() => {
                        await deleteBankAccount(deletePopup.data.id);
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
        </main>
    );
};


export default Banks;