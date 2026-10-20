import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Camera, ShieldCheck, Terminal, Users } from "lucide-react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TyphoonHacks 2027",
  description:
    "TyphoonHacks 2027: capture the flag, then analyse the system. A two-part security event for Hong Kong students.",
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

const format = [
  {
    icon: Terminal,
    title: "Part 1: Break in",
    body: "Teams receive live systems built for the event. Three chained flags per system, each stage unlocking the next. Real vulnerabilities, real payloads.",
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
              <Link href="/submit" className="group inline-flex items-center gap-2 rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110">
                Submit a flag
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/2026" className="inline-flex items-center gap-2 rounded-lg border border-storm-white/20 px-6 py-3 font-semibold text-storm-white/80 transition hover:border-electric-cyan/50">
                Look back at 2026
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-storm-white/50">
              <Calendar className="h-4 w-4" />
              Dates and venue announced soon
            </div>
          </div>
        </section>

        <section id="gallery" className="border-t border-storm-white/10 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-electric-cyan" />
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
                2026, in photos
              </h2>
            </div>
            <p className="mt-2 max-w-2xl text-storm-white/60">
              Last year's hackathon, before the format changed. Teams arrived with nothing
              prepared and left with working prototypes.
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
                    alt={"TyphoonHacks 2026 photo " + (i + 1)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
              ))}
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
                <div key={item.title} className="rounded-xl border border-storm-white/10 bg-ocean-depth/60 p-6">
                  <item.icon className="h-6 w-6 text-electric-cyan" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-storm-white/60">{item.body}</p>
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
                <div key={s.name} className="flex items-start justify-between gap-4 rounded-lg border border-storm-white/10 bg-ocean-depth/40 px-5 py-4">
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
              Submission opens when the competition starts. Team accounts work now.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/login" className="rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110">
                Sign in
              </Link>
              <Link href="/2025" className="rounded-lg border border-storm-white/20 px-6 py-3 font-semibold text-storm-white/80 transition hover:border-electric-cyan/50">
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
