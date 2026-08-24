import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { AssessmentForm } from "@/components/assessment-form";
import { siteContent } from "@/lib/site-content";

// The ad creatives are set in Inter. Self-hosted here (not next/font/google)
// so the production build never depends on reaching fonts.googleapis.com,
// and scoped to this page so nothing else on the site shifts.
const inter = localFont({
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  fallback: ["-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
});

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

const CTA = "Start my free assessment";

export default function AssessmentPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-white text-[#27405C]`}>
      {/* Header ------------------------------------------------------------ */}
      <header className="border-b border-[#E3E6EA]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-6 lg:px-10">
          <div className="text-[13px] font-bold uppercase tracking-[0.17em]">
            {siteContent.companyName}
          </div>
          <div className="text-[13px] text-[#7A8494]">
            Fractional CFO for owner-operated businesses
          </div>
        </div>
      </header>

      {/* Hero -------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 lg:px-10 lg:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.17em] text-[#3F8E8C]">
              For owner-operated businesses doing $1M–$10M
            </div>
            <div className="mt-4 h-[3px] w-[84px] bg-[#3F8E8C]" />

            <h1 className="mt-9 text-[2.35rem] font-medium leading-[1.22] tracking-[-0.017em] sm:text-[2.9rem] lg:text-[3.15rem]">
              Find out what your numbers are hiding —{" "}
              <span className="text-[#3F8E8C]">before you pay us anything.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[1.0625rem] leading-8 text-[#4A5666]">
              A <strong className="font-semibold text-[#27405C]">free 30-day financial assessment</strong>.
              We go through your books the way a CFO would, then show you exactly
              where margin and cash are leaking. You keep the findings whether or
              not you hire us.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "No fee, no contract, no upfront commitment",
                "You see real findings before any money changes hands",
                "If we're not the right fit, we'll tell you and you'll still have the analysis",
              ].map((item) => (
                <li key={item} className="flex gap-3.5 text-[1.0625rem] leading-7 text-[#4A5666]">
                  <span className="mt-[0.6rem] h-[7px] w-[7px] flex-none rounded-full bg-[#3F8E8C]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#27405C] px-9 py-4 text-base font-bold !text-white transition hover:bg-[#33506F]"
              >
                {CTA} <span aria-hidden>→</span>
              </Link>
              <p className="max-w-[15rem] text-sm leading-6 text-[#7A8494]">
                Takes about 3 minutes. We reply within one business day.
              </p>
            </div>

            {/* Byline — same face, same details as the ad they clicked. */}
            <div className="mt-12 flex items-center gap-4 border-t border-[#E3E6EA] pt-7">
              <Image
                src="/images/john-moss.jpg"
                alt="John Moss, CFO Advisory Partners"
                width={120}
                height={120}
                className="h-14 w-14 flex-none rounded-full object-cover"
              />
              <div className="text-sm leading-6">
                <div className="font-semibold text-[#27405C]">John Moss</div>
                <div className="text-[#7A8494]">
                  {siteContent.phone} · {siteContent.contactEmail}
                </div>
              </div>
            </div>
          </div>

          <div id="apply" className="scroll-mt-8">
            <AssessmentForm />
          </div>
        </div>
      </section>

      {/* Qualification ----------------------------------------------------- */}
      <section className="border-t border-[#E3E6EA] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="text-[1.85rem] font-medium tracking-[-0.017em] sm:text-[2.15rem]">
            This is built for one kind of business
          </h2>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-8 text-[#4A5666]">
            If most of these sound like your week, the assessment will find
            something. If none of them do, we&apos;re probably not the right fit — and
            we&apos;d rather say so now.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {qualifiers.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-[#E3E6EA] bg-white p-5 text-[1.0625rem] leading-7 text-[#4A5666]"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#3F8E8C] text-sm font-bold text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process ----------------------------------------------------------- */}
      <section className="border-t border-[#E3E6EA] bg-[#F6F7F9] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="text-[1.85rem] font-medium tracking-[-0.017em] sm:text-[2.15rem]">
            What actually happens
          </h2>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-8 text-[#4A5666]">
            No mystery, no discovery-call runaround. Here&apos;s the whole thing.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.when}>
                <div className="text-[13px] font-bold uppercase tracking-[0.17em] text-[#3F8E8C]">
                  {step.when}
                </div>
                <div className="mt-4 h-[3px] w-[52px] bg-[#3F8E8C]" />
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.012em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#4A5666]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof ------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="rounded-2xl bg-[#27405C] px-8 py-12 text-white sm:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-5xl font-bold tracking-[-0.02em] text-[#7FC9C6] sm:text-6xl">
                $50,000+
              </div>
              <p className="mt-3 text-base text-white/70">
                found in year one for a residential builder
              </p>
            </div>
            {/* No client quote here by design. The client is not named and has not
                approved a testimonial, so this block is written in John's own
                voice describing work he did — a claim he can substantiate — rather
                than words attributed to a customer. Do not add a quote unless the
                client actually said it and has approved it in writing. */}
            <div className="text-xl font-medium leading-8 tracking-[-0.012em] sm:text-[1.4rem] sm:leading-9">
              He was certain his books were fine. They weren&apos;t — most of what
              we found was sitting in jobs he&apos;d assumed were profitable.
              <p className="mt-5 text-sm font-normal text-white/55">
                Client not named at their preference.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-[#7A8494]">
          This reflects one client engagement. What an assessment finds depends
          entirely on the business — its size, its records, and how much structure
          already exists. We&apos;ll tell you honestly if we don&apos;t think there&apos;s
          enough there to be worth your time.
        </p>
      </section>

      {/* Differentiator ---------------------------------------------------- */}
      <section className="border-y border-[#E3E6EA] bg-[#F6F7F9] py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[auto_1fr] md:items-center lg:px-10">
          <Image
            src="/images/john-moss.jpg"
            alt="John Moss, CFO Advisory Partners"
            width={480}
            height={480}
            className="h-48 w-48 flex-none rounded-2xl object-cover md:h-56 md:w-56"
          />
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.17em] text-[#3F8E8C]">
              Who you actually work with
            </div>
            <h2 className="mt-4 text-[1.85rem] font-medium tracking-[-0.017em] sm:text-[2.15rem]">
              Why a CFO who shows up daily
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-8 text-[#4A5666]">
              Most fractional CFOs check in quarterly. By the time the numbers land,
              the decision has already been made. I&apos;m in it daily — you ask a
              question, you get an answer the same day, and the reporting keeps pace
              with the business instead of trailing a quarter behind it.
            </p>
            <p className="mt-5 text-sm leading-6 text-[#7A8494]">
              John Moss · {siteContent.phone} · {siteContent.contactEmail}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ --------------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <h2 className="text-[1.85rem] font-medium tracking-[-0.017em] sm:text-[2.15rem]">
          Honest answers
        </h2>
        <div className="mt-8 border-t border-[#E3E6EA]">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              open={index === 0}
              className="group border-b border-[#E3E6EA] py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold tracking-[-0.012em]">
                {faq.q}
                <span className="flex-none text-2xl font-normal text-[#3F8E8C] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-[#4A5666]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Close ------------------------------------------------------------- */}
      <section className="bg-[#27405C] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-[1.85rem] font-medium leading-[1.25] tracking-[-0.017em] sm:text-[2.3rem]">
            Thirty days from now, you could actually know your numbers.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Or you could be running the business off the bank balance for another
            quarter.
          </p>
          <Link
            href="#apply"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#3F8E8C] px-9 py-4 text-base font-bold !text-white transition hover:bg-[#4EA5A2]"
          >
            {CTA} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <footer className="bg-[#27405C] pb-10 text-center text-sm text-white/45">
        © {new Date().getFullYear()} {siteContent.companyName} · Fractional CFO for
        owner-operated businesses
      </footer>
    </div>
  );
}
