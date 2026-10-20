import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero2027 from "./components/home/Hero2027";
import Faq from "./components/home/Faq";
import ScrollAnimations from "./components/ScrollAnimations";

export const metadata: Metadata = {
  title: "TyphoonHacks 2027",
  description:
    "TyphoonHacks 2027. Six systems, two days. Break in, then write up what you found.",
};

const PHOTO = {
  briefing: "1LDwgO_Ko1KXbreXpxGVNDmxyM8rxK-Ac",
  pitching: "1T2jyERPSHIURWMqYlAf83NuGINYQ3FXv",
  podium: "1S0vn8xUegzgEz9NRuFC4UNWWoTPB7-N3",
  demo: "1HX0g0WhSvyNJCmpdj_ENeKflA5PMbc9A",
};

function img(id: string, size: number) {
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + size;
}

export default function Home2027() {
  return (
    <>
      <Navigation />
      <main className="bg-deep-space text-storm-white">
        <ScrollAnimations />
        <Hero2027 />

        <section id="details" className="px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5 md:items-center">
            <div className="md:col-span-3">
              <p className="text-xs tracking-widest text-electric-cyan uppercase">The event</p>
              <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
                Two days, six systems, one report
              </h2>
              <p className="mt-5 leading-relaxed text-storm-white/65">
                We build six web systems for the event. Each one has a flaw worth finding
                and a business behind it that would care. You get two days to break in and
                write it up.
              </p>
              <p className="mt-3 leading-relaxed text-storm-white/65">
                The flags get you through the door. The analysis is what judges spend most
                of their time on.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  ["6", "systems"],
                  ["3", "flags each"],
                  ["2", "days"],
                  ["4", "max per team"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">{n}</dt>
                    <dd className="mt-1 text-sm text-storm-white/50">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="md:col-span-2">
              <img
                src={img(PHOTO.briefing, 1000)}
                alt="Students waiting for the briefing at CityU, 2026"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="aspect-[4/5] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-3 text-xs text-storm-white/40">
                Waiting for the briefing, CityU, 2026.
              </figcaption>
            </figure>
          </div>
        </section>

        <figure className="relative">
          <img
            src={img(PHOTO.pitching, 1800)}
            alt="Teams lined up at the front of the CMA Theatre, 2026"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-[46vh] w-full object-cover md:h-[60vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/20 to-transparent" />
          <figcaption className="absolute bottom-6 left-6 right-6 mx-auto max-w-6xl text-sm text-storm-white/80">
            Pitch timer at three minutes. CityU CMA Theatre, 2026.
          </figcaption>
        </figure>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
              How the two days run
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-widest text-storm-white/40 uppercase">Day one</p>
                  <h3 className="mt-2 text-lg font-semibold">Break in</h3>
                  <p className="mt-2 leading-relaxed text-storm-white/65">
                    You get access to the systems at the briefing. Start with the first flag
                    on any system. It is recon, and it is meant to be the easy one. Each flag
                    you find unlocks the next.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-storm-white/40 uppercase">Day one and two</p>
                  <h3 className="mt-2 text-lg font-semibold">Write it up</h3>
                  <p className="mt-2 leading-relaxed text-storm-white/65">
                    Clear all three flags and the source unlocks. Then the real work starts:
                    what was wrong, what it would cost the company, and what to fix first
                    with a fixed budget.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-storm-white/40 uppercase">Day two</p>
                  <h3 className="mt-2 text-lg font-semibold">Present</h3>
                  <p className="mt-2 leading-relaxed text-storm-white/65">
                    Eight minutes, then four minutes of questions. Bring the evidence. A
                    summary of your afternoon is not a finding.
                  </p>
                </div>
              </div>
              <figure>
                <img
                  src={img(PHOTO.podium, 1200)}
                  alt="A team presenting at the podium, 2026"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-3 text-xs text-storm-white/40">
                  Presenting at the podium, 2026. Every team got six minutes and two for questions.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-5 md:items-center">
              <figure className="md:col-span-2">
                <img
                  src={img(PHOTO.demo, 1000)}
                  alt="A demo running on the projector, 2026"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="aspect-square w-full rounded-lg object-cover"
                />
                <figcaption className="mt-3 text-xs text-storm-white/40">
                  A demo on the projector, 2026.
                </figcaption>
              </figure>
              <div className="md:col-span-3">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">The systems</h2>
                <p className="mt-3 text-storm-white/60">
                  Six domains, so the analysis work is not the same six times over.
                </p>
                <ul className="mt-6 divide-y divide-storm-white/10 border-y border-storm-white/10">
                  {[
                    ["Resident alerting and access", "web, JWT, SSRF, messaging"],
                    ["Internal tooling", "auth, IDOR, log forensics"],
                    ["Operations backend", "queues, templates, secrets"],
                    ["Field devices", "protocols, signatures, replay"],
                    ["Two more", "announced closer to the event"],
                  ].map(([name, tag]) => (
                    <li key={name} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                      <span className="font-medium">{name}</span>
                      <span className="text-xs text-storm-white/45">{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">Event details</h2>
            <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {[
                ["Dates", "13-14 February 2027"],
                ["Venue", "To be announced"],
                ["Format", "Two days, in person"],
                ["Teams", "2 to 4 people"],
                ["Cost", "Free"],
                ["Equipment", "Laptop and charger"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-storm-white/10 pb-3">
                  <dt className="text-storm-white/45">{k}</dt>
                  <dd className="text-right text-storm-white/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">Questions</h2>
            <Faq />
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">Accounts are open</h2>
              <p className="mt-2 text-storm-white/60">
                Sign in to check your team. Flag submission opens on the day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/login" className="rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110">
                Sign in
              </Link>
              <Link href="/2026" className="inline-flex items-center gap-2 rounded-lg border border-storm-white/20 px-6 py-3 font-semibold text-storm-white/80 transition hover:border-electric-cyan/50">
                See 2026
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
