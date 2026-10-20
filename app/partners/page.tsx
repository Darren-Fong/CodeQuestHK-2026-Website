import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import ScrollAnimations from "../components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Partner With Us | TyphoonHacks 2027",
  description:
    "Support TyphoonHacks 2027 with funding, mentorship, internships or a venue. Schools can co-organise.",
};

const faq = [
  {
    q: "What do you need most?",
    a: "Money for prizes, food and the venue deposit. After that, mentors for an afternoon, internship places for the strongest teams, and a room for two days.",
  },
  {
    q: "How involved do we have to be?",
    a: "As much as you want. One mentor for an afternoon is useful. So is a single internship place. You do not need to run a workshop or sit on the panel unless you want to.",
  },
  {
    q: "When do you need to decide?",
    a: "Before January 2027, so we can confirm the venue and print materials. Later is possible, but the options get narrower.",
  },
];

const asks = [
  {
    title: "Monetary support",
    body: "Funding for prizes, food, and the venue deposit. Any amount helps, and we will tell you exactly what it covered.",
  },
  {
    title: "Mentorship",
    body: "Send one or two engineers for an afternoon. Teams get stuck on a single problem for hours. A mentor unsticks them in ten minutes.",
  },
  {
    title: "Internships",
    body: "Offer a place to a team that impresses you. We introduce you after judging and stay out of the way.",
  },
  {
    title: "Venue",
    body: "A room for 60 to 80 people across two days, with power, internet, and space for teams to spread out.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navigation />
      <main className="bg-deep-space text-storm-white">
        <ScrollAnimations />
        <PageHero
          badge="Partners"
          title="Partner with TyphoonHacks 2027"
          subtitle="We are looking for funding, mentors, internships and a venue. Schools can co-organise or send a team."
        />

        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">What we need</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {asks.map((item) => (
                <div key={item.title} className="border-t border-storm-white/15 pt-5">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-storm-white/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">For schools</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-storm-white/60">
              If you run a computer science or ICT department, there are three ways to work with us.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                ["Co-organise", "Help with the venue, judges, or reaching students in your school. We will credit the school on the site and at the event."],
                ["Send a team", "Enter one or more teams of 3 to 5. We can run a short briefing at your school beforehand if that helps."],
                ["Host a workshop", "Give us an afternoon with your students. We will teach the basics of a CTF and how the two days run."],
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-storm-white/60">{body}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-block rounded-lg border border-electric-cyan/50 px-5 py-2.5 text-sm font-semibold transition hover:bg-electric-cyan/10">
              Talk to us about co-organising
            </Link>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">How it works</h2>
            <ol className="mt-6 space-y-5">
              {[
                ["You pick what to give", "Money, a mentor, an internship, or the room. One is enough."],
                ["Teams work for two days", "They break into the systems, then write up what they found."],
                ["You meet the teams", "Come to the presentations, or we introduce you afterwards."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-electric-cyan">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="mt-1 leading-relaxed text-storm-white/60">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">Partner questions</h2>
            <div className="mt-6">
              <Accordion items={faq} />
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">Talk to us</h2>
              <p className="mt-2 text-storm-white/60">Tell us what you can offer and we will find a fit.</p>
            </div>
            <Link href="/contact" className="rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
