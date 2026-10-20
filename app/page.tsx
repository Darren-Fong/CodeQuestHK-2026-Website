import { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TyphoonHacks 2027",
  description:
    "TyphoonHacks 2027. Six systems, two days. Break in, then write up what you found.",
};

const photos = [
  "1LDwgO_Ko1KXbreXpxGVNDmxyM8rxK-Ac",
  "1T2jyERPSHIURWMqYlAf83NuGINYQ3FXv",
  "1S0vn8xUegzgEz9NRuFC4UNWWoTPB7-N3",
  "1YqjZ-8bi5aAWzv64tB6m7jk7rz7mqd1P",
  "1HX0g0WhSvyNJCmpdj_ENeKflA5PMbc9A",
  "1_hBeXyIeKwglMLFjPWzNFvtRyT9qx7Y3",
  "1uZQY30G1FSnQSz65x8n4ehga10monV77",
  "15HZJRmJr6ceDvd5pDDT7IxvZf9u5Tooe",
  "1xGT3xUAS7m1nrLRELOqHs9n78Ey7sSrY",
  "1tP2g3WFM6gsrV9sIiRVk4mYn9YX9I4PR",
  "11OVw8svieYzI6Zzkypakg3eTYrNaqJhW",
  "1t_leyW98oqiDE35ziTQFGgUAY9aIT6OF",
];

function thumb(id: string, size: number) {
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + size;
}

export default function Home2027() {
  return (
    <>
      <Navigation />
      <main className="bg-deep-space text-storm-white">
        <section className="px-4 pt-32 pb-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm tracking-widest text-electric-cyan uppercase">2027</p>
            <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold sm:text-6xl">
              TyphoonHacks 2027
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-storm-white/70">
              Six systems. Two days. You break into them, then write up what you found.
              The flags are the easy part. The report is what gets marked.
            </p>
            <p className="mt-3 text-storm-white/50">Dates and venue to be announced.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/login" className="rounded-lg bg-electric-cyan px-5 py-2.5 text-sm font-semibold text-deep-space transition hover:brightness-110">
                Sign in
              </Link>
              <Link href="/2026" className="rounded-lg border border-storm-white/20 px-5 py-2.5 text-sm font-semibold text-storm-white/80 transition hover:border-electric-cyan/50">
                Look at 2026
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">How it runs</h2>
            <div className="mt-8 space-y-8">
              <div>
                <p className="text-xs tracking-widest text-storm-white/40 uppercase">Day one</p>
                <h3 className="mt-2 text-lg font-semibold">The CTF</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-storm-white/65">
                  You get access to six web systems built for the event. Each has three
                  flags. The first one is recon. The second needs something you found in
                  the first. The third needs both. Nothing is solvable out of order.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-storm-white/40 uppercase">Days one and two</p>
                <h3 className="mt-2 text-lg font-semibold">The write-up</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-storm-white/65">
                  Submit all three flags and the system's source unlocks. Then you write a
                  security assessment: what was wrong, what it would cost the business, and
                  what to fix first with a fixed budget. Marks here are worth more than the flags.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-storm-white/40 uppercase">Day two</p>
                <h3 className="mt-2 text-lg font-semibold">The presentation</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-storm-white/65">
                  Eight minutes in front of judges, four minutes of questions. Bring the
                  evidence, not a summary of your afternoon.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">The systems</h2>
            <p className="mt-3 max-w-2xl text-storm-white/60">
              Each one is a different domain, so the analysis work is different too.
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
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">2026, in photos</h2>
            <p className="mt-2 text-storm-white/55">Last year, before the format changed.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((id, i) => (
                <a key={id} href={thumb(id, 2000)} target="_blank" rel="noreferrer" className="block aspect-[4/3] overflow-hidden rounded-md border border-storm-white/10 bg-ocean-depth">
                  <img
                    src={thumb(id, 900)}
                    alt={"2026 photo " + (i + 1)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">Accounts</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-storm-white/65">
              Team logins are issued before the event. You can sign in now and check your
              account. Flag submission stays closed until the competition starts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/login" className="rounded-lg bg-electric-cyan px-5 py-2.5 text-sm font-semibold text-deep-space transition hover:brightness-110">
                Sign in
              </Link>
              <Link href="/2025" className="rounded-lg border border-storm-white/20 px-5 py-2.5 text-sm font-semibold text-storm-white/80 transition hover:border-electric-cyan/50">
                2025 archive
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
