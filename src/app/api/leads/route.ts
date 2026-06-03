import { siteContent } from "@/lib/site-content";

type LeadPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  revenueRange: string;
  challenge: string;
};

function getField(formData: FormData, key: keyof LeadPayload) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function createLeadEmail(payload: LeadPayload) {
  const rows = [
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Annual revenue range", payload.revenueRange],
    ["Financial challenge", payload.challenge],
  ];

  return rows
    .map(([label, value]) => `${label}: ${value || "Not provided"}`)
    .join("\n");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload: LeadPayload = {
    name: getField(formData, "name"),
    company: getField(formData, "company"),
    email: getField(formData, "email"),
    phone: getField(formData, "phone"),
    revenueRange: getField(formData, "revenueRange"),
    challenge: getField(formData, "challenge"),
  };

  if (!payload.name || !payload.email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_TO || siteContent.contactEmail;
  const from =
    process.env.LEAD_NOTIFICATION_FROM ||
    "CFO Advisory Partners <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json(
      { error: "Lead notification email is not configured." },
      { status: 500 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `New discovery call request from ${payload.name}`,
      text: createLeadEmail(payload),
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: "Lead notification email could not be sent." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
