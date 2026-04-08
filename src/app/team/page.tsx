import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team — AnaCare",
  description: "Meet the people building AnaCare.",
};

const team = [
  {
    name: "Nash Kersting",
    role: "Co-Founder & CEO",
    photo: "/team/nash.png",
    linkedin: "https://www.linkedin.com/in/cole-kersting-057824314/",
    // Maximum headroom: top-anchored with no extra zoom.
    crop: "50% 0%",
    scale: "scale-[1.00]",
  },
  {
    name: "Joshua Kao",
    role: "Co-Founder & CTO",
    photo: "/team/joshua.png",
    linkedin: "https://www.linkedin.com/in/joshua-kao2007/",
    crop: "50% 18%",
    scale: "scale-[1.25]",
  },
  {
    name: "Shaamak Goyal",
    role: "Co-Founder & COO",
    photo: "/team/shaamak.png",
    linkedin: "https://www.linkedin.com/in/shaamakgoyal/",
    // Extreme upward shift so his head sits much higher in frame.
    crop: "50% 0%",
    scale: "scale-[1.55]",
    shift: "-translate-y-16",
  },
  {
    name: "Alec Murillo",
    role: "Co-Founder & CPO",
    photo: "/team/alec.png",
    linkedin: "https://www.linkedin.com/in/alec-murillo-8a6336382/",
    crop: "50% 12%",
  },
];

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--bg)", color: "var(--white)" }}
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div className="noise" aria-hidden />

      <div className="relative z-10">
        {/* Nav */}
        <header
          className="nav-blur sticky top-0 z-50 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
            <Link
              href="/"
              className="font-serif text-[22px] tracking-tight"
              style={{ color: "var(--white)" }}
            >
              anacare<span style={{ color: "var(--green)" }}>.</span>ai
            </Link>
            <Link
              href="/"
              className="text-[13px] transition-colors hover:text-white"
              style={{ color: "var(--muted)" }}
            >
              ← Back to home
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">

          {/* Heading */}
          <div className="mb-14 md:mb-18">
            <p
              className="text-[11px] uppercase tracking-[0.18em] mb-4"
              style={{ color: "var(--green)" }}
            >
              The team
            </p>
            <h1 className="font-serif text-[3rem] leading-[1.05] tracking-[-0.025em] md:text-[4.5rem]">
              Meet the founders
            </h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--line)",
                }}
              >
                {/* Photo — 3:4 portrait, custom crop per person */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ paddingBottom: "120%" }}
                >
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className={`object-cover ${person.scale ? "origin-center" : "origin-top"} ${person.scale ?? ""} ${person.shift ?? ""}`}
                    style={{ objectPosition: person.crop }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, var(--bg2), transparent)",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="px-4 py-4 md:px-5 md:py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-serif text-[16px] md:text-[18px] leading-tight tracking-tight">
                        {person.name}
                      </p>
                      <p
                        className="mt-1 text-[12px] md:text-[13px]"
                        style={{ color: "var(--muted)" }}
                      >
                        {person.role}
                      </p>
                    </div>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="mt-0.5 shrink-0 rounded p-1 transition-colors hover:bg-white/10"
                      style={{ color: "var(--green)" }}
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t pt-12"
            style={{ borderColor: "var(--line)" }}
          >
            <p className="text-[15px] leading-relaxed max-w-sm" style={{ color: "var(--muted)" }}>
              We&apos;re a small team moving fast. If this problem interests you, reach out.
            </p>
            <Link
              href="mailto:nash@anacare.ai"
              className="inline-flex items-center h-10 px-5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-80 shrink-0"
              style={{ background: "var(--white)", color: "#000" }}
            >
              Get in touch →
            </Link>
          </div>

        </main>
      </div>
    </div>
  );
}
