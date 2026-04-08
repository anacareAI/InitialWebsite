"use client";

import { useState, type ReactNode } from "react";

// ─── Paste your Web3Forms access key here ───────────────────────────────────
// Get one free (10 sec, no account): https://web3forms.com → enter nash@anacare.ai
const WEB3FORMS_KEY = "0d89c0a3-3ab9-4bc3-9b3e-23d229295a55";
// ────────────────────────────────────────────────────────────────────────────

const employeeCountOptions = [
  { value: "", label: "Please select" },
  { value: "1-50", label: "1–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-1000", label: "201–1,000" },
  { value: "1001-5000", label: "1,001–5,000" },
  { value: "5000+", label: "5,000+" },
];

const fieldSurface = {
  borderColor: "var(--line)",
  backgroundColor: "var(--bg)",
  color: "var(--white)",
} as const;

const selectChevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-opacity='0.35'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")";

const inputClassName =
  "w-full rounded-lg border px-3.5 py-2.5 text-[15px] outline-none transition-shadow placeholder:text-white/35 focus-visible:border-[var(--green)] focus-visible:ring-2 focus-visible:ring-[var(--green-dim)]";

const selectClassName = `${inputClassName} appearance-none pr-10`;

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-[13px] font-semibold"
      style={{ color: "rgba(255, 255, 255, 0.78)" }}
    >
      {children}
      {required ? (
        <span className="text-red-600 font-semibold ml-0.5" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
    const workEmail = (form.elements.namedItem("workEmail") as HTMLInputElement).value;
    const organizationName = (form.elements.namedItem("organizationName") as HTMLInputElement).value;
    const employeeType = (form.elements.namedItem("employeeType") as HTMLSelectElement).value;
    const employeeCount = (form.elements.namedItem("employeeCount") as HTMLSelectElement).value;
    const additionalInfo = (form.elements.namedItem("additionalInfo") as HTMLTextAreaElement).value;
    const insurancePlan = (form.elements.namedItem("insurancePlan") as HTMLInputElement).value;
    const primaryLocations = (form.elements.namedItem("primaryLocations") as HTMLInputElement).value;

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `Demo request — ${firstName} ${lastName} (${organizationName})`,
      from_name: `${firstName} ${lastName}`,
      replyto: workEmail,
      "First Name": firstName,
      "Last Name": lastName,
      "Work Email": workEmail,
      "Organization": organizationName,
      "Employee Type": employeeType === "self-insured" ? "Self-insured" : "Fully insured",
      "Number of Employees": employeeCount,
      "Insurance Plan": insurancePlan,
      "Primary Locations": primaryLocations,
      ...(additionalInfo ? { "Additional Information": additionalInfo } : {}),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message ?? "Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="browser-window rounded-xl p-8 md:p-10"
        role="status"
      >
        <p className="font-serif text-2xl tracking-tight" style={{ color: "var(--white)" }}>
          Thank you — we received your request.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
          A member of our team will reach out shortly at the work email you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="browser-window rounded-xl p-8 md:p-10"
      noValidate
    >
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="firstName" required>
              First name
            </FieldLabel>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className={inputClassName}
              style={fieldSurface}
            />
          </div>
          <div>
            <FieldLabel htmlFor="lastName" required>
              Last name
            </FieldLabel>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className={inputClassName}
              style={fieldSurface}
            />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="workEmail" required>
            Work email
          </FieldLabel>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            className={inputClassName}
            style={fieldSurface}
          />
        </div>

        <div>
          <FieldLabel htmlFor="organizationName" required>
            Organization name
          </FieldLabel>
          <input
            id="organizationName"
            name="organizationName"
            type="text"
            required
            autoComplete="organization"
            className={inputClassName}
            style={fieldSurface}
          />
        </div>

        <div>
          <FieldLabel htmlFor="employeeType" required>
            Type of employees
          </FieldLabel>
          <select
            id="employeeType"
            name="employeeType"
            required
            defaultValue=""
            className={selectClassName}
            style={{
              ...fieldSurface,
              backgroundImage: selectChevron,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "18px",
            }}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="self-insured">Self-insured</option>
            <option value="fully-insured">Fully insured</option>
          </select>
        </div>

        <div>
          <FieldLabel htmlFor="employeeCount" required>
            Number of employees
          </FieldLabel>
          <select
            id="employeeCount"
            name="employeeCount"
            required
            defaultValue=""
            className={selectClassName}
            style={{
              ...fieldSurface,
              backgroundImage: selectChevron,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "18px",
            }}
          >
            {employeeCountOptions.map((opt) => (
              <option key={opt.value || "placeholder"} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <FieldLabel htmlFor="insurancePlan" required>
            Insurance plan
          </FieldLabel>
          <input
            id="insurancePlan"
            name="insurancePlan"
            type="text"
            required
            className={inputClassName}
            style={fieldSurface}
            placeholder="e.g. carrier, product line, or plan type"
          />
        </div>

        <div>
          <FieldLabel htmlFor="primaryLocations" required>
            Primary locations of employees
          </FieldLabel>
          <input
            id="primaryLocations"
            name="primaryLocations"
            type="text"
            required
            className={inputClassName}
            style={fieldSurface}
            placeholder="e.g. New York, NY; remote US; multi-state"
          />
        </div>

        <div>
          <FieldLabel htmlFor="additionalInfo">Additional information</FieldLabel>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            className={inputClassName}
            style={fieldSurface}
            placeholder="Tell us about your goals, timelines, or questions."
          />
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-red-400" role="alert">
          Something went wrong. Please try again or email{" "}
          <a
            href="mailto:contact@anacare.ai"
            className="underline underline-offset-2"
            style={{ color: "var(--green)" }}
          >
            contact@anacare.ai
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full rounded-full px-5 py-3 text-[15px] font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: "var(--white)", color: "#000" }}
      >
        {status === "submitting" ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
