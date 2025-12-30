"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const comparisons = [
  {
    aspect: "Duration",
    others: "Weeks or Months",
    typhoonhacks: "48 Hours",
  },
  {
    aspect: "Focus",
    others: "Business Slides & Pitches",
    typhoonhacks: "Working Prototypes",
  },
  {
    aspect: "Work",
    others: "Pre-prepared Projects",
    typhoonhacks: "Built from Scratch",
  },
  {
    aspect: "Judging",
    others: "Presentation Skills",
    typhoonhacks: "Live Demos",
  },
  {
    aspect: "Problems",
    others: "Hypothetical Scenarios",
    typhoonhacks: "Real Industry Challenges",
  },
];

export default function ComparisonSection() {
  return (
    <SectionWrapper dark>
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Not Your{" "}
          <span className="relative">
            <span className="relative z-10">Typical</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-electric-cyan absolute top-1/2 left-0 h-0.5 w-full origin-left"
            />
          </span>{" "}
          Competition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          We&apos;re redefining what a student tech competition looks like in
          Hong Kong.
        </motion.p>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div className="text-subtle-gray font-semibold">Aspect</div>
          <div className="text-subtle-gray/60 text-center font-semibold">
            Others
          </div>
          <div className="text-electric-cyan text-center font-semibold">
            TyphoonHacks
          </div>
        </div>

        {/* Comparison rows */}
        {comparisons.map((row, index) => (
          <motion.div
            key={row.aspect}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-ocean-depth grid grid-cols-3 gap-4 border-t py-4"
          >
            <div className="text-storm-white font-[family-name:var(--font-space-grotesk)] font-semibold">
              {row.aspect}
            </div>
            <div className="text-subtle-gray/60 flex items-center justify-center gap-2 text-center">
              <X className="h-4 w-4 text-red-400/60" />
              <span className="text-sm">{row.others}</span>
            </div>
            <div className="text-storm-white flex items-center justify-center gap-2 text-center">
              <Check className="text-success-teal h-4 w-4" />
              <span className="text-sm font-medium">{row.typhoonhacks}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
