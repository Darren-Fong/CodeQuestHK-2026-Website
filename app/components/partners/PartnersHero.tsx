"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/app/components/ParticleBackground";

export default function PartnersHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a3a5c 70%, #0d2847 100%)",
        }}
      />

      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-storm-white mb-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl lg:text-7xl"
        >
          Partner With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-storm-white/80 mb-6 text-xl md:text-2xl"
        >
          Join Hong Kong&apos;s most ambitious student hackathon
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-subtle-gray mx-auto max-w-2xl leading-relaxed"
        >
          TyphoonHacks 2026 brings together Hong Kong&apos;s brightest high
          school innovators for 48 hours of intensive creation. Partner with us
          to access emerging talent, showcase your brand, and contribute to the
          next generation of tech leaders.
        </motion.p>
      </div>
    </section>
  );
}
