import Link from "next/link";
import { BrowserWindow } from "@/components/browser-window";

const PRODUCT_URL = "https://anacare-product.vercel.app/";
const DEMO_PATH = "/demo";
const CONTACT_EMAIL = "contact@anacare.ai";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)", color: "var(--white)" }}
    >
      <Nav />
      <Hero />
      <StatStrip />
      <Problem />
      <Product />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <nav
      className="nav-blur fixed top-0 left-0 right-0 z-50 border-b"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="max-w-[1240px] mx-auto h-16 px-6 md:px-8 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-[22px] tracking-tight"
          style={{ color: "var(--white)" }}
        >
          anacare<span style={{ color: "var(--green)" }}>.</span>ai
        </a>

        <div
          className="hidden md:flex items-center gap-8 text-[13px]"
          style={{ color: "var(--muted)" }}
        >
          <a
            href="#problem"
            className="hover:text-white transition-colors"
          >
            Problem
          </a>
          <a
            href="#product"
            className="hover:text-white transition-colors"
          >
            Product
          </a>
          <a
            href="#how"
            className="hover:text-white transition-colors"
          >
            How it works
          </a>
          <Link
            href="/team"
            className="hover:text-white transition-colors"
          >
            Team
          </Link>
          <a
            href="mailto:nash@anacare.ai"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[13px] hover:text-white transition-colors"
            style={{ color: "var(--muted)" }}
          >
            Login
          </Link>
          <Link
            href={DEMO_PATH}
            className="inline-flex items-center h-9 px-4 rounded-full text-[13px] font-medium transition-colors"
            style={{
              background: "var(--white)",
              color: "#000",
            }}
          >
            Request a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      {/* Background grid with radial mask */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="noise" />

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-2 mb-8 text-[11px] uppercase tracking-[0.18em]"
          style={{ color: "var(--muted)" }}
        >
          <span
            className="hero-eyebrow-dot w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: "var(--green)" }}
          />
          <span>AI pricing intelligence for surgical claims</span>
        </div>

        {/* Headline */}
        <h1 className="text-center font-serif text-[56px] md:text-[96px] leading-[0.95] tracking-[-0.02em] max-w-[1000px] mx-auto">
          Reduce the cost of
          <br />
          <em className="italic" style={{ color: "var(--muted)" }}>
            every
          </em>{" "}
          surgical claim.
        </h1>

        {/* Subline */}
        <p
          className="mt-8 mx-auto text-center text-[16px] md:text-[17px] leading-relaxed max-w-[620px]"
          style={{ color: "var(--muted)" }}
        >
          AnaCare analyzes insurer-negotiated rates and hospital transparency
          data to identify the lowest-cost surgical care — in-network, at the
          best facility, every time.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={DEMO_PATH}
            className="inline-flex items-center h-11 px-5 rounded-full text-[13px] font-medium transition-transform hover:scale-[1.02]"
            style={{ background: "var(--white)", color: "#000" }}
          >
            Request a demo
          </Link>
          <Link
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-5 rounded-full text-[13px] font-medium border transition-colors hover:bg-white/5"
            style={{
              borderColor: "var(--line2)",
              color: "var(--white)",
            }}
          >
            See the product →
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 flex flex-col items-center gap-3">
          <span
            className="text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "var(--faint)" }}
          >
            Scroll
          </span>
          <div
            className="relative w-px h-12 overflow-hidden"
            style={{ background: "var(--line)" }}
          >
            <span
              className="scroll-line absolute inset-0 block"
              style={{ background: "var(--green)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STAT STRIP ---------------- */
function StatStrip() {
  const stats = [
    { value: "3-10x", label: "Price variation for the same procedure across facilities in the same city" },
    { value: "$15k+", label: "Typical annual employer healthcare spend per employee in fully insured plans" },
    { value: "72%", label: "Of employees have never compared costs before choosing a provider" },
  ];

  return (
    <section
      className="border-t border-b"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className="relative px-6 md:px-8 py-10 md:py-14"
            style={{
              borderLeft: i > 0 ? "1px solid var(--line)" : "none",
            }}
          >
            <div
              className="font-serif text-[42px] md:text-[56px] leading-none tracking-tight"
              style={{ color: "var(--white)" }}
            >
              {stat.value}
            </div>
            <div
              className="mt-3 text-[12px] uppercase tracking-[0.12em]"
              style={{ color: "var(--muted)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const cards = [
    {
      kicker: "01",
      title: "Members get one referral — and no price visibility.",
      body: "When a surgery is scheduled, no one is shopping the market. The same procedure can cost 3–5× more at one facility versus another across the street, and the plan absorbs the delta.",
    },
    {
      kicker: "02",
      title: "Pricing data exists — but it is unusable.",
      body: "Hospital transparency files and insurer negotiated-rate files are massive, inconsistent, and buried. Teams cannot act on raw data, so decisions default to legacy networks.",
    },
    {
      kicker: "03",
      title: "Every inflated claim compounds your loss ratio.",
      body: "High-cost surgical episodes drive your book's largest lines. Without intervention at the point of referral, the leakage shows up in renewals you cannot explain.",
    },
  ];

  return (
    <section
      id="problem"
      className="relative py-28 md:py-36"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="max-w-[720px] mb-16">
          <div
            className="text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ color: "var(--green)" }}
          >
            The problem
          </div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1] tracking-[-0.02em]">
            Surgical claims are the most expensive line on your book — and the
            least{" "}
            <em className="italic" style={{ color: "var(--muted)" }}>
              shoppable.
            </em>
          </h2>
        </div>

        {/* Stacked cards on bg2 surface with 1px gap */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "var(--line)",
            borderColor: "var(--line)",
            display: "grid",
            gap: "1px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.kicker}
              className="card-hover group p-8 md:p-12 grid md:grid-cols-[120px_1fr] gap-6 md:gap-12"
            >
              <div
                className="font-serif text-[28px]"
                style={{ color: "var(--muted)" }}
              >
                {card.kicker}
              </div>
              <div>
                <h3 className="font-serif text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.01em] max-w-[720px]">
                  {card.title}
                </h3>
                <p
                  className="mt-4 text-[15px] leading-relaxed max-w-[680px]"
                  style={{ color: "var(--muted)" }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCT ---------------- */
function Product() {
  return (
    <section
      id="product"
      className="relative py-28 md:py-36 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--line)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="max-w-[760px] mb-16">
          <div
            className="text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ color: "var(--green)" }}
          >
            The product
          </div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1] tracking-[-0.02em]">
            One workspace to{" "}
            <em className="italic" style={{ color: "var(--muted)" }}>
              see
            </em>{" "}
            the true cost of every surgical episode.
          </h2>
          <p
            className="mt-6 text-[16px] leading-relaxed max-w-[760px]"
            style={{ color: "var(--muted)" }}
          >
            Enter a procedure, a location, and a member&apos;s plan. AnaCare returns
            a ranked list of in-network facilities with full episode cost —
            surgery, rehab, medication — plus quality signals.
          </p>
        </div>

        {/* Mock browser */}
        <BrowserWindow url="app.anacare.ai/search/acl-reconstruction">
          <div className="grid md:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside
              className="p-6 border-b md:border-b-0 md:border-r"
              style={{ borderColor: "var(--line)" }}
            >
              <div
                className="text-[10px] uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--muted)" }}
              >
                Search
              </div>
              <div className="space-y-4">
                <SearchField
                  label="Procedure"
                  value="ACL Reconstruction"
                  sub="CPT 29888"
                />
                <SearchField
                  label="Location"
                  value="10001 · 50 mi"
                  sub="New York, NY"
                />
                <SearchField
                  label="Plan"
                  value="Cigna Bronze PPO"
                  sub="In-network"
                />
              </div>
              <div
                className="mt-6 pt-6 border-t text-[11px] space-y-2"
                style={{ borderColor: "var(--line)", color: "var(--muted)" }}
              >
                <div className="flex justify-between">
                  <span>Facilities scanned</span>
                  <span style={{ color: "var(--white)" }}>312</span>
                </div>
                <div className="flex justify-between">
                  <span>Rates indexed</span>
                  <span style={{ color: "var(--white)" }}>10.4M</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. savings</span>
                  <span style={{ color: "var(--green)" }}>$25,494</span>
                </div>
              </div>
            </aside>

            {/* Results table */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div
                  className="text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--muted)" }}
                >
                  Ranked results
                </div>
                <div
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--muted)" }}
                >
                  <span
                    className="hero-eyebrow-dot w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: "var(--green)" }}
                  />
                  Live
                </div>
              </div>

              <div
                className="rounded-lg overflow-hidden border"
                style={{ borderColor: "var(--line)" }}
              >
                <div
                  className="grid grid-cols-[1fr_90px_80px_110px] text-[10px] uppercase tracking-[0.14em] px-4 py-3"
                  style={{
                    color: "var(--muted)",
                    background: "var(--bg3)",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span>Facility</span>
                  <span className="text-right">Distance</span>
                  <span className="text-right">Quality</span>
                  <span className="text-right">Total OOP</span>
                </div>

                {[
                  {
                    name: "Hospital for Special Surgery",
                    sub: "Manhattan, NY",
                    dist: "2.1 mi",
                    quality: "A",
                    cost: "$11,872",
                    win: true,
                  },
                  {
                    name: "NYU Langone Orthopedic",
                    sub: "Manhattan, NY",
                    dist: "3.4 mi",
                    quality: "A",
                    cost: "$14,980",
                  },
                  {
                    name: "Mount Sinai West",
                    sub: "Manhattan, NY",
                    dist: "1.8 mi",
                    quality: "B+",
                    cost: "$22,410",
                  },
                  {
                    name: "Jacobi Medical Center",
                    sub: "Bronx, NY",
                    dist: "10.9 mi",
                    quality: "B",
                    cost: "$37,366",
                  },
                ].map((row, i) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-[1fr_90px_80px_110px] items-center px-4 py-4 text-[13px]"
                    style={{
                      borderBottom:
                        i < 3 ? "1px solid var(--line)" : "none",
                      background: row.win
                        ? "var(--green-dim)"
                        : "transparent",
                    }}
                  >
                    <div>
                      <div style={{ color: "var(--white)" }}>{row.name}</div>
                      <div
                        className="text-[11px] mt-0.5"
                        style={{ color: "var(--muted)" }}
                      >
                        {row.sub}
                      </div>
                    </div>
                    <div
                      className="text-right text-[12px]"
                      style={{ color: "var(--muted)" }}
                    >
                      {row.dist}
                    </div>
                    <div
                      className="text-right text-[12px]"
                      style={{
                        color: row.win ? "var(--green)" : "var(--muted)",
                      }}
                    >
                      {row.quality}
                    </div>
                    <div
                      className="text-right font-serif text-[18px]"
                      style={{
                        color: row.win ? "var(--green)" : "var(--white)",
                      }}
                    >
                      {row.cost}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div
                  className="text-[11px]"
                  style={{ color: "var(--muted)" }}
                >
                  Showing 4 of 312 facilities · sorted by total out-of-pocket
                </div>
                <Link
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] underline underline-offset-4"
                  style={{ color: "var(--green)" }}
                >
                  Open the product →
                </Link>
              </div>
            </div>
          </div>
        </BrowserWindow>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-5 rounded-full text-[13px] font-medium"
            style={{ background: "var(--white)", color: "#000" }}
          >
            Try the product
          </Link>
          <Link
            href={DEMO_PATH}
            className="inline-flex items-center h-11 px-5 rounded-full text-[13px] font-medium border hover:bg-white/5 transition-colors"
            style={{ borderColor: "var(--line2)", color: "var(--white)" }}
          >
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
}

function SearchField({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      className="rounded-md border px-3 py-2.5"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div
        className="text-[9px] uppercase tracking-[0.16em]"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </div>
      <div
        className="mt-1 text-[13px]"
        style={{ color: "var(--white)" }}
      >
        {value}
      </div>
      <div
        className="text-[10px] mt-0.5"
        style={{ color: "var(--faint)" }}
      >
        {sub}
      </div>
    </div>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Enter the episode",
      body: "Procedure, location, member plan. One search triggers the pricing engine.",
    },
    {
      n: "02",
      title: "Ingest the data",
      body: "We pull insurer contracts, hospital transparency files, and quality data into a unified index.",
    },
    {
      n: "03",
      title: "Rank the options",
      body: "The model scores facilities by total episode cost and quality, surfacing the lowest-cost in-network match.",
    },
    {
      n: "04",
      title: "Act at the point of referral",
      body: "Your team redirects members before the surgery is booked. The savings hit the claim, not the renewal.",
    },
  ];

  return (
    <section
      id="how"
      className="relative py-28 md:py-36 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--line)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="max-w-[760px] mb-16">
          <div
            className="text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ color: "var(--green)" }}
          >
            How it works
          </div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1] tracking-[-0.02em]">
            From raw pricing files to a{" "}
            <em className="italic" style={{ color: "var(--muted)" }}>
              ranked
            </em>{" "}
            recommendation — in seconds.
          </h2>
        </div>

        {/* 4-column grid on 1px-gap bg2 surface */}
        <div
          className="rounded-2xl overflow-hidden border grid md:grid-cols-4"
          style={{
            background: "var(--line)",
            borderColor: "var(--line)",
            gap: "1px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.n}
              className="card-hover group p-8 md:p-10 min-h-[280px] flex flex-col"
            >
              <div
                className="font-serif text-[20px]"
                style={{ color: "var(--muted)" }}
              >
                {step.n}
              </div>
              <h3 className="mt-8 font-serif text-[24px] leading-[1.15] tracking-[-0.01em]">
                {step.title}
              </h3>
              <p
                className="mt-3 text-[14px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {step.body}
              </p>
              <div className="flex-1" />
              <div
                className="mt-6 h-px w-8 group-hover:w-16 transition-all"
                style={{ background: "var(--green)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section
      className="relative py-32 md:py-44 border-t overflow-hidden"
      style={{ background: "var(--bg)", borderColor: "var(--line)" }}
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="noise" />

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-8 text-center">
        <div
          className="text-[11px] uppercase tracking-[0.18em] mb-8"
          style={{ color: "var(--green)" }}
        >
          Ready when you are
        </div>
        <h2 className="font-serif text-[48px] md:text-[96px] leading-[0.95] tracking-[-0.02em] max-w-[1000px] mx-auto">
          Stop overpaying for{" "}
          <em className="italic" style={{ color: "var(--muted)" }}>
            every
          </em>{" "}
          surgical claim.
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={DEMO_PATH}
            className="inline-flex items-center h-11 px-5 rounded-full text-[13px] font-medium"
            style={{ background: "var(--white)", color: "#000" }}
          >
            Request a demo
          </Link>
          <Link
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-5 rounded-full text-[13px] font-medium border hover:bg-white/5 transition-colors"
            style={{ borderColor: "var(--line2)", color: "var(--white)" }}
          >
            Open the product →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-16 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="font-serif text-[24px]">
            anacare<span style={{ color: "var(--green)" }}>.</span>ai
          </div>
          <p
            className="mt-4 text-[13px] leading-relaxed max-w-[320px]"
            style={{ color: "var(--muted)" }}
          >
            AI pricing intelligence for surgical claims. Built for health plans,
            TPAs, and self-insured employers.
          </p>
        </div>

        <FooterCol
          heading="Product"
          links={[
            { label: "Overview", href: "#product" },
            { label: "How it works", href: "#how" },
            { label: "Open the product", href: PRODUCT_URL, external: true },
          ]}
        />
        <FooterCol
          heading="Company"
          links={[
            { label: "Problem", href: "#problem" },
            { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
            { label: "Request a demo", href: DEMO_PATH },
          ]}
        />
        <FooterCol
          heading="Contact"
          links={[
            { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
            { label: "Login", href: PRODUCT_URL, external: true },
          ]}
        />
      </div>

      <div
        className="border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="text-[12px]"
            style={{ color: "var(--faint)" }}
          >
            © {new Date().getFullYear()} AnaCare, Inc. All rights reserved.
          </span>
          <span
            className="text-[12px]"
            style={{ color: "var(--faint)" }}
          >
            Built in New York.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div
        className="text-[10px] uppercase tracking-[0.18em] mb-5"
        style={{ color: "var(--muted)" }}
      >
        {heading}
      </div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[13px] hover:text-white transition-colors"
              style={{ color: "var(--muted)" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
