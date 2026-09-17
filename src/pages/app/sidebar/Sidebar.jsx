import {
  BarChart3,
  Building2,
  ClipboardList,
  FileText,
  Landmark,
  LayoutDashboard,
  Settings,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const mainNavigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/app",
  },
  {
    label: "IPOs",
    icon: BarChart3,
    href: "/app/ipos",
  },
  {
    label: "Applications",
    icon: ClipboardList,
    href: "/app/applications",
  },
  {
    label: "Applicants",
    icon: UsersRound,
    href: "/app/applicants",
  },
  {
    label: "Demat Accounts",
    icon: Building2,
    href: "/app/demats",
  },
  {
    label: "Bank Accounts",
    icon: Landmark,
    href: "/app/banks",
  },
];

const bottomNavigation = [
  {
    label: "Settings",
    icon: Settings,
    href: "/app/settings",
  },
];

function Sidebar() {
  return (
    <aside className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:h-full lg:min-h-screen lg:border-b-0 lg:border-r">

      {/* Mobile / Tablet Navigation */}
      <div className="flex min-w-0 items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:hidden">

        {mainNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.href}
              className="flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-gray-400 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400"
            >
              <Icon size={17} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}

        {bottomNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.href}
              className="flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-gray-400 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400"
            >
              <Icon size={17} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}

      </div>

      {/* Laptop / Desktop Sidebar */}
      <div className="hidden h-full min-h-screen flex-col px-3 py-5 lg:flex xl:px-4">

        {/* Main Navigation */}
        <nav className="flex flex-1 flex-col gap-2">

          {mainNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.href}
                title={item.label}
                className="group flex items-center justify-center gap-3 rounded-xl px-3 py-3 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-gray-400 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400 xl:justify-start"
              >
                {/* Icon */}
                <Icon size={20} className="shrink-0" />

                {/* Label */}
                <span className="hidden truncate text-sm font-medium xl:block">
                  {item.label}
                </span>
              </NavLink>
            );
          })}

        </nav>

        {/* Bottom Navigation */}
        <nav className="mt-auto flex flex-col gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">

          {bottomNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.href}
                title={item.label}
                className="group flex items-center justify-center gap-3 rounded-xl px-3 py-3 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-gray-400 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400 xl:justify-start"
              >
                <Icon size={20} className="shrink-0" />

                <span className="hidden text-sm font-medium xl:block">
                  {item.label}
                </span>
              </NavLink>
            );
          })}

        </nav>

      </div>

    </aside>
  );
}

export default Sidebar;