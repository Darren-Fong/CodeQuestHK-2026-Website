"use client";

import { motion } from "framer-motion";
import { Clock, Handshake, Code2, MapPin } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const pillars = [
  {
    icon: Clock,
    title: "48 Hours of Innovation",
    description:
      "A true hackathon experience. Build something amazing from scratch in just two days.",
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    description:
      "Work on real problems from leading Hong Kong companies and startups.",
  },
  {
    icon: Code2,
    title: "Real Prototypes",
    description:
      "No slide decks here. Create working prototypes that demonstrate your solution.",
  },
  {
    icon: MapPin,
    title: "Hong Kong's Best",
    description:
      "Connect with the brightest high school minds from across the city.",
  },
];

export default function EventOverview() {
  return (
    <SectionWrapper id="overview">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          What We Offer
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          The TyphoonHacks Experience
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group glass border-electric-cyan hover:shadow-electric-cyan/10 rounded-2xl border-l-4 p-8 transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="bg-electric-cyan/10 group-hover:bg-electric-cyan/20 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full transition-colors">
                <pillar.icon className="text-electric-cyan h-7 w-7" />
              </div>
              <div>
                <h3 className="text-storm-white mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
                  {pillar.title}
                </h3>
                <p className="text-subtle-gray leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
