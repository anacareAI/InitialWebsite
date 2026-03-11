"use client";

import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import AnimatedDemoButton from "@/components/ui/button-with-icon";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import {
  User,
  TrendingUp,
  DollarSign,
  Building2,
  BarChart3,
  FileText,
  Stethoscope,
  Pill,
  ArrowRight,
  Target,
  Handshake,
  Brain,
  Activity,
  CheckCircle2,
  Eye,
  Cpu,
  Award,
  Plug,
  Sun,
  Moon,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import React, { useRef, useState, useEffect, useCallback } from "react";

const timelineData = [
  {
    title: "Step 1",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          Enter Details
        </h4>
        <p className="text-foreground/75 text-sm md:text-base mb-5">
          Your member selects a procedure, enters their location, and confirms their plan. That&apos;s it.
        </p>
        <div className="rounded-xl border-2 border-border bg-white dark:bg-gray-950 p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-foreground/60 uppercase tracking-wider text-xs font-medium">
              Procedure
            </span>
            <span className="text-foreground font-medium">
              ACL Reconstruction (CPT 29888)
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/60 uppercase tracking-wider text-xs font-medium">
              Location
            </span>
            <span className="text-foreground font-medium">
              10001, 50 mile radius
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/60 uppercase tracking-wider text-xs font-medium">
              Insurance
            </span>
            <span className="text-foreground font-medium">
              Cigna Bronze PPO
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          AI Analysis
        </h4>
        <p className="text-foreground/75 text-sm md:text-base mb-5">
          Our engine pulls in <strong className="font-semibold text-foreground">real pricing data</strong> from hospitals, insurer contracts, and quality reports. It estimates the <strong className="font-semibold text-foreground">full cost</strong> of the episode — surgery, rehab, and meds.
        </p>
        <div className="rounded-xl border-2 border-border bg-white dark:bg-gray-950 p-5 space-y-3">
          <div>
            <span className="text-foreground/60 uppercase tracking-wider text-xs font-medium block mb-1">
              Data Sources
            </span>
            <span className="text-foreground text-sm">
              Insurer contracts, hospital pricing files, quality metrics
            </span>
          </div>
          <div>
            <span className="text-foreground/60 uppercase tracking-wider text-xs font-medium block mb-1">
              Analysis
            </span>
            <span className="text-foreground text-sm">
              Full episode costs: surgery, facility fees, rehab, prescriptions
            </span>
          </div>
          <div>
            <span className="text-foreground/60 uppercase tracking-wider text-xs font-medium block mb-1">
              Output
            </span>
            <span className="text-foreground text-sm">
              30 nearby hospitals ranked by cost and quality
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          Full Cost Estimate
        </h4>
        <p className="text-foreground/75 text-sm md:text-base mb-5">
          Surgery + rehab + medications after deductible and coinsurance. <strong className="font-semibold text-foreground">No surprises.</strong> Compare options side by side.
        </p>
        <div className="rounded-xl border-2 border-border bg-white dark:bg-gray-950 p-5 space-y-3">
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span className="text-foreground/70">Procedure</span>
            <span className="text-foreground font-semibold">$961</span>
          </div>
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span className="text-foreground/70">Rehab (24 sessions)</span>
            <span className="text-foreground font-semibold">$3,720</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/70">Medications</span>
            <span className="text-foreground font-semibold">$80</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 4",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          Compare Providers
        </h4>
        <p className="text-foreground/75 text-sm md:text-base mb-5">
          Your member sees <strong className="font-semibold text-foreground">total costs</strong>, quality scores, and facility ratings. They pick the best option with <strong className="font-semibold text-foreground">full confidence</strong>.
        </p>
        <div className="rounded-xl border-2 border-border bg-white dark:bg-gray-950 p-5">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-border">
            <span className="font-semibold text-foreground">
              Jacobi Medical Center
            </span>
            <span className="text-foreground/60 text-sm">
              Bronx, NY (10.9 mi)
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-foreground/70">Total Out of Pocket</span>
              <span className="text-foreground font-semibold">$11,872</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Procedure Score</span>
              <span className="text-foreground font-semibold">48/100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Hospital Rating</span>
              <span className="text-foreground font-semibold">
                CMS Tier 2 Regional
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const galleryItems = [
  {
    id: "cost-transparency",
    title: "Surgical Cost Transparency",
    description:
      "See the full cost of every procedure across every provider in your network. No surprises.",
    icon: Eye,
  },
  {
    id: "ai-analysis",
    title: "AI Provider Matching",
    description:
      "Our AI finds the best surgeon for the job. Lower cost. Higher quality. In network.",
    icon: Cpu,
  },
  {
    id: "quality-outcomes",
    title: "Quality You Can Trust",
    description:
      "Every recommendation is backed by quality scores and outcome data. Great care, guaranteed.",
    icon: Award,
  },
  {
    id: "plan-integration",
    title: "Easy Integration",
    description:
      "Plug AnaCare into your existing workflow. No disruption. Savings from day one.",
    icon: Plug,
  },
];

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const IconComponent = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border-2 border-border bg-white dark:bg-gray-950 p-7 cursor-pointer transition-all duration-300 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
    >
      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 group-hover:border-green-300 dark:group-hover:border-green-700">
        <IconComponent className="w-6 h-6 text-green-700 dark:text-green-400" />
      </div>
      <h3 className="text-foreground text-lg font-semibold mb-2">
        {item.title}
      </h3>
      <p className="text-foreground/75 dark:text-foreground/70 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

function ResultsSection() {
  const metrics = [
    {
      value: "$25,494",
      label: "Saved per surgical episode",
      sub: "Average across all procedures",
    },
    {
      value: "179:1",
      label: "Return on investment",
      sub: "For every $1 spent",
    },
    {
      value: "$48,943",
      label: "Saved on complex procedures",
      sub: "Joint, cardiac, spine, bariatric",
    },
    {
      value: "$12,482",
      label: "Saved on common procedures",
      sub: "ACL, appendectomy, cataract, hernia",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Real Savings. Real Fast.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-foreground/75 dark:text-foreground/70 text-lg"
          >
            Plans using AnaCare see <strong className="font-semibold text-foreground">immediate impact</strong> on surgical spend.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border-2 border-border bg-white dark:bg-gray-950 p-6 text-center transition-all duration-300 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-foreground/60">{metric.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Your Members Are Overpaying for Surgery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/75 dark:text-foreground/70 text-lg"
          >
            Without the right data, every surgical referral <strong className="font-semibold text-foreground">costs you more</strong> than it should.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border-2 border-border bg-white dark:bg-gray-950 p-7 transition-all duration-300 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 flex items-center justify-center mb-5">
              <User className="w-5 h-5 text-green-700 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              A Member Needs Surgery
            </h3>
            <p className="text-foreground/75 dark:text-foreground/70 text-sm mb-5">
              They get <strong className="font-semibold text-foreground">one referral</strong>. No price comparison. No quality data.
            </p>
            <div className="space-y-3">
              {["Out of pocket cost", "Rehab costs", "Medication costs"].map(
                (label) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-sm text-foreground/70">
                      {label}
                    </span>
                    <span className="text-lg font-bold text-destructive">
                      ???
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border-2 border-border bg-white dark:bg-gray-950 p-7 transition-all duration-300 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 flex items-center justify-center mb-5">
              <TrendingUp className="w-5 h-5 text-green-700 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">What This Costs You</h3>
            <p className="text-foreground/75 dark:text-foreground/70 text-sm mb-5">
              Without visibility, your plan absorbs <strong className="font-semibold text-foreground">inflated costs</strong> on every claim.
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: <DollarSign className="w-4 h-4 text-green-700 dark:text-green-400" />,
                  text: (
                    <><strong className="font-semibold text-foreground">Higher claims</strong> on your book</>
                  ),
                },
                {
                  icon: <Building2 className="w-4 h-4 text-green-700 dark:text-green-400" />,
                  text: (
                    <>Members at <strong className="font-semibold text-foreground">lower quality</strong> facilities</>
                  ),
                },
                {
                  icon: <BarChart3 className="w-4 h-4 text-green-700 dark:text-green-400" />,
                  text: (
                    <>No way to <strong className="font-semibold text-foreground">compare or redirect</strong></>
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950/50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm text-foreground/75 dark:text-foreground/70">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedArrow({ scrollProgress }: { scrollProgress: any }) {
  const x = useTransform(scrollProgress, [0, 1], [0, 12]);
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      className="hidden md:flex items-center gap-1 text-green-600 dark:text-green-400"
      style={{ x, opacity }}
    >
      <div className="w-6 h-px bg-green-400 dark:bg-green-600" />
      <ArrowRight className="w-4 h-4" />
    </motion.div>
  );
}

function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dataSources = [
    {
      icon: <Building2 className="w-5 h-5 text-green-700 dark:text-green-400" />,
      label: "Hospital price data",
    },
    {
      icon: <FileText className="w-5 h-5 text-green-700 dark:text-green-400" />,
      label: "Your plan's contracts",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-green-700 dark:text-green-400" />,
      label: "Provider quality scores",
    },
    {
      icon: <Pill className="w-5 h-5 text-green-700 dark:text-green-400" />,
      label: "Full episode costs",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            See the True Cost Before the Scalpel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/75 dark:text-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Our AI scans <strong className="font-semibold text-foreground">millions of data points</strong> to find your members the best surgeon at the lowest price.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border-2 border-border bg-white dark:bg-gray-950 p-6 transition-all duration-300 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
            >
              <h3 className="font-semibold mb-5 text-base">Data Ingestion</h3>
              <div className="grid grid-cols-2 gap-3">
                {dataSources.map((source) => (
                  <div
                    key={source.label}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card dark:bg-[#0a1410] border border-border text-center transition-all duration-300 hover:border-green-300 dark:hover:border-green-700"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green-50 dark:bg-green-950/50 flex items-center justify-center">
                      {source.icon}
                    </div>
                    <span className="text-xs text-foreground/70 leading-tight">
                      {source.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-3 py-4"
            >
              <AnimatedArrow scrollProgress={scrollYProgress} />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-green-200 dark:shadow-green-900/50">
                  <Brain className="w-9 h-9 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-1 rounded-2xl border border-green-300/50 dark:border-green-600/50 -z-10"
                />
              </div>
              <span className="text-[11px] text-green-700 dark:text-green-400 font-semibold uppercase tracking-wider">
                AI Engine
              </span>
              <AnimatedArrow scrollProgress={scrollYProgress} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border-2 border-border bg-white dark:bg-gray-950 p-6 transition-all duration-300 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
            >
              <h3 className="font-semibold mb-5 text-base">
                Better Outcomes
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />,
                    text: "Total cost visibility per episode",
                  },
                  {
                    icon: <Target className="w-4 h-4 text-green-600 dark:text-green-400" />,
                    text: "Lower spend, higher quality",
                  },
                  {
                    icon: <Handshake className="w-4 h-4 text-green-600 dark:text-green-400" />,
                    text: "Fits into your existing workflows",
                  },
                ].map((benefit) => (
                  <div
                    key={benefit.text}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card dark:bg-[#0a1410] border border-border transition-all duration-300 hover:border-green-300 dark:hover:border-green-700"
                  >
                    <div className="w-7 h-7 rounded-md bg-green-50 dark:bg-green-950/50 flex items-center justify-center shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <div className="rounded-2xl border-2 border-border bg-white dark:bg-gray-950 overflow-hidden transition-all duration-300 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg hover:shadow-green-100/50 dark:hover:shadow-green-900/20">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 mb-4 w-fit">
                  <Activity className="w-3 h-3 text-green-700 dark:text-green-400" />
                  <span className="text-xs text-green-700 dark:text-green-400 font-medium">
                    Live Analysis
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  AI Powered Cost Intelligence
                </h3>
                <p className="text-foreground/75 dark:text-foreground/70 text-sm leading-relaxed mb-4">
                  Every surgical referral runs through our engine. It compares <strong className="font-semibold text-foreground">real pricing data</strong> from hospitals and insurers, then ranks the <strong className="font-semibold text-foreground">best options</strong> by cost and quality.
                </p>
                <div className="space-y-2">
                  {[
                    <>Scans <strong className="font-semibold">10M+ data points</strong> per search</>,
                    <>Compares <strong className="font-semibold">real negotiated rates</strong></>,
                    <>Ranks by <strong className="font-semibold">cost and quality</strong></>,
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 p-6 flex items-center justify-center min-h-[280px]">
                <div className="border-2 border-green-200 dark:border-green-800 flex flex-col items-start max-w-sm mx-auto p-4 relative h-[16rem] w-full rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                  <Icon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-green-300 dark:text-green-700" />
                  <Icon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-green-300 dark:text-green-700" />
                  <Icon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-green-300 dark:text-green-700" />
                  <Icon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-green-300 dark:text-green-700" />
                  <EvervaultCard text="AnaCare" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How We Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/75 dark:text-foreground/70 text-lg"
          >
            Simple tools that help your plan <strong className="font-semibold text-foreground">spend less</strong> on surgery and keep members happy.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-green-800 to-green-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Stop Overpaying for Surgical Claims
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-green-100/80 text-lg mb-8 max-w-xl mx-auto"
        >
          Plans using AnaCare save <strong className="font-semibold text-white">millions each year</strong>. See what you could save.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <a
            href="https://cal.com/anacare/demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedDemoButton text="Request a Demo" variant="light" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Navbar({
  isDark,
  toggleDark,
  scrollTo,
}: {
  isDark: boolean;
  toggleDark: () => void;
  scrollTo: (id: string) => void;
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a1410]/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          AnaCare
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#results"
            onClick={(e) => { e.preventDefault(); scrollTo("results"); }}
            className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
          >
            Results
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => { e.preventDefault(); scrollTo("how-it-works"); }}
            className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
          >
            How It Works
          </a>
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-lg border-2 border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="https://cal.com/anacare/demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-green-800 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 text-white">
              Request Demo
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-white dark:bg-[#0a1410]">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} AnaCare. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="mailto:contact@anacare.com"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 5),
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((elementId: string) => {
    const target = document.getElementById(elementId);
    if (!target || !lenisRef.current) return;
    lenisRef.current.scrollTo(target, { offset: -80, duration: 3.5 });
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("anacare-theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("anacare-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("anacare-theme", "light");
      }
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleDark={toggleDark} scrollTo={scrollTo} />

      <HeroGeometric
        badge="AnaCare"
        title1="Reduce the Cost of"
        title2="Every Surgical Claim"
      />

      <div id="results">
        <ResultsSection />
      </div>

      <ProblemSection />

      <SolutionSection />

      <div id="how-it-works">
        <Timeline data={timelineData} />
      </div>

      <GallerySection />

      <CTASection />

      <Footer />
    </div>
  );
}
