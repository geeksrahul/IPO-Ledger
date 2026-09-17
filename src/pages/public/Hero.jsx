import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

function Hero() {
  return (
    <section className="overflow-hidden bg-white dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">

        {/* Hero Content */}
        <div className="max-w-xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">
            <TrendingUp size={16} />
            Simplify Your IPO Journey
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Track Your IPOs.
            <span className="block text-emerald-600">
              Manage Your Gains.
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">
            Keep your IPO applications, allotments, investments,
            and profits organized in one simple and powerful
            platform.
          </p>

          {/* Hero CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Start Tracking
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
            >
              Explore Features
            </a>

          </div>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500 dark:text-gray-400">

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Simple Tracking
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              Organized Records
            </span>

          </div>

        </div>

        {/* Dashboard Preview */}
        <div className="relative">

          {/* Decorative Background */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-100/60 blur-2xl dark:bg-emerald-950/30" />

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl dark:border-gray-800 dark:bg-gray-900">

            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950">

              <span className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-700" />

              <div className="ml-3 flex-1 rounded-md bg-gray-100 px-3 py-1.5 text-center text-xs text-gray-400 dark:bg-gray-800">
                app.ipoledger.com
              </div>

            </div>

            {/* Replace With Your Dashboard Screenshot */}
            <div className="flex aspect-4/3 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">

              <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-center dark:border-gray-700">

                <div className="space-y-2 px-4">
                  <TrendingUp
                    size={38}
                    className="mx-auto text-emerald-600"
                  />

                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Dashboard Preview
                  </p>

                  <p className="text-xs text-gray-400">
                    Replace with your application screenshot
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;