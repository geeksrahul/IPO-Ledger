import { ArrowRight, Menu } from "lucide-react";
import {Logo} from "../../components/ui/";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/90 dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            About
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-gray-600 transition hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            Features
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Try Now
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 md:hidden"
        >
          <Menu size={23} />
        </button>

      </div>
    </header>
  );
}

export default Header;