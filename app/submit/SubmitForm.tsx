"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

type Result = { ok: boolean; message: string } | null;

export default function SubmitForm() {
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
        body: JSON.stringify({ flag }),
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
    <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-6">
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
  );
}
