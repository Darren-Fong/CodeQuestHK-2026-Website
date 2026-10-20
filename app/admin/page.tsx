import { redirect } from "next/navigation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AdminPanel from "./AdminPanel";
import { getSession } from "../lib/auth";
import { readState, teamAccounts } from "../lib/store";

export default async function AdminPage() {
  const session = await getSession();
  if (!session || session.role !== "admin") redirect("/login");

  const state = readState();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-deep-space px-4 pt-32 pb-20 text-storm-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-storm-white/50">Admin</p>
          <h1 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
            Competition control
          </h1>

          <AdminPanel
            initialOpen={state.competitionOpen}
            initialSubmissions={state.submissions.slice(-50).reverse()}
            teams={teamAccounts().map((t) => t.username)}
          />

          <form action="/api/auth/logout" method="post" className="mt-8">
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
