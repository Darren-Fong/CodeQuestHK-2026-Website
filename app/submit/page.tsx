"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

type Result = { ok: boolean; message: string } | null;

export default function SubmitPage() {
  const [team, setTeam] = useState("");
  const [flag, setFlag] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ team, flag }),
      });
      const data = await res.json();
      setResult({ ok: Boolean(data.ok), message: data.message ?? "Unexpected response." });
    } catch {
      setResult({ ok: false, message: "Network error. Try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-deep-space px-4 pt-32 pb-20 text-storm-white">
        <div className="mx-auto max-w-xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-storm-white/50 transition hover:text-electric-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to TyphoonHacks 2027
          </Link>

          <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
            Flag submission
          </h1>
          <p className="mt-3 text-storm-white/60">
            One flag per submission. Flags are case-sensitive and include the braces.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 space-y-5 rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-6"
          >
            <div>
              <label htmlFor="team" className="block text-sm font-medium text-storm-white/70">
                Team name
              </label>
              <input
                id="team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-storm-white/15 bg-deep-space px-4 py-3 text-sm outline-none focus:border-electric-cyan"
                placeholder="e.g. Null Pointer"
              />
            </div>

            <div>
              <label htmlFor="flag" className="block text-sm font-medium text-storm-white/70">
                Flag
              </label>
              <input
                id="flag"
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                required
                spellCheck={false}
                className="mt-2 w-full rounded-lg border border-storm-white/15 bg-deep-space px-4 py-3 font-[family-name:var(--font-jetbrains-mono)] text-sm outline-none focus:border-electric-cyan"
                placeholder="TH{...}"
              />
            </div>

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110 disabled:opacity-60"
            >
              {busy ? "Checking…" : "Submit flag"}
            </button>

            {result && (
              <div
                className={
                  "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm " +
                  (result.ok
                    ? "border-success-teal/40 bg-success-teal/10 text-success-teal"
                    : "border-red-500/40 bg-red-500/10 text-red-300")
                }
              >
                {result.ok ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{result.message}</span>
              </div>
            )}
          </form>

          <p className="mt-6 text-xs text-storm-white/40">
            Submissions are validated on the server. If the page says it is not configured,
            the organiser has not set the flag list for this deployment yet.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
