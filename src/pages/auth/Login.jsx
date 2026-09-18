import { useEffect, useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authService } from "../../supabase";
import {login } from "../../feature/auth/authSlice.js";

function Login() {
  const {register, handleSubmit} = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.loginStatus);
  // Redirecting already logged in users
  useEffect(()=>{
    if(isLoggedIn) {
      navigate("/app");
    }
  }, [isLoggedIn, navigate]);
  // handle form submit
  const handleLoginFormSubmit =async ({email, password}) => {
    const response = await authService.login({email, password});
    if(response.success) {
      dispatch(login(response.data.user));
      navigate("/app");
    } else {
      console.log(response.error);
    }
  }
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <LockKeyhole size={26} strokeWidth={2} />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Sign in to manage your IPO investments.
            </p>

          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">

            <form className="space-y-5" onSubmit={handleSubmit(handleLoginFormSubmit)}>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>

                <div className="relative mt-2">

                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    {...register("email", {
                      required : {
                        value: true,
                        message: "Field cannot remain empty"
                      }
                    })}
                  />

                </div>

                {/* Static Validation Error Example */}
                {/*
                <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                  Please enter a valid email address.
                </p>
                */}

              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between gap-3">

                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-xs font-medium text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Forgot Password?
                  </a>

                </div>

                <div className="relative mt-2">

                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    {...register("password", {
                      required: {
                        value:true,
                        message: "Field cannot remain empty"
                      } 
                    })}
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 dark:hover:text-gray-200"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

                {/* Static Validation Error Example */}
                {/*
                <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                  Password must be at least 8 characters.
                </p>
                */}

              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-emerald-600 focus:ring-emerald-500 dark:border-gray-700"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Remember me
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Sign In
                <ArrowRight size={17} />
              </button>

            </form>

            {/* Register Link */}
            <div className="mt-6 border-t border-gray-200 pt-6 text-center dark:border-gray-800">

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Create Account
                </a>
              </p>

            </div>

          </div>

          {/* Security Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
            <ShieldCheck size={15} />
            <span>Your account information stays protected.</span>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="px-5 py-5 text-center text-xs text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} IPO Ledger. All rights reserved.
      </footer>

    </div>
  );
}

export default Login;