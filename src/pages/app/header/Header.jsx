import {
  Moon,
  Sun,
  UserRound,
} from "lucide-react";

import {Logo} from "../../../components/ui";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">

      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="min-w-0">
          <Logo />
        </div>

        {/* Header Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Theme Toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-800 dark:text-gray-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            {/* Replace with your theme state later */}
            <Moon size={19} className="dark:hidden" />
            <Sun size={19} className="hidden dark:block" />
          </button>

          {/* Profile */}
          <Link
            to="/app/profile"
            aria-label="Open profile menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition hover:bg-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:hover:bg-emerald-950"
          >
            <UserRound size={19} />
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Header;