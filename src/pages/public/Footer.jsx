// import {
//   Github,
//   Instagram,
//   Linkedin,
//   Twitter,
// } from "lucide-react";

import {Logo} from "../../components/ui/";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500 dark:text-gray-400">
              Simplify your IPO journey with organized
              tracking and investment records.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="GitHub"
                className="w-12 rounded-lg  border-gray-200 p-1 text-gray-500 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-800 dark:text-gray-400"
              >
                <img src="github.png" alt="" className="w-full" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-12 rounded-lg border-gray-200 p-1 text-gray-500 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-800 dark:text-gray-400"
              >
                <img src="linkedin.png" alt="" className="w-full" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-12 rounded-lg  border-gray-200 p-1 text-gray-500 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-800 dark:text-gray-400"
              >
                <img src="instagram.png" alt="" className="w-full" />
              </a>

              <a
                href="#"
                aria-label="Youtube"
                className="w-12 rounded-lg  border-gray-200 p-1 text-gray-500 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-800 dark:text-gray-400"
              >
                <img src="youtube.png" alt="" className="w-full" />
              </a>

            </div>

          </div>

          {/* Application Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Application
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="/app" className="transition hover:text-emerald-600">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="/app/ipos" className="transition hover:text-emerald-600">
                  IPOs
                </a>
              </li>

              <li>
                <a href="/app/applications" className="transition hover:text-emerald-600">
                  Applications
                </a>
              </li>

              <li>
                <a href="/app/statements" className="transition hover:text-emerald-600">
                  Statements
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#about" className="transition hover:text-emerald-600">
                  About
                </a>
              </li>

              <li>
                <a href="#features" className="transition hover:text-emerald-600">
                  Features
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-emerald-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="transition hover:text-emerald-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-emerald-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800 dark:text-gray-400">

          <p>
            © {new Date().getFullYear()} IPO Ledger. All rights reserved.
          </p>

          <p>
            Built for better IPO tracking.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;