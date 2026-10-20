import crypto from "crypto";
import { cookies } from "next/headers";

const SECRET = process.env.AUTH_SECRET ?? "dev-secret-change-me";
export const SESSION_COOKIE = "th_session";
export const SESSION_HOURS = 8;

export type Role = "team" | "admin";
export type Session = { sub: string; role: Role; exp: number };

function sign(body: string) {
  return crypto.createHmac("sha256", SECRET).update(body).digest("base64url");
}

export function createToken(session: Session) {
  const body = Buffer.from(JSON.stringify(session)).toString("base64url");
  return body + "." + sign(body);
}

export function verifyToken(token: string): Session | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const body = parts[0];
  const sig = parts[1];
  const expected = sign(body);
  if (sig.length !== expected.length) return null;
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
    const session = JSON.parse(Buffer.from(body, "base64url").toString()) as Session;
    if (!session.exp || session.exp < Date.now()) return null;
    return session;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<Session | null> {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE)?.value;
  return value ? verifyToken(value) : null;
}

export function makeSession(sub: string, role: Role): Session {
  return { sub, role, exp: Date.now() + SESSION_HOURS * 3600 * 1000 };
}
