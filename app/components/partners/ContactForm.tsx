"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Clipboard } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { contactInfo } from "@/app/config/links";

const partnershipTypes = [
  { value: "event-sponsor", label: "Event Sponsor (resources & support)" },
  { value: "industry-partner", label: "Industry Partner (problem statement)" },
  { value: "both", label: "Both / Interested in exploring options" },
  { value: "other", label: "Other / Not sure yet" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    contactName: "",
    organization: "",
    email: "",
    partnershipType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <SectionWrapper id="contact">
      <div className="mb-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Let&apos;s Start a Conversation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          Tell us about yourself and how you&apos;d like to be involved.
          We&apos;ll follow up to discuss what works best for everyone.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Form - 3 columns */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          {isSubmitted ? (
            <div className="glass rounded-2xl p-12 text-center">
              <div className="bg-success-teal/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Send className="text-success-teal h-8 w-8" />
              </div>
              <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
                Thank You!
              </h3>
              <p className="text-subtle-gray">
                We&apos;ve received your inquiry and will get back to you
                shortly to discuss how we can work together.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass space-y-6 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Contact Name */}
                <div>
                  <label className="text-storm-white mb-2 block text-sm font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                    className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label className="text-storm-white mb-2 block text-sm font-medium">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                    placeholder="Company or organization (optional)"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-storm-white mb-2 block text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Partnership Type */}
              <div>
                <label className="text-storm-white mb-2 block text-sm font-medium">
                  How would you like to get involved? *
                </label>
                <select
                  required
                  value={formData.partnershipType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      partnershipType: e.target.value,
                    })
                  }
                  className="bg-ocean-depth border-subtle-gray/30 text-storm-white focus:border-electric-cyan w-full cursor-pointer appearance-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {partnershipTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-storm-white mb-2 block text-sm font-medium">
                  Tell us more
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="What resources could you provide? What challenges does your company face that students could tackle? Any questions?"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-electric-cyan text-deep-space hover:bg-electric-cyan/90 flex w-full items-center justify-center gap-2 rounded-lg py-4 font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="border-deep-space/30 border-t-deep-space h-5 w-5 animate-spin rounded-full border-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact info - 2 columns */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] font-bold">
              Prefer Email?
            </h3>

            <div className="space-y-4">
              <p className="text-electric-cyan hover:text-electric-cyan/80 flex items-center gap-3 transition-colors">
                <Mail className="h-5 w-5" />
                <span>{contactInfo.partnerEmail}</span>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(contactInfo.partnerEmail)
                  }
                  className="text-electric-cyan hover:text-electric-cyan/80 ml-auto transition-colors"
                  title="Copy email to clipboard"
                >
                  <Clipboard className="h-4 w-4" />
                </button>
              </p>

              <p className="text-subtle-gray text-sm">
                Feel free to reach out directly if you prefer. We&apos;ll
                respond within a few days.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
