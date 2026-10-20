"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, LogIn } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.message ?? "Sign in failed.");
        return;
      }
      router.push(data.redirect ?? "/dashboard");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-deep-space px-4 pt-32 pb-20 text-storm-white">
        <div className="mx-auto max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-storm-white/50 transition hover:text-electric-cyan">
            <ArrowLeft className="h-4 w-4" />
            Back to TyphoonHacks 2027
          </Link>

          <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
            Sign in
          </h1>
          <p className="mt-3 text-storm-white/60">
            Team accounts are issued by the organisers. Admins use the same form.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-xl border border-storm-white/10 bg-ocean-depth/50 p-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-storm-white/70">Username</label>
              <input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="mt-2 w-full rounded-lg border border-storm-white/15 bg-deep-space px-4 py-3 text-sm outline-none focus:border-electric-cyan"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-storm-white/70">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="mt-2 w-full rounded-lg border border-storm-white/15 bg-deep-space px-4 py-3 text-sm outline-none focus:border-electric-cyan"
              />
            </div>

            <button
              type="submit"
              disabled={busy}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-electric-cyan px-6 py-3 font-semibold text-deep-space transition hover:brightness-110 disabled:opacity-60"
            >
              <LogIn className="h-4 w-4" />
              {busy ? "Signing in…" : "Sign in"}
            </button>

            {error && (
              <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
