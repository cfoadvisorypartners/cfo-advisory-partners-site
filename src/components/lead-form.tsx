"use client";

import { type FormEvent, useState } from "react";
import { revenueRanges } from "@/lib/site-content";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      setStatus("success");
    } catch {
      setErrorMessage(
        "Something went wrong. Please try again, or email info@cfoadvisorypartners.net."
      );
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="rounded-xl bg-white p-6 text-slate-900">
      {status === "success" ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
          <p className="font-semibold">Thank you. Your request has been received.</p>
          <p className="mt-1">
            We will reach out within 24 hours to schedule your complimentary
            30-minute discovery call.
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-4 grid gap-4 first:mt-0">
        <p className="text-sm leading-6 text-slate-700">
          Submit your information and we will reach out within 24 hours to
          schedule your complimentary 30-minute discovery call.
        </p>

        <input
          name="name"
          placeholder="Name"
          className="rounded-lg border p-3"
          required
        />
        <input
          name="company"
          placeholder="Company"
          className="rounded-lg border p-3"
        />
        <input
          name="email"
          placeholder="Email"
          className="rounded-lg border p-3"
          type="email"
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          className="rounded-lg border p-3"
          type="tel"
        />
        <select
          name="revenueRange"
          className="rounded-lg border p-3"
          defaultValue=""
        >
          <option value="" disabled>
            Annual revenue range
          </option>
          {revenueRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        <textarea
          name="challenge"
          placeholder="What is the biggest financial challenge you want help with?"
          className="min-h-[110px] rounded-lg border p-3"
        />

        {status === "error" ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-slate-900 p-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {isSubmitting
            ? "Submitting..."
            : "Request Your Complimentary Discovery Call"}
        </button>
      </form>
    </div>
  );
}
