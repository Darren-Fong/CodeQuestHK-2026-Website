"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Code, Users, Presentation } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const steps = [
  {
    icon: Lightbulb,
    title: "Share Your Challenge",
    description:
      "Present a real problem your company faces that could benefit from fresh perspectives.",
  },
  {
    icon: Users,
    title: "Teams Compete",
    description:
      "Student teams choose your challenge and develop innovative solutions over 48 hours.",
  },
  {
    icon: Code,
    title: "Working Prototypes",
    description:
      "Teams build functional prototypes—not just slides—demonstrating their solutions.",
  },
  {
    icon: Presentation,
    title: "See the Results",
    description:
      "Review prototypes, provide feedback, and potentially take ideas forward.",
  },
];

export default function ProblemStatementPartnership() {
  return (
    <SectionWrapper dark>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
          >
            Special Opportunity
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-storm-white mt-4 mb-6 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl"
          >
            Problem Statement Partnership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-subtle-gray mb-6 leading-relaxed"
          >
            Go beyond traditional sponsorship. Submit a real challenge your
            company faces and let Hong Kong&apos;s brightest young minds tackle
            it. You&apos;ll see fresh perspectives and potentially discover
            solutions you never considered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass border-electric-cyan rounded-xl border-l-4 p-6"
          >
            <h3 className="text-storm-white mb-2 font-[family-name:var(--font-space-grotesk)] font-bold">
              Your Challenge, Their Innovation
            </h3>
            <p className="text-subtle-gray text-sm leading-relaxed">
              Past problem statements have included: optimizing delivery routes,
              creating customer engagement tools, automating report generation,
              and designing accessibility features. What challenge will you
              bring?
            </p>
          </motion.div>
        </div>

        {/* Right - process steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-electric-cyan/10 border-electric-cyan/30 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border">
                <step.icon className="text-electric-cyan h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-xs">
                    0{index + 1}
                  </span>
                  <h4 className="text-storm-white font-[family-name:var(--font-space-grotesk)] font-bold">
                    {step.title}
                  </h4>
                </div>
                <p className="text-subtle-gray text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="text-subtle-gray/30 mt-4 hidden h-4 w-4 lg:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
