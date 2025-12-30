"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";

const sponsors = [
  { name: "TechCorp HK", tier: "platinum" },
  { name: "Innovation Labs", tier: "gold" },
  { name: "Digital Solutions", tier: "gold" },
  { name: "Future Fund", tier: "silver" },
  { name: "Code Academy", tier: "silver" },
  { name: "StartUp Hub", tier: "silver" },
  { name: "DevTools Inc", tier: "bronze" },
  { name: "Cloud Services", tier: "bronze" },
];

export default function SponsorsPreview() {
  return (
    <SectionWrapper>
      <div className="mb-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Our Supporters
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Powered By
        </motion.h2>
      </div>

      {/* Infinite scroll sponsors */}
      <div className="relative overflow-hidden">
        <div className="from-deep-space absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent" />
        <div className="from-deep-space absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l to-transparent" />

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 py-8"
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="glass flex h-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-xl px-8 grayscale transition-all hover:grayscale-0"
            >
              <span className="text-storm-white/60 hover:text-storm-white font-[family-name:var(--font-space-grotesk)] font-bold whitespace-nowrap transition-colors">
                {sponsor.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="/partners"
          className="border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-semibold transition-all"
        >
          Become a Partner
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
