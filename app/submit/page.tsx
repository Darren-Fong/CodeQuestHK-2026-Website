import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SubmitForm from "./SubmitForm";
import { getSession } from "../lib/auth";
import { readState } from "../lib/store";

export default async function SubmitPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const state = readState();
  const open = state.competitionOpen;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-deep-space px-4 pt-32 pb-20 text-storm-white">
        <div className="mx-auto max-w-xl">
          <Link
            href={session.role === "admin" ? "/admin" : "/dashboard"}
            className="inline-flex items-center gap-2 text-sm text-storm-white/50 transition hover:text-electric-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>

          <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
            Flag submission
          </h1>
          <p className="mt-3 text-storm-white/60">
            Signed in as <span className="text-storm-white">{session.sub}</span>.
            One flag per submission, case-sensitive, braces included.
          </p>

          {open ? (
            <SubmitForm />
          ) : (
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-warning-amber/40 bg-warning-amber/10 p-6 text-warning-amber">
              <Lock className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold">Submission is closed</p>
                <p className="mt-1 text-sm text-storm-white/60">
                  It opens when the competition starts. Your account works now, so you can
                  sign in and check in later without re-registering.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
