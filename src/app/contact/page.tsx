import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M8.5 5.5 10 9l-2 1.5c1.2 2.5 3 4.3 5.5 5.5L15 14l3.5 1.5-.5 3c-.1.7-.7 1.2-1.4 1.2C9.7 19.4 4.6 14.3 4.3 7.4c0-.7.5-1.3 1.2-1.4l3-.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M5 7h14v12H5V7Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 4v4M16 4v4M5 11h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="relative min-h-[calc(100vh-88px)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contact/contact-hero.jpg"
            alt="CFO Advisory Partners contact"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
        </div>

        <section className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">
              Contact
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              We’re here to help.
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Whether you need stronger reporting, better cash visibility, or a
              more reliable monthly cadence, we’d love to start the
              conversation.
            </p>

            <div className="mt-14 space-y-8">
              <div className="flex items-center gap-5 border-b border-slate-200 pb-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                  <MailIcon />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                    Email
                  </p>
                  <a
                    href="mailto:info@cfoadvisorypartners.net"
                    className="mt-2 block text-lg font-medium text-slate-700 transition hover:text-blue-700"
                  >
                    info@cfoadvisorypartners.net
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 border-b border-slate-200 pb-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                  <PhoneIcon />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                    Phone
                  </p>
                  <a
                    href="tel:9723107252"
                    className="mt-2 block text-lg font-semibold text-slate-700 transition hover:text-blue-700"
                  >
                    (972) 310-7252
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                  <CalendarIcon />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                    Schedule a Call
                  </p>
                  <p className="mt-2 text-lg font-medium text-slate-700">
                    30-minute discovery call
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/lead"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold !text-white shadow-lg shadow-slate-950/20 transition hover:bg-blue-700 hover:!text-white"
              >
                Schedule Your Free Discovery Call
              </Link>
            </div>

            <p className="mt-12 text-base font-medium text-slate-600">
              Confidential. Strategic. Built Around You.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}