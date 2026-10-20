"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const items = [
  {
    q: "Do I need a team?",
    a: "Enter with 3 to 5 people. If you don't have a full team, tell us and we'll pair you up before the event.",
  },
  {
    q: "Do I need security experience?",
    a: "No. The first system is the easiest, and the hints exist for a reason. Most teams have never done a CTF before.",
  },
  {
    q: "How much does it cost?",
    a: "HKD 20 per team. That covers the whole team, not each person.",
  },
  {
    q: "What should I bring?",
    a: "A laptop and a charger. Internet is provided at the venue.",
  },
  {
    q: "Can we use AI tools?",
    a: "During the CTF, yes. The written analysis has to be your own work, and judges will ask about it.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-8 border-y border-storm-white/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-storm-white/10 last:border-b-0">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-medium transition-colors group-hover:text-electric-cyan">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-electric-cyan"
              >
                <Plus className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pr-10 pb-5 leading-relaxed text-storm-white/60">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
