import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authService } from "../../supabase";
import {login } from "../../feature/auth/authSlice.js";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.loginStatus);
  // redirecting logged in user
  useEffect(()=>{
    if(isLoggedIn) {
      navigate("/app");
    }
  }, [isLoggedIn, navigate]);
  // form handling
  const handleRegisterFormSubmit = async ({email, password, confirmPassword}) => {
    if(password !== confirmPassword) {
      console.log("password didn't match");
      return;
    }
    const response = await authService.register({email, password});
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
              <UserRound size={26} strokeWidth={2} />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Create Your Account
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Start organizing your IPO journey today.
            </p>

          </div>

          {/* Register Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">

            <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFormSubmit)}>
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
                      required: {
                        value: true,
                        message : "Field cannot remain empty",
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
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>

                <div className="relative mt-2">

                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                     {...register("password", {
                      required: {
                        value: true,
                        message : "Field cannot remain empty",
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

                {/* Password Requirements */}
                <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-gray-500 sm:grid-cols-2 dark:text-gray-400">

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600" />
                    Minimum 8 characters
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600" />
                    Use a strong password
                  </span>

                </div>

                {/* Static Validation Error Example */}
                {/*
                <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                  Password must be at least 8 characters.
                </p>
                */}

              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Confirm Password
                </label>

                <div className="relative mt-2">

                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                     {...register("confirmPassword", {
                      required: {
                        value: true,
                        message : "Field cannot remain empty",
                      }
                    })}
                  />

                  <button
                    type="button"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 dark:hover:text-gray-200"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

                {/* Static Validation Error Example */}
                {/* (<p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                    Passwords do not match.
                  </p>) */}

              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">

                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-emerald-600 focus:ring-emerald-500 dark:border-gray-700"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-gray-500 dark:text-gray-400"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Create Account
                <ArrowRight size={17} />
              </button>

            </form>

            {/* Login Link */}
            <div className="mt-6 border-t border-gray-200 pt-6 text-center dark:border-gray-800">

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Sign In
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

export default Register;