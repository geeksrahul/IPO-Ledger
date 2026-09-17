import { CheckCircle2 } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* About Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            About IPO Ledger
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Your IPO Journey,
            <span className="block text-emerald-600">
              Organized in One Place.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            IPO Ledger helps you keep track of your IPO activities
            without relying on scattered notes or spreadsheets.
            Manage your applications, monitor allotments,
            and maintain a clear record of your investments.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "Track multiple IPO applications",
              "Maintain organized investment records",
              "Monitor allotments and selling details",
              "Review your IPO performance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-emerald-600"
                />
                {item}
              </div>
            ))}

          </div>
        </div>

        {/* Visual Panel */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-950">

          <div className="flex items-center justify-between border-b border-gray-200 pb-5 dark:border-gray-800">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your IPO Overview
              </p>

              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                Stay Organized
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60">
              <CheckCircle2 size={23} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Applications
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                24
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Allotments
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                08
              </p>
            </div>

          </div>

          <p className="mt-5 text-xs text-gray-400">
            Illustrative data for UI presentation.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;