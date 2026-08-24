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
  const label = "mb-1.5 block text-sm font-semibold text-[#27405C]";
  const field =
    "w-full rounded-lg border border-[#D6DBE1] bg-white p-3 text-[#27405C] outline-none transition placeholder:text-[#9AA3AF] focus:border-[#3F8E8C] focus:ring-2 focus:ring-[#3F8E8C]/25";

  return (
    <div className="rounded-2xl border border-[#E3E6EA] bg-white p-7 shadow-[0_18px_50px_-24px_rgba(39,64,92,0.35)]">
      <h2 className="text-xl font-semibold tracking-[-0.012em] text-[#27405C]">
        Request your assessment
      </h2>
      <div className="mt-3 h-[3px] w-[52px] bg-[#3F8E8C]" />
      <p className="mt-4 text-sm leading-6 text-[#4A5666]">
        Tell us a little about the business. If you&apos;re a fit, we&apos;ll send the
        short list of what we need to get started.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input type="hidden" name="source" value={source} readOnly />
        <input type="hidden" name="formName" value="assessment" readOnly />

        <div>
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input id="name" name="name" className={field} required autoComplete="name" />
        </div>

        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input id="company" name="company" className={field} required autoComplete="organization" />
        </div>

        <div>
          <label htmlFor="email" className={label}>
            Work email
          </label>
          <input id="email" name="email" type="email" className={field} required autoComplete="email" />
        </div>

        <div>
          <label htmlFor="revenueRange" className={label}>
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
          <label htmlFor="phone" className={label}>
            Phone <span className="font-normal text-[#7A8494]">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" />
        </div>

        {status === "error" ? (
          <p className="text-sm font-medium text-[#B4342C]" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 rounded-full bg-[#27405C] px-6 py-4 text-base font-bold !text-white transition hover:bg-[#33506F] disabled:cursor-not-allowed disabled:bg-[#9AA3AF]"
        >
          {isSubmitting ? "Sending..." : "Start my free assessment →"}
        </button>

        <p className="text-xs leading-5 text-[#7A8494]">
          We use your details only to run the assessment and contact you about it.
          We never sell or share your information.
        </p>
      </form>
    </div>
  );
}
