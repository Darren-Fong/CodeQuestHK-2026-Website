"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { linksConfig, contactInfo } from "@/app/config/links";

const tiers = [
  { value: "platinum", label: "Platinum (HK$50,000+)" },
  { value: "gold", label: "Gold (HK$30,000)" },
  { value: "silver", label: "Silver (HK$15,000)" },
  { value: "bronze", label: "Bronze (HK$5,000)" },
  { value: "custom", label: "Custom / In-Kind" },
  { value: "undecided", label: "Not sure yet" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    tier: "",
    message: "",
    problemStatement: false,
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
          Partner Inquiry
        </motion.h2>
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
                We&apos;ve received your inquiry and will get back to you within
                2 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass space-y-6 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Company Name */}
                <div>
                  <label className="text-storm-white mb-2 block text-sm font-medium">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                    placeholder="Your company"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="text-storm-white mb-2 block text-sm font-medium">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactPerson: e.target.value,
                      })
                    }
                    className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

                {/* Phone */}
                <div>
                  <label className="text-storm-white mb-2 block text-sm font-medium">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                    placeholder="+852 XXXX XXXX"
                  />
                </div>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="text-storm-white mb-2 block text-sm font-medium">
                  Interested Tier *
                </label>
                <select
                  required
                  value={formData.tier}
                  onChange={(e) =>
                    setFormData({ ...formData, tier: e.target.value })
                  }
                  className="bg-ocean-depth border-subtle-gray/30 text-storm-white focus:border-electric-cyan w-full cursor-pointer appearance-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                >
                  <option value="" disabled>
                    Select a tier
                  </option>
                  {tiers.map((tier) => (
                    <option key={tier.value} value={tier.value}>
                      {tier.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-storm-white mb-2 block text-sm font-medium">
                  Message / Questions
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="Tell us about your goals or any questions you have..."
                />
              </div>

              {/* Problem Statement Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="problemStatement"
                  checked={formData.problemStatement}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      problemStatement: e.target.checked,
                    })
                  }
                  className="border-subtle-gray/30 bg-ocean-depth text-electric-cyan focus:ring-electric-cyan mt-1 h-5 w-5 rounded"
                />
                <label
                  htmlFor="problemStatement"
                  className="text-subtle-gray text-sm"
                >
                  I&apos;m interested in submitting a problem statement for
                  teams to solve
                </label>
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
                    Send Inquiry
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
              Direct Contact
            </h3>

            <div className="space-y-4">
              <a
                href={linksConfig.contact.partners}
                className="text-subtle-gray hover:text-electric-cyan flex items-center gap-3 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{contactInfo.partnerEmail}</span>
              </a>

              {/* <a
                href={linksConfig.contact.phone}
                className="text-subtle-gray hover:text-electric-cyan flex items-center gap-3 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>{contactInfo.phone}</span>
              </a> */}

              <div className="text-subtle-gray flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>
                  Central, Hong Kong
                  <br />
                  (Event venue TBA)
                </span>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] font-bold">
              Response Time
            </h3>

            <div className="text-subtle-gray flex items-center gap-3">
              <Clock className="text-success-teal h-5 w-5" />
              <span>We typically respond within 2 business days</span>
            </div>
          </div>

          <div className="glass border-warning-amber rounded-xl border-l-4 p-6">
            <h3 className="text-storm-white mb-2 font-[family-name:var(--font-space-grotesk)] font-bold">
              Limited Spots Available
            </h3>
            <p className="text-subtle-gray text-sm">
              We have limited sponsorship slots to ensure each partner receives
              meaningful engagement. Early partners get priority placement and
              benefits.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
