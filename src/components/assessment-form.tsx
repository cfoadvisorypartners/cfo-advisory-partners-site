"use client";

import { type FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { assessmentRevenueRanges } from "@/lib/site-content";

type SubmitStatus = "idle" | "submitting" | "error";

export function AssessmentForm() {
  const router = useRouter();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [source, setSource] = useState("");

  // Capture the ad source on mount. Meta strips URL data from event payloads
  // for Financial service datasets, so this is the only place attribution
  // reliably survives — it rides along with the lead email instead.
  useEffect(() => {
    const query = window.location.search;
    const referrer = document.referrer || "";
    setSource(
      [query || "no-query", referrer ? `ref=${referrer}` : "ref=direct"].join(" | ")
    );
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unable to submit lead");
      }

      const fbq = (window as Window & {
        fbq?: (event: string, eventName: string) => void;
      }).fbq;
      fbq?.("track", "Lead");

      form.reset();
      router.push("/thank-you");
    } catch {
      setErrorMessage(
        "Something went wrong. Please try again, or email info@cfoadvisorypartners.net."
      );
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";
  const field =
    "w-full rounded-lg border border-slate-300 p-3 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20";

  return (
    <div className="rounded-2xl bg-white p-7 shadow-2xl shadow-slate-950/30">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">
        Request your assessment
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Tell us a little about the business. If you&apos;re a fit, we&apos;ll send the
        short list of what we need to get started.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input type="hidden" name="source" value={source} readOnly />
        <input type="hidden" name="formName" value="assessment" readOnly />

        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Your name
          </label>
          <input id="name" name="name" className={field} required autoComplete="name" />
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Company
          </label>
          <input id="company" name="company" className={field} required autoComplete="organization" />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Work email
          </label>
          <input id="email" name="email" type="email" className={field} required autoComplete="email" />
        </div>

        <div>
          <label htmlFor="revenueRange" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Annual revenue
          </label>
          <select id="revenueRange" name="revenueRange" className={field} defaultValue="" required>
            <option value="" disabled>
              Select a range
            </option>
            {assessmentRevenueRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Phone <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" />
        </div>

        {status === "error" ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 rounded-full bg-slate-950 px-6 py-4 text-base font-semibold !text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {isSubmitting ? "Sending..." : "Start my free assessment →"}
        </button>

        <p className="text-xs leading-5 text-slate-500">
          We use your details only to run the assessment and contact you about it.
          We never sell or share your information.
        </p>
      </form>
    </div>
  );
}
