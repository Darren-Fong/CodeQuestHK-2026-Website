import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, SESSION_HOURS, createToken, makeSession } from "@/app/lib/auth";
import { teamAccounts } from "@/app/lib/store";

export async function POST(request: Request) {
  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const username = String(body.username ?? "").trim();
  const password = String(body.password ?? "");

  let role: "team" | "admin" | null = null;

  if (username === "admin" && password === (process.env.ADMIN_PASSWORD ?? "admin123")) {
    role = "admin";
  } else {
    const match = teamAccounts().find(
      (t) => t.username === username && t.password === password
    );
    if (match) role = "team";
  }

  if (!role) {
    return NextResponse.json({ ok: false, message: "Wrong username or password." }, { status: 401 });
  }

  const token = createToken(makeSession(username, role));
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_HOURS * 3600,
    secure: process.env.NODE_ENV === "production",
  });

  return NextResponse.json({ ok: true, role, redirect: role === "admin" ? "/admin" : "/dashboard" });
}
