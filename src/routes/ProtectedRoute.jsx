import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const isLoggedIn = useSelector(state => state.auth.loginStatus);
    
    return isLoggedIn ? <Outlet /> : <Navigate to="login" />
}

export default ProtectedRoute;