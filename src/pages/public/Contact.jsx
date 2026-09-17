import { Mail, MessageSquare, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">

        {/* Contact Information */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Have Questions?
            <span className="block text-emerald-600">
              Let's Connect.
            </span>
          </h2>

          <p className="mt-5 max-w-md leading-7 text-gray-600 dark:text-gray-400">
            Have feedback, suggestions, or questions about IPO Ledger?
            We'd love to hear from you.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  hello@ipoledger.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60">
                <MessageSquare size={20} />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Feedback
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Help us improve IPO Ledger.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-950">

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="mt-2 w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Send Message
            <Send size={17} />
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;