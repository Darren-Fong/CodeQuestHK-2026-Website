import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero2027 from "./components/home/Hero2027";
import Faq from "./components/home/Faq";
import Marquee from "./components/home/Marquee";
import CountUp from "./components/home/CountUp";
import ScrollAnimations from "./components/ScrollAnimations";

export const metadata: Metadata = {
  title: "TyphoonHacks 2027",
  description:
    "TyphoonHacks 2027. Six systems, two days. Break in, then write up what you found.",
};

const PHOTO = {
  workingThree: "1aCFW_Ia3LZDmxqTAnf7SbGsh3yiHKr_f",
  workingWide: "1CEiodYvLnPFkSlZgJe6JUwT0IyNLlBKz",
  speaking: "1S0vn8xUegzgEz9NRuFC4UNWWoTPB7-N3",
  calling: "1HX0g0WhSvyNJCmpdj_ENeKflA5PMbc9A",
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
        <Marquee />

        <section id="details" className="px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5 md:items-center">
            <div className="md:col-span-3">
              <p className="text-xs tracking-widest text-electric-cyan uppercase">The event</p>
              <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
                Break in. Write it up.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-storm-white/65">
                Six systems built for the event. Flags get you in. The report gets you marks.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  [6, "systems"],
                  [3, "flags each"],
                  [2, "days"],
                  [5, "max per team"],
                ].map(([n, l]) => (
                  <div key={l as string}>
                    <dt className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-electric-cyan">
                      <CountUp to={n as number} />
                    </dt>
                    <dd className="mt-1 text-sm text-storm-white/50">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="md:col-span-2 overflow-hidden rounded-lg">
              <img
                src={img(PHOTO.workingThree, 1000)}
                alt="Three students working on laptops at TyphoonHacks, Day 2"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </figure>
          </div>
        </section>

        <figure className="relative overflow-hidden">
          <img
            src={img(PHOTO.workingWide, 1800)}
            alt="Teams at their desks during Day 2 of TyphoonHacks"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-[44vh] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-[58vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/20 to-transparent" />
          <figcaption className="absolute bottom-6 left-6 right-6 mx-auto max-w-6xl text-sm text-storm-white/80">
            Day 2. Teams at the desks, laptops open.
          </figcaption>
        </figure>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
              Before the hacking
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-storm-white/60">
              Day one opens with an icebreaker. Three minutes per pair, then introduce your
              partner to the room.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-lg">
                <img
                  src={img(PHOTO.speaking, 1200)}
                  alt="A student introducing their partner at the 2026 icebreaker"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                />
                <figcaption className="mt-3 text-xs text-storm-white/40">
                  Introducing a partner, 2026.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-lg">
                <img
                  src={img(PHOTO.calling, 1200)}
                  alt="A student calling the next pair up at the 2026 icebreaker"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                />
                <figcaption className="mt-3 text-xs text-storm-white/40">
                  Calling the next pair up, 2026.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
              How it runs
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                ["Day one", "Break in", "Three flags per system. Each one unlocks the next."],
                ["Day one and two", "Write it up", "Clear the flags and the source unlocks."],
                ["Day two", "Present", "Eight minutes, four minutes of questions."],
              ].map(([when, title, body]) => (
                <div key={title} className="border-t border-storm-white/15 pt-4">
                  <p className="text-xs tracking-widest text-storm-white/40 uppercase">{when}</p>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-storm-white/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">The systems</h2>
            <ul className="mt-6 divide-y divide-storm-white/10 border-y border-storm-white/10">
              {[
                ["Resident alerting and access", "web, JWT, SSRF"] ,
                ["Internal tooling", "auth, IDOR, logs"],
                ["Operations backend", "queues, templates"],
                ["Field devices", "signatures, replay"],
                ["Two more", "announced later"],
              ].map(([name, tag]) => (
                <li key={name} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                  <span className="font-medium">{name}</span>
                  <span className="text-xs text-storm-white/45">{tag}</span>
                </li>
              ))}
            </ul>
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
                ["Teams", "3 to 5 people"],
                ["Cost", "HKD 20 per team"],
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
              <p className="mt-2 text-storm-white/60">Sign in to check your team.</p>
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
