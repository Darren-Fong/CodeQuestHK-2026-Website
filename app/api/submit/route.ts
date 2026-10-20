import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { team?: string; flag?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const team = String(body.team ?? "").trim();
  const flag = String(body.flag ?? "").trim();

  if (!team || !flag) {
    return NextResponse.json(
      { ok: false, message: "Team name and flag are both required." },
      { status: 400 }
    );
  }

  const raw = process.env.FLAGS ?? "";
  const flags = raw.split(",").map((f) => f.trim()).filter(Boolean);

  if (flags.length === 0) {
    return NextResponse.json(
      { ok: false, message: "Submission is not configured for this deployment yet." },
      { status: 503 }
    );
  }

  const accepted = flags.includes(flag);
  console.log("[submit]", { team, flag, accepted });

  return NextResponse.json(
    {
      ok: accepted,
      message: accepted
        ? "Accepted. Nice work."
        : "Not a valid flag for this system.",
    },
    { status: accepted ? 200 : 400 }
  );
}
