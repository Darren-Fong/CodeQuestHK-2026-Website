import { NextResponse } from "next/server";
import { getSession } from "@/app/lib/auth";
import { readState, writeState, teamAccounts } from "@/app/lib/store";

async function requireAdmin() {
  const session = await getSession();
  if (!session || session.role !== "admin") return null;
  return session;
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ ok: false, message: "Admin only." }, { status: 403 });
  }
  const state = readState();
  return NextResponse.json({
    ok: true,
    competitionOpen: state.competitionOpen,
    submissions: state.submissions.slice(-100).reverse(),
    teams: teamAccounts().map((t) => t.username),
  });
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ ok: false, message: "Admin only." }, { status: 403 });
  }
  let body: { competitionOpen?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  const state = readState();
  if (typeof body.competitionOpen === "boolean") {
    state.competitionOpen = body.competitionOpen;
  }
  writeState(state);
  return NextResponse.json({ ok: true, competitionOpen: state.competitionOpen });
}
