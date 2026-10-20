import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Clock, Code, Trophy, Users } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "CodeQuestHK 2025 | TyphoonHacks Archive",
  description:
    "CodeQuestHK 2025: the first TyphoonHacks game jam. 72 participants, 18 teams, 12 hours, 8 finished projects.",
};

const stats = [
  { value: "72", label: "Participants", icon: Users },
  { value: "18", label: "Teams", icon: Trophy },
  { value: "12", label: "Hours", icon: Clock },
  { value: "8", label: "Projects shipped", icon: Code },
];

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
  "10p2aoVp_Gzgx35WsEd5L6-7Fezvi7G_z",
  "1B1xlaMBhHrcTgkYaNihYNbllLIDSVt8U",
  "1U5YcB1HEy2Xwp4CIOlZMeKLgl2argHiC",
  "11ePd3yTlxEsJflwhLaTgo6abB7boL3ka",
  "1BNrrwSXZGWlnRMdjXpkif9ChTY9xkVgv",
  "1hENXLrT_Eo_KveiKRqyiTIn80hTPrJ1z",
];

function thumb(id: string, size = 1600) {
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + size;
}

export default function Archive2025() {
  return (
    <>
      <Navigation />
      <main className="bg-deep-space text-storm-white">
        <section className="relative overflow-hidden px-4 pt-32 pb-20">
          <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-electric-cyan/15 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-storm-white/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-storm-white/60 uppercase">
              Archive · 2025
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold tracking-tight sm:text-6xl">
              CodeQuestHK <span className="text-electric-cyan">2025</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-storm-white/70">
              The first TyphoonHacks game jam. One room, twelve hours, eighteen teams,
              and the event that set the tone for everything after it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/2026" className="inline-flex items-center gap-2 rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110">
                See the 2026 edition
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-storm-white/20 px-6 py-3 font-semibold text-storm-white/80 transition hover:border-electric-cyan/50">
                TyphoonHacks 2027
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-14">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-5 text-center">
                <s.icon className="mx-auto h-5 w-5 text-electric-cyan" />
                <p className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-storm-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
              What happened
            </h2>
            <div className="mt-4 space-y-4 text-storm-white/65">
              <p>
                Teams arrived with nothing prepared. Twelve hours later they had prototypes:
                browser games, small tools, and a few ideas that clearly wanted to become
                something larger. Judges scored working demos, not slide decks.
              </p>
              <p>
                2025 is where the format we still use was tested: build from scratch, no
                pre-prepared projects, defend what you made. It worked well enough that the
                team ran it again, then turned it into a security event.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-electric-cyan" />
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
                Photos
              </h2>
            </div>
            <p className="mt-2 text-sm text-storm-white/50">
              From the organising team's album.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((id, i) => (
                <a
                  key={id}
                  href={thumb(id, 2000)}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-storm-white/10 bg-ocean-depth"
                >
                  <img
                    src={thumb(id, 900)}
                    alt={"CodeQuestHK 2025 photo " + (i + 1)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-storm-white/10 px-4 py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-electric-cyan/25 bg-electric-cyan/5 p-8">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
              Where it went next
            </h2>
            <p className="mt-3 text-storm-white/65">
              2026 kept the hackathon format and grew it. 2027 changes the shape entirely:
              capture the flag, then analyse the system you broke.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/2026" className="rounded-lg border border-storm-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-electric-cyan/50">
                2026 archive
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
