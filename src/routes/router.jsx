import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";

import { HomeLayout } from "../pages/public";
import {AppLayout, Applicants, Applications, Banks, Dashboard, Demats, IPOs, Settings, Profile} from "../pages/app";
import {Login, Register, Logout} from "../pages/auth"
import ProtectedRoute from "./ProtectedRoute";
 
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<HomeLayout />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
            <Route element={<ProtectedRoute />} > 
                <Route path="app" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="applicants" element={<Applicants />} />
                    <Route path="applications" element={<Applications />} />
                    <Route path="ipos" element={<IPOs />} />
                    <Route path="banks" element={<Banks />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="demats" element={<Demats />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Route>
        </Route>
    )
);

export default router;