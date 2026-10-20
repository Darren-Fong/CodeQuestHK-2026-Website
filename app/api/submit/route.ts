import { NextResponse } from "next/server";
import { getSession } from "@/app/lib/auth";
import { readState, writeState } from "@/app/lib/store";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session || session.role !== "team") {
    return NextResponse.json(
      { ok: false, message: "Sign in as a team before submitting." },
      { status: 401 }
    );
  }

  const state = readState();
  if (!state.competitionOpen) {
    return NextResponse.json(
      { ok: false, message: "Submission is closed. It opens when the competition starts." },
      { status: 403 }
    );
  }

  let body: { flag?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const flag = String(body.flag ?? "").trim();
  if (!flag) {
    return NextResponse.json({ ok: false, message: "Enter a flag." }, { status: 400 });
  }

  const flags = (process.env.FLAGS ?? "")
    .split(",")
    .map((f) => f.trim())
    .filter(Boolean);

  if (flags.length === 0) {
    return NextResponse.json(
      { ok: false, message: "Flag checking is not configured for this deployment yet." },
      { status: 503 }
    );
  }

  const accepted = flags.includes(flag);
  state.submissions.push({
    team: session.sub,
    flag,
    ok: accepted,
    at: new Date().toISOString(),
  });
  writeState(state);

  return NextResponse.json(
    {
      ok: accepted,
      message: accepted ? "Accepted. Nice work." : "Not a valid flag for this system.",
    },
    { status: accepted ? 200 : 400 }
  );
}
