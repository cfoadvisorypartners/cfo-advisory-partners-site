import { siteContent } from "@/lib/site-content";

type LeadPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  revenueRange: string;
  challenge: string;
  source: string;
  formName: string;
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
    ["Form", payload.formName],
    ["Source", payload.source],
  ];

  return rows
    .map(([label, value]) => `${label}: ${value || "Not provided"}`)
    .join("\n");
}

function getEnv(name: string, fallbackName?: string) {
  return process.env[name] || (fallbackName ? process.env[fallbackName] : "");
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
    source: getField(formData, "source"),
    formName: getField(formData, "formName") || "lead",
  };

  if (!payload.name || !payload.email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const apiKey = getEnv("RESEND_API_KEY", "resend_api_key");
  const to =
    getEnv("LEAD_NOTIFICATION_TO", "lead_notification_to") ||
    siteContent.contactEmail;
  const from =
    getEnv("LEAD_NOTIFICATION_FROM", "lead_notification_from") ||
    `CFO Advisory Partners <${siteContent.contactEmail}>`;

  if (!apiKey) {
    return Response.json(
      { error: "Lead notification email is not configured." },
      { status: 500 }
    );
  }

  const subject =
    payload.formName === "assessment"
      ? `Assessment request from ${payload.name}`
      : `New discovery call request from ${payload.name}`;

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
      subject,
      text: createLeadEmail(payload),
    }),
  });

  if (!response.ok) {
    console.error("Resend lead notification failed", {
      status: response.status,
      body: await response.text(),
    });

    return Response.json(
      { error: "Lead notification email could not be sent." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
