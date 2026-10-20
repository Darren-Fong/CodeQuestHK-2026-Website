"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function PageHero({
  badge,
  title,
  subtitle,
  compact = false,
}: {
  badge: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <section className={"relative overflow-hidden " + (compact ? "pt-28 pb-12" : "pt-36 pb-20")}>
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
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold tracking-widest text-electric-cyan uppercase"
        >
          {badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl leading-relaxed text-storm-white/65"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
