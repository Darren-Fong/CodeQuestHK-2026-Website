"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

interface Tier {
  name: string;
  price: string;
  color: string;
  featured?: boolean;
  benefits: { name: string; included: boolean }[];
}

const tiers: Tier[] = [
  {
    name: "Bronze",
    price: "HK$5,000",
    color: "from-amber-600 to-amber-700",
    benefits: [
      { name: "Logo on website", included: true },
      { name: "Logo at venue", included: true },
      { name: "Social media mention", included: true },
      { name: "Judging panel seat", included: false },
      { name: "Workshop hosting", included: false },
      { name: "Challenge sponsorship", included: false },
      { name: "Recruitment booth", included: false },
      { name: "Keynote opportunity", included: false },
    ],
  },
  {
    name: "Silver",
    price: "HK$15,000",
    color: "from-gray-300 to-gray-400",
    benefits: [
      { name: "Logo on website", included: true },
      { name: "Logo at venue", included: true },
      { name: "Social media mentions (3x)", included: true },
      { name: "Judging panel seat", included: true },
      { name: "Workshop hosting", included: false },
      { name: "Challenge sponsorship", included: false },
      { name: "Recruitment booth", included: true },
      { name: "Keynote opportunity", included: false },
    ],
  },
  {
    name: "Gold",
    price: "HK$30,000",
    color: "from-yellow-400 to-amber-500",
    benefits: [
      { name: "Logo on website (featured)", included: true },
      { name: "Logo at venue (premium)", included: true },
      { name: "Social media mentions (5x)", included: true },
      { name: "Judging panel seats (2)", included: true },
      { name: "Workshop hosting", included: true },
      { name: "Challenge sponsorship", included: true },
      { name: "Recruitment booth", included: true },
      { name: "Keynote opportunity", included: false },
    ],
  },
  {
    name: "Platinum",
    price: "HK$50,000+",
    color: "from-electric-cyan to-blue-400",
    featured: true,
    benefits: [
      { name: "Premier logo placement", included: true },
      { name: "Venue naming rights", included: true },
      { name: "Dedicated social campaign", included: true },
      { name: "Judging panel seats (3)", included: true },
      { name: "Workshop hosting (2)", included: true },
      { name: "Exclusive challenge", included: true },
      { name: "Premium recruitment booth", included: true },
      { name: "Opening keynote", included: true },
    ],
  },
];

export default function SponsorshipTiers() {
  return (
    <SectionWrapper dark>
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Partnership Options
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Sponsorship Tiers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          Choose the partnership level that fits your goals. All tiers include
          recognition and our gratitude for supporting student innovation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass relative rounded-2xl p-6 ${
              tier.featured
                ? "border-electric-cyan/50 border-2 lg:-mt-4 lg:mb-4"
                : ""
            }`}
          >
            {tier.featured && (
              <div className="bg-electric-cyan text-deep-space absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-xs font-bold">
                <Star className="h-3 w-3" /> PREMIER
              </div>
            )}

            <div className="mt-2 mb-6 text-center">
              <h3
                className={`bg-gradient-to-r font-[family-name:var(--font-space-grotesk)] text-2xl font-bold ${tier.color} bg-clip-text text-transparent`}
              >
                {tier.name}
              </h3>
              <p className="text-storm-white mt-2 text-3xl font-bold">
                {tier.price}
              </p>
            </div>

            <ul className="mb-6 space-y-3">
              {tier.benefits.map((benefit) => (
                <li
                  key={benefit.name}
                  className={`flex items-start gap-2 text-sm ${
                    benefit.included
                      ? "text-storm-white"
                      : "text-subtle-gray/50"
                  }`}
                >
                  <Check
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                      benefit.included
                        ? "text-success-teal"
                        : "text-subtle-gray/30"
                    }`}
                  />
                  <span className={benefit.included ? "" : "line-through"}>
                    {benefit.name}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-lg py-3 font-semibold transition-all ${
                tier.featured
                  ? "bg-electric-cyan text-deep-space hover:bg-electric-cyan/90"
                  : "border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10 border"
              }`}
            >
              Contact Us
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
