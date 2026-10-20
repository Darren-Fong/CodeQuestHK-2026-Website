import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "CodeQuestHK 2025 | TyphoonHacks",
  description:
    "CodeQuestHK 2025. 72 students, 18 teams, 12 hours, eight finished games. The first event the TyphoonHacks team ran.",
};

const rules = [
  "No pre-prepared projects. You start from nothing.",
  "AI is allowed for coding help only, not for the design or the pitch.",
  "Anything NSFW, violent or discriminatory gets the team disqualified.",
  "The organising team has the final say on disqualifications.",
];

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="bg-deep-space text-storm-white">
        <section className="px-4 pt-32 pb-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-storm-white/50">2025 archive</p>
            <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl">
              CodeQuestHK 2025
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-storm-white/70">
              The first event we ran. 72 students, 18 teams, 12 hours, and eight games
              that actually worked by the end of it.
            </p>
            <p className="mt-4 leading-relaxed text-storm-white/60">
              Teams came from St. Paul's Co-educational College, Diocesan Girls' School,
              La Salle College and Chinese International School. Starlight Express took
              first place.
            </p>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-14">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["72", "students"],
              ["18", "teams"],
              ["12", "hours"],
              ["8", "games shipped"],
            ].map(([n, label]) => (
              <div key={label}>
                <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">{n}</p>
                <p className="mt-1 text-sm text-storm-white/50">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">The rules</h2>
            <ul className="mt-5 space-y-3">
              {rules.map((r) => (
                <li key={r} className="flex gap-3 text-storm-white/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-cyan" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">How judging worked</h2>
            <p className="mt-4 leading-relaxed text-storm-white/65">
              Implementation counted for 30% and delivery for 10%. Judges scored how well
              the game ran, how the team explained it, and how they worked together during
              the pitch.
            </p>
            <p className="mt-3 leading-relaxed text-storm-white/65">
              Each team got six minutes to present and two minutes of questions. Judges could
              play the game themselves. You introduced yourself by the preferred name you
              registered with, so nobody had to guess.
            </p>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-storm-white/60">
              The next year kept the hackathon format and grew it. 2027 changes it again.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/2026" className="inline-flex items-center gap-2 rounded-lg border border-storm-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-electric-cyan/50">
                See 2026
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/" className="rounded-lg bg-electric-cyan px-5 py-2.5 text-sm font-semibold text-deep-space transition hover:brightness-110">
                TyphoonHacks 2027
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
