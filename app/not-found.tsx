"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <ParticleBackground />
      <main className="relative flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-center"
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-[120px] leading-none font-bold md:text-[180px]"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold md:text-3xl"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-subtle-gray mx-auto mb-8 max-w-md text-lg"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/"
              className="bg-electric-cyan text-deep-space hover:bg-opacity-90 inline-block rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
