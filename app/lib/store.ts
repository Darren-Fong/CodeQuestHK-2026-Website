import fs from "fs";
import path from "path";

export type Submission = {
  team: string;
  flag: string;
  ok: boolean;
  at: string;
};

export type State = {
  competitionOpen: boolean;
  submissions: Submission[];
};

const FILE = path.join(process.cwd(), "data", "store.json");

const DEFAULT_STATE: State = { competitionOpen: false, submissions: [] };

export function readState(): State {
  try {
    const raw = fs.readFileSync(FILE, "utf8");
    const parsed = JSON.parse(raw) as Partial<State>;
    return {
      competitionOpen: Boolean(parsed.competitionOpen),
      submissions: Array.isArray(parsed.submissions) ? parsed.submissions : [],
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function writeState(state: State) {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(state, null, 2));
}

export function teamAccounts(): { username: string; password: string }[] {
  const raw = process.env.TEAMS ?? "demo:demo123";
  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const i = entry.indexOf(":");
      return { username: entry.slice(0, i), password: entry.slice(i + 1) };
    });
}
