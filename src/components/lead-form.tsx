import { revenueRanges, siteContent } from "@/lib/site-content";

export function LeadForm() {
  return (
    <div className="rounded-xl bg-white p-6 text-slate-900">
      <form
        action={siteContent.calendlyUrl}
        method="get"
        className="grid gap-4"
      >
        <input name="name" placeholder="Name" className="rounded-lg border p-3" />
        <input name="company" placeholder="Company" className="rounded-lg border p-3" />
        <input name="email" placeholder="Email" className="rounded-lg border p-3" type="email" />
        <input name="phone" placeholder="Phone" className="rounded-lg border p-3" type="tel" />
        <select name="revenueRange" className="rounded-lg border p-3" defaultValue="">
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
        <button type="submit" className="rounded-lg bg-slate-900 p-3 text-white">
          Continue to Schedule
        </button>
      </form>
    </div>
  );
}