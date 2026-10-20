import { redirect } from "next/navigation";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { getSession } from "../lib/auth";
import { readState } from "../lib/store";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role === "admin") redirect("/admin");

  const state = readState();
  const mine = state.submissions.filter((s) => s.team === session.sub);
  const accepted = mine.filter((s) => s.ok).length;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-deep-space px-4 pt-32 pb-20 text-storm-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-storm-white/50">Team dashboard</p>
          <h1 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
            {session.sub}
          </h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-5">
              <p className="text-xs uppercase tracking-widest text-storm-white/40">Status</p>
              <p className="mt-2 text-lg font-semibold text-electric-cyan">
                {state.competitionOpen ? "Open" : "Closed"}
              </p>
            </div>
            <div className="rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-5">
              <p className="text-xs uppercase tracking-widest text-storm-white/40">Submissions</p>
              <p className="mt-2 text-lg font-semibold">{mine.length}</p>
            </div>
            <div className="rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-5">
              <p className="text-xs uppercase tracking-widest text-storm-white/40">Accepted</p>
              <p className="mt-2 text-lg font-semibold text-success-teal">{accepted}</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-6">
            <h2 className="text-lg font-semibold">Flag submission</h2>
            <p className="mt-2 text-sm text-storm-white/60">
              {state.competitionOpen
                ? "The competition is live. Submit flags one at a time."
                : "Submission is closed until the competition starts. You can still sign in and check your account."}
            </p>
            <Link
              href="/submit"
              className="mt-4 inline-flex rounded-lg bg-electric-cyan px-5 py-2.5 text-sm font-semibold text-deep-space transition hover:brightness-110"
            >
              {state.competitionOpen ? "Submit a flag" : "View submission page"}
            </Link>
          </div>

          <form action="/api/auth/logout" method="post" className="mt-6">
            <button className="text-sm text-storm-white/50 transition hover:text-red-300">
              Sign out
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
