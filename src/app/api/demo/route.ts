import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "nash@anacare.ai";

interface DemoPayload {
  firstName: string;
  lastName: string;
  workEmail: string;
  organizationName: string;
  employeeType: string;
  employeeCount: string;
  additionalInfo?: string;
  insurancePlan: string;
  primaryLocations: string;
}

function buildHtml(d: DemoPayload): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:10px 16px;font-size:13px;color:#6b7280;white-space:nowrap;border-bottom:1px solid #f3f4f6;vertical-align:top;">${label}</td>
           <td style="padding:10px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;">${value}</td>
         </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
        <tr>
          <td colspan="2" style="background:#0a0a0a;padding:24px 28px;">
            <span style="font-family:Georgia,serif;font-size:20px;color:#ffffff;letter-spacing:-0.3px;">
              anacare<span style="color:#1af0a0;">.</span>ai
            </span>
            <span style="margin-left:12px;font-size:13px;color:rgba(255,255,255,0.45);">New demo request</span>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:24px 28px 8px;">
            <p style="margin:0;font-size:15px;color:#374151;">
              A new demo request was submitted from <strong>${d.firstName} ${d.lastName}</strong> at <strong>${d.organizationName}</strong>.
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:8px 16px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              ${row("Name", `${d.firstName} ${d.lastName}`)}
              ${row("Work email", d.workEmail)}
              ${row("Organization", d.organizationName)}
              ${row("Employee type", d.employeeType === "self-insured" ? "Self-insured" : "Fully insured")}
              ${row("Number of employees", d.employeeCount)}
              ${row("Insurance plan", d.insurancePlan)}
              ${row("Primary locations", d.primaryLocations)}
              ${d.additionalInfo ? row("Additional information", d.additionalInfo) : ""}
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:24px 28px;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              Reply directly to this email to respond to ${d.firstName} at <a href="mailto:${d.workEmail}" style="color:#0f3d2e;">${d.workEmail}</a>.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  let body: DemoPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  console.info("[demo inquiry]", body);

  if (!process.env.RESEND_API_KEY) {
    console.warn("[demo] RESEND_API_KEY not set — skipping email delivery");
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "AnaCare Website <onboarding@resend.dev>",
      replyTo: `${body.firstName} ${body.lastName} <${body.workEmail}>`,
      to: TO_EMAIL,
      subject: `Demo request — ${body.firstName} ${body.lastName} (${body.organizationName})`,
      html: buildHtml(body),
    });
  } catch (err) {
    console.error("[demo email error]", err);
    return NextResponse.json(
      { ok: false, error: "Email delivery failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
