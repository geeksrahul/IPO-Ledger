import { useEffect, useLayoutEffect } from "react"
import {Header, Sidebar} from "./"
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { dbService } from "../../supabase";
import { setApplicantsData } from "../../feature/applicants/applicantsSlice";
import { setBankAccountData } from "../../feature/accounts/bankSlice";
import { setDematAccountData } from "../../feature/accounts/dematSlice";

function AppLayout() {
  const dispatch = useDispatch();
  useLayoutEffect(()=>{
    const setApplicantData = async () => {
      const response = await dbService.getApplicants();
      if(response.success) {
        dispatch(setApplicantsData(response.data))
      } else {
        console.log(response.error)
      }
    }
    const loadBankData = async () => {
      const response = await dbService.getBankAccounts();
      if(response.success) {
        dispatch(setBankAccountData(response.data))
      } else {
        console.log(response.error)
      }
    }
    const loadDematData = async () => {
      const response = await dbService.getDematAccounts();
      if(response.success) {
        dispatch(setDematAccountData(response.data));
      } else {
        console.log(response.error);
      }
    }
    setApplicantData();
    loadBankData();
    loadDematData();
  }, [dispatch]);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white lg:grid lg:grid-cols-[80px_minmax(0,1fr)] xl:grid-cols-[256px_minmax(0,1fr)]">

      {/* Header */}
      <div className="order-1 lg:col-start-2 lg:row-start-1">
        <Header />
      </div>

      {/* Sidebar / Mobile Navigation */}
      <div className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="order-3 min-w-0 px-4 py-5 sm:px-6 lg:col-start-2 lg:row-start-2 lg:px-8 lg:py-6">
        <Outlet />
      </main>

    </div>
  )
}

export default AppLayout