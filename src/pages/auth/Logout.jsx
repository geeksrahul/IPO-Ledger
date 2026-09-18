import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { authService } from "../../supabase";
import { logout } from "../../feature/auth/authSlice";

function Logout() {
  const dispatch = useDispatch();
  const [isLoggingOut, setIsLoggingOut] = useState(true);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await authService.logout();

        if (!response.success) {
          console.error("Logout failed:", response.error);
        }
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // Always clear Redux state
        dispatch(logout());
        setIsLoggingOut(false);
      }
    };

    handleLogout();
  }, [dispatch]);

  if (isLoggingOut) {
    return <div>Logging out...</div>;
  }

  return <Navigate to="/login" replace />;
}

export default Logout;