import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "./demo-form";

export const metadata: Metadata = {
  title: "Request a demo — AnaCare",
  description:
    "Schedule time with our team to see how AnaCare reduces surgical claim costs with AI pricing intelligence.",
};

function IconLineGraph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 18V3M3 18h18M7 14l4-4 3 3 5-6" />
      <circle cx="7" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="11" cy="10" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="19" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9.5 3.5 11 8l4.5 1.5L11 11 9.5 15.5 8 11 3.5 9.5 8 8 9.5 3.5Z" />
      <path d="M18.5 14.5 19.5 17l2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
    </svg>
  );
}

const benefits = [
  {
    icon: IconLineGraph,
    text: "Reduce surgical spend by surfacing in-network facilities with the lowest full-episode cost for every procedure.",
  },
  {
    icon: IconShield,
    text: "Strengthen compliance with defensible pricing grounded in negotiated-rate and transparency data—not guesswork.",
  },
  {
    icon: IconSparkles,
    text: "Empower care navigation and benefit teams with ranked options, quality signals, and savings you can explain at renewal.",
  },
];

export default function DemoPage() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--bg)", color: "var(--white)" }}
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div className="noise" aria-hidden />

      <div className="relative z-10">
        <header
          className="nav-blur sticky top-0 z-50 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
            <Link
              href="/"
              className="font-serif text-[22px] tracking-tight"
              style={{ color: "var(--white)" }}
            >
              anacare<span style={{ color: "var(--green)" }}>.</span>ai
            </Link>
            <Link
              href="/"
              className="text-[13px] font-medium transition-colors underline-offset-4 hover:text-white hover:underline"
              style={{ color: "var(--muted)" }}
            >
              Back to home
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_min(440px,100%)] lg:gap-16 xl:grid-cols-[1.05fr_min(460px,100%)]">
            <div className="lg:pt-2">
              <h1 className="font-serif text-[2.25rem] leading-[1.12] tracking-[-0.02em] md:text-5xl md:leading-[1.08]">
                See AnaCare in action
              </h1>
              <p
                className="mt-5 max-w-lg text-[15px] leading-relaxed md:text-[16px]"
                style={{ color: "var(--muted)" }}
              >
                Fill out the form to speak with a member of our team and learn more
                about how AnaCare can help your organization:
              </p>
              <ul className="mt-10 max-w-xl space-y-8" role="list">
                {benefits.map(({ icon: Icon, text }) => (
                  <li key={text.slice(0, 24)} className="flex gap-4">
                    <span
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                      style={{
                        borderColor: "var(--line2)",
                        background: "var(--bg2)",
                        color: "var(--green)",
                        boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
                      }}
                      aria-hidden
                    >
                      <Icon className="h-[22px] w-[22px]" />
                    </span>
                    <p
                      className="text-[15px] leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-1">
              <DemoForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
