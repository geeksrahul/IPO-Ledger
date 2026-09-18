import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { authService } from '../supabase';
import { login } from '../feature/auth/authSlice';
function ProtectedRoute() {
    const isLoggedIn = useSelector(state => state.auth.loginStatus);
    const dispatch = useDispatch();
    const [isAuthChecking, setIsAuthChecking] = useState(true);
    // check auth session
    useEffect(() => {
        const checkSession = async () => {
            const response = await authService.getSession();
            if(!response.error && response.session?.user) {
                dispatch(login(response.session.user)); // change login state if no error
            }
            setIsAuthChecking(false);
        }
        checkSession();
    }, [dispatch]);
    // wait user for checking
    if(isAuthChecking) {
        return (
            <div>
                Ruko bhai auth checking chal raha hein
            </div>
        )
    }
    // redirect unauthenticated user back to login page
    if(!isLoggedIn) {
        return <Navigate to="/login" replace/>
    }

    // allow authenticated user
    return <Outlet />;
}

export default ProtectedRoute;