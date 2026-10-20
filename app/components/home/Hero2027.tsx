"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import ParticleBackground from "../ParticleBackground";
import TyphoonLogo from "../TyphoonLogo";
import Countdown from "./Countdown";

export default function Hero2027() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a3a5c 70%, #0d2847 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <ParticleBackground />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="opacity-10"
        >
          <TyphoonLogo size={600} />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <span className="rounded-full border border-electric-cyan/30 bg-electric-cyan/20 px-4 py-2 text-sm font-semibold tracking-wider text-electric-cyan uppercase">
            13–14 Feb 2027 · Hong Kong
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">TyphoonHacks</span>{" "}
          <span className="text-storm-white">2027</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-4 text-xl text-storm-white/90 md:text-2xl"
        >
          Six systems. Two days. Break in, then write it up.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-10 text-storm-white/60"
        >
          A CTF and security analysis event for Hong Kong students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/login"
            className="group rounded-full bg-electric-cyan px-8 py-4 text-lg font-bold text-deep-space transition-all hover:shadow-lg hover:shadow-electric-cyan/30"
          >
            Sign in
          </Link>
          <Link
            href="/2026"
            className="group flex items-center gap-2 rounded-full border-2 border-electric-cyan/50 px-8 py-4 text-lg font-semibold text-storm-white transition-all hover:bg-electric-cyan/10"
          >
            See 2026
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10"
        >
          <Countdown />
          <p className="mt-3 text-xs tracking-widest text-storm-white/35 uppercase">
            Until the briefing
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-storm-white/60 transition-colors hover:text-electric-cyan"
        aria-label="Scroll to details"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
}
