import type { Metadata } from "next";
import Link from "next/link";
import { AssessmentForm } from "@/components/assessment-form";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Free 30-Day Financial Assessment | CFO Advisory Partners",
  description:
    "A free 30-day financial assessment for owner-operated businesses doing $1M–$10M. We show you where margin and cash are leaking. No fee, no contract, and you keep the findings.",
};

const qualifiers = [
  "You run the business off whatever's in the checking account",
  "You have a bookkeeper, but nobody actually explaining the numbers",
  "There's no monthly rhythm — the numbers arrive late, if at all",
  "You're busy, but not certain which work is actually profitable",
  "A full-time CFO at $250K+ isn't remotely justifiable yet",
  "You want to grow, but there's no structure to grow from",
];

const steps = [
  {
    when: "Week 1",
    title: "Three documents to start",
    body: "Your last twelve months of P&L, a current balance sheet, and your most recent business tax return. That's the whole first ask, plus one short conversation about how the business actually runs.",
  },
  {
    when: "Weeks 2–3",
    title: "We do the work a CFO would do",
    body: "We come back early with what we're already seeing. If it's worth going deeper, we'll ask for accounting access and recent statements — and by then you'll know exactly what you're getting for it.",
  },
  {
    when: "Week 4",
    title: "You get the findings, and they're yours",
    body: "A plain-English walkthrough of what we found and what's worth fixing first. If you want us to fix it, we'll quote it. If not, you keep the analysis and we part as friends.",
  },
];

const faqs = [
  {
    q: "What's the catch? Why is it free?",
    a: "Because we'd rather show you what we can do than talk about it. Most of our clients sign on after the assessment, and the ones who don't were never going to be a good fit — we'd rather find that out in 30 days than sell you into an engagement that doesn't work. You're under no obligation either way.",
  },
  {
    q: "How much of my time does this take?",
    a: "Roughly two hours in total. One conversation at the start, some back-and-forth on questions as we go, and a walkthrough at the end. We do the work; you don't build anything for us.",
  },
  {
    q: "What financial information do you need from me?",
    a: "We start small: twelve months of P&L, a current balance sheet, and your last business tax return. That's usually enough to show you something specific in the first week. If it's worth going deeper, we'll ask for accounting access and recent statements — broadly what your CPA already sees — and you choose how: a read-only accountant invite to QuickBooks, or exports you send us. We work read-only and never move money or make changes on your behalf.",
  },
  {
    q: "What if you don't find anything?",
    a: "Then we'll say so, and you'll have independent confirmation that your finances are in good shape — which is worth knowing. We won't manufacture problems to justify a proposal.",
  },
  {
    q: "What does it cost if I do hire you?",
    a: "We'll quote it after the assessment, once we know the actual scope. It's monthly, there's no long-term lock-in, and it's a fraction of a full-time CFO salary. You'll have the number in front of you before you decide anything.",
  },
];

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <div className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <header className="flex items-center justify-between border-b border-white/10 py-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
                {siteContent.companyName}
              </div>
              <div className="mt-1 text-sm text-teal-300">
                Fractional CFO for owner-operated businesses
              </div>
            </div>
          </header>

          <div className="grid gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div>
              <span className="inline-block rounded-full border border-teal-300/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                For owner-operated businesses doing $1M–$10M
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Find out what your numbers are hiding —{" "}
                <span className="text-teal-300">before you pay us anything.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                A <strong className="font-semibold text-white">free 30-day financial assessment</strong>.
                We go through your books the way a CFO would, then show you exactly
                where margin and cash are leaking. You keep the findings whether or
                not you hire us.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "No fee, no contract, no upfront commitment",
                  "You see real findings before any money changes hands",
                  "If we're not the right fit, we'll tell you and you'll still have the analysis",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-slate-200">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-teal-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#apply"
                className="mt-9 inline-flex items-center justify-center rounded-full bg-teal-300 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-teal-200"
              >
                Start my free assessment →
              </Link>

              <p className="mt-4 text-sm text-slate-400">
                Takes about 3 minutes to request. We reply within one business day.
              </p>
            </div>

            <div id="apply" className="scroll-mt-8">
              <AssessmentForm />
            </div>
          </div>
        </div>
      </div>

      {/* Qualification */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          This is built for one kind of business
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          If most of these sound like your week, the assessment will find
          something. If none of them do, we&apos;re probably not the right fit — and
          we&apos;d rather say so now.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {qualifiers.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            What actually happens
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            No mystery, no discovery-call runaround. Here&apos;s the whole thing.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.when}>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                  {step.when}
                </div>
                <div className="mt-3 h-[3px] w-11 rounded bg-gradient-to-r from-teal-600 to-teal-300" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-2xl bg-slate-950 px-8 py-12 text-white sm:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-5xl font-bold tracking-tight text-teal-300 sm:text-6xl">
                $50,000+
              </div>
              <p className="mt-2 text-base text-slate-300">
                found in year one for Remington Builders
              </p>
            </div>
            <blockquote className="text-xl font-medium leading-8 tracking-tight sm:text-2xl">
              &ldquo;We went into it thinking the books were basically fine. They
              weren&apos;t. Seeing which jobs actually made money changed how we
              bid.&rdquo;
              {/* TODO: replace with the real named contact once written permission
                  is in hand. If permission isn't given, cut the quote and keep
                  the figure with the attribution line below. */}
              <footer className="mt-5 text-sm font-normal not-italic text-slate-400">
                — Remington Builders
              </footer>
            </blockquote>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
          This reflects one client engagement. What an assessment finds depends
          entirely on the business — its size, its records, and how much structure
          already exists. We&apos;ll tell you honestly if we don&apos;t think there&apos;s
          enough there to be worth your time.
        </p>
      </section>

      {/* Differentiator */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Why a CFO who shows up daily
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Most fractional CFOs check in quarterly. By the time the numbers land,
            the decision has already been made. We&apos;re in it daily — you ask a
            question, you get an answer the same day, and the reporting keeps pace
            with the business instead of trailing a quarter behind it.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
          Honest answers
        </h2>
        <div className="mt-8 border-t border-slate-200">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              open={index === 0}
              className="group border-b border-slate-200 py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold tracking-tight text-slate-950">
                {faq.q}
                <span className="flex-none text-2xl font-normal text-teal-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="bg-slate-950 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Thirty days from now, you could actually know your numbers.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Or you could be running the business off the bank balance for another
            quarter.
          </p>
          <Link
            href="#apply"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-teal-300 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Start my free assessment →
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {siteContent.companyName} · Fractional CFO for
        owner-operated businesses
      </footer>
    </div>
  );
}
