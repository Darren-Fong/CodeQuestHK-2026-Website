"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "../ParticleBackground";
import TyphoonLogo from "../TyphoonLogo";
import { linksConfig } from "@/app/config/links";

const taglines = [
  "Build from scratch",
  "No pre-prepared projects",
  "Create working prototypes",
  "Real problems. Real solutions.",
];

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("overview");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a3a5c 70%, #0d2847 100%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particle background */}
      <ParticleBackground />

      {/* Large rotating typhoon */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="opacity-10"
        >
          <TyphoonLogo size={600} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <span className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30 rounded-full border px-4 py-2 text-sm font-semibold tracking-wider uppercase">
            Hong Kong&apos;s First
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">TyphoonHacks</span>{" "}
          <span className="text-storm-white">2026</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-storm-white/90 mb-4 text-xl md:text-2xl"
        >
          48 Hours. Real Problems. Real Solutions.
        </motion.p>

        {/* Animated tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-10 h-8"
        >
          <motion.p
            key={taglineIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-lg"
          >
            {"> "}
            {taglines[taglineIndex]}
            <span className="animate-pulse">_</span>
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href={linksConfig.registration.participant.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-electric-cyan text-deep-space hover:shadow-electric-cyan/30 animate-pulse-glow rounded-full px-8 py-4 text-lg font-bold transition-all hover:shadow-lg"
          >
            {linksConfig.registration.participant.label}
          </Link>
          <Link
            href="#overview"
            className="group border-electric-cyan/50 text-storm-white hover:bg-electric-cyan/10 flex items-center gap-2 rounded-full border-2 px-8 py-4 text-lg font-semibold transition-all"
          >
            Learn More
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNextSection}
        className="text-storm-white/60 hover:text-electric-cyan absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
