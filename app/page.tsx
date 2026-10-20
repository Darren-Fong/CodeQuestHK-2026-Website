import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, ShieldCheck, Terminal, Users } from "lucide-react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TyphoonHacks 2027",
  description:
    "TyphoonHacks 2027: capture the flag, then analyse the system. A two-part security event for Hong Kong students.",
};

const format = [
  {
    icon: Terminal,
    title: "Part 1: Break in",
    body: "Teams receive a set of live systems built for the event. Three chained flags per system, each stage unlocking the next. No guessing, no trivia: real vulnerabilities, real payloads.",
  },
  {
    icon: ShieldCheck,
    title: "Part 2: Analyse",
    body: "Once the flags are found, the source unlocks. Teams write a board-level security assessment: root cause, business impact, and a remediation roadmap under a fixed budget.",
  },
  {
    icon: Users,
    title: "Part 3: Present",
    body: "Eight minutes in front of judges, four minutes of questions. The winning team is not the one that broke in fastest, but the one that understood what it broke.",
  },
];

const systems = [
  { name: "Resident alerting and access", tag: "Web, JWT, SSRF, messaging" },
  { name: "Internal tooling", tag: "Auth, IDOR, log forensics" },
  { name: "Operations backend", tag: "Queues, templates, secrets" },
  { name: "Field devices", tag: "Protocols, signatures, replay" },
];

export default function Home2027() {
  return (
    <>
      <Navigation />
      <main className="bg-deep-space text-storm-white">
        <section className="relative overflow-hidden px-4 pt-32 pb-24">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-electric-cyan/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-warning-amber/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-electric-cyan uppercase">
              2027 edition
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold tracking-tight sm:text-6xl">
              TyphoonHacks <span className="text-electric-cyan">2027</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-storm-white/70">
              Break the system. Then explain how you broke it. Capture the flag meets
              cybersecurity analysis, built around systems that behave like the real thing.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/submit"
                className="group inline-flex items-center gap-2 rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110"
              >
                Submit a flag
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/2026"
                className="inline-flex items-center gap-2 rounded-lg border border-storm-white/20 px-6 py-3 font-semibold text-storm-white/80 transition hover:border-electric-cyan/50 hover:text-storm-white"
              >
                Look back at 2026
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-storm-white/50">
              <Calendar className="h-4 w-4" />
              Dates and venue announced soon
            </div>
          </div>
        </section>

        <section id="format" className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
              A different shape of event
            </h2>
            <p className="mt-3 max-w-2xl text-storm-white/60">
              Most hackathons end when the demo works. This one starts there.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {format.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-storm-white/10 bg-ocean-depth/60 p-6"
                >
                  <item.icon className="h-6 w-6 text-electric-cyan" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-storm-white/60">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
              What you will be attacking
            </h2>
            <p className="mt-3 max-w-2xl text-storm-white/60">
              Six to seven systems, each a different domain. Every one runs as a real
              application. Nothing here is a slide.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {systems.map((s) => (
                <div
                  key={s.name}
                  className="flex items-start justify-between gap-4 rounded-lg border border-storm-white/10 bg-ocean-depth/40 px-5 py-4"
                >
                  <span className="font-medium">{s.name}</span>
                  <span className="text-right text-xs text-storm-white/45">{s.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-electric-cyan/25 bg-electric-cyan/5 p-10 text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
              Ready to break something?
            </h2>
            <p className="mt-3 text-storm-white/65">
              Flag submission is open. One flag per entry, case-sensitive.
            </p>
            <Link
              href="/submit"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110"
            >
              Open the submission page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
