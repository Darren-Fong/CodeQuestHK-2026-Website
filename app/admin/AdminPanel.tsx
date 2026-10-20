"use client";

import { useState } from "react";

type Submission = { team: string; flag: string; ok: boolean; at: string };

export default function AdminPanel({
  initialOpen,
  initialSubmissions,
  teams,
}: {
  initialOpen: boolean;
  initialSubmissions: Submission[];
  teams: string[];
}) {
  const [open, setOpen] = useState(initialOpen);
  const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function refresh() {
    const res = await fetch("/api/admin", { cache: "no-store" });
    const data = await res.json();
    if (res.ok && data.ok) {
      setOpen(data.competitionOpen);
      setSubmissions(data.submissions);
    }
  }

  async function toggle() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ competitionOpen: !open }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.message ?? "Could not update.");
        return;
      }
      setOpen(data.competitionOpen);
      await refresh();
    } catch {
      setError("Network error.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-storm-white/40">Flag submission</p>
          <p className={"mt-2 text-2xl font-semibold " + (open ? "text-success-teal" : "text-warning-amber")}>
            {open ? "OPEN" : "CLOSED"}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={toggle}
            disabled={busy}
            className="rounded-lg bg-electric-cyan px-5 py-2.5 text-sm font-semibold text-deep-space transition hover:brightness-110 disabled:opacity-60"
          >
            {busy ? "Working…" : open ? "Close submission" : "Open submission"}
          </button>
          <button
            onClick={refresh}
            className="rounded-lg border border-storm-white/20 px-5 py-2.5 text-sm font-semibold text-storm-white/80 transition hover:border-electric-cyan/50"
          >
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-6">
        <h2 className="text-lg font-semibold">Teams ({teams.length})</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {teams.map((t) => (
            <span key={t} className="rounded-full border border-storm-white/15 px-3 py-1 text-xs text-storm-white/70">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-6">
        <h2 className="text-lg font-semibold">Recent submissions</h2>
        {submissions.length === 0 ? (
          <p className="mt-3 text-sm text-storm-white/50">No submissions yet.</p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-widest text-storm-white/40">
                <tr>
                  <th className="py-2 pr-4">Time</th>
                  <th className="py-2 pr-4">Team</th>
                  <th className="py-2 pr-4">Flag</th>
                  <th className="py-2">Result</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s, i) => (
                  <tr key={i} className="border-t border-storm-white/10">
                    <td className="py-2 pr-4 text-storm-white/60">{new Date(s.at).toLocaleString()}</td>
                    <td className="py-2 pr-4">{s.team}</td>
                    <td className="py-2 pr-4 font-[family-name:var(--font-jetbrains-mono)] text-xs text-storm-white/70">{s.flag}</td>
                    <td className={"py-2 font-medium " + (s.ok ? "text-success-teal" : "text-red-300")}>
                      {s.ok ? "accepted" : "rejected"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
