import {
  BarChart3,
  BookOpen,
  ClipboardList,
  Landmark,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "IPO Application Tracking",
    description:
      "Keep all your IPO applications organized with relevant details and statuses.",
  },
  {
    icon: Landmark,
    title: "Account Management",
    description:
      "Manage your demat and bank account references for better organization.",
  },
  {
    icon: ShieldCheck,
    title: "Mandate Tracking",
    description:
      "Keep track of mandate acceptance, blocked funds, and payment-related records.",
  },
  {
    icon: BookOpen,
    title: "Allotment Records",
    description:
      "Maintain a history of allotments and application outcomes.",
  },
  {
    icon: Wallet,
    title: "Profit & Loss",
    description:
      "Record selling details and review your IPO investment results.",
  },
  {
    icon: BarChart3,
    title: "Performance Overview",
    description:
      "View relevant IPO activity and performance information in one place.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-white dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Features
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need to
            <span className="block text-emerald-600">
              Manage Your IPOs
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            A simple toolkit to help you organize your IPO
            applications and investment records.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-800"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;