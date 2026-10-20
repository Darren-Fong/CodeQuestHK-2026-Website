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
    "Sponsor or partner with TyphoonHacks 2027, a two-day security event for Hong Kong students.",
};

const faq = [
  {
    q: "What do partners actually provide?",
    a: "Venue space, mentorship, prizes, equipment, or a problem statement for teams to work on. Cash is useful, but it is not the only thing we need.",
  },
  {
    q: "How much involvement is expected?",
    a: "As much as you want. Some partners send one mentor for an afternoon. Others set a challenge and sit on the judging panel.",
  },
  {
    q: "When do you need an answer?",
    a: "Before January 2027, so we can print materials and brief teams. Talk to us earlier if you want a say in the problem statement.",
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
          subtitle="Two days, six systems, and a room of students who can take them apart. We are looking for sponsors, mentors and problem statements."
        />

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
            {[
              ["Meet the next hires", "You spend two days with students who can actually build and explain their work. That is a better signal than a CV."],
              ["A problem, not a logo", "Your challenge gets worked on, then analysed and presented to judges. Your brand is attached to the work."],
              ["Small event, real access", "No exhibition hall. Partners talk to teams directly, and judges see every presentation."],
            ].map(([title, body]) => (
              <div key={title}>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold">{title}</h2>
                <p className="mt-3 leading-relaxed text-storm-white/60">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">Ways to help</h2>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {[
                "Venue space for two days",
                "Mentors for an afternoon",
                "Prizes, in cash or in kind",
                "Equipment and internet",
                "A problem statement for teams",
                "Judges for the final presentations",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-storm-white/10 py-3 text-storm-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">How it works</h2>
            <ol className="mt-6 space-y-5">
              {[
                ["You share a challenge", "A real problem from your organisation, scoped so students can make progress in two days."],
                ["Teams build and analyse", "They work on the problem, then present what they built and what they found."],
                ["You review and connect", "You sit on the panel, give feedback, and meet the teams you want to stay in touch with."],
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
