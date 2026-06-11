import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20 lg:px-10">
        <section className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">
            Thank you
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Your request has been received.
          </h1>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            We will reach out within 24 hours to schedule your complimentary
            30-minute discovery call.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-base font-semibold !text-white shadow-lg shadow-slate-950/20 transition hover:bg-blue-700"
            >
              Return Home
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
            >
              View Services
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
