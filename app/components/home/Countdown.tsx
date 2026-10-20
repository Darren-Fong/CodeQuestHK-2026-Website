"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2027-02-13T09:00:00+08:00").getTime();

type Left = { days: number; hours: number; mins: number; secs: number } | null;

function remaining(): Left {
  const ms = TARGET - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

export default function Countdown() {
  const [left, setLeft] = useState<Left | undefined>(undefined);

  useEffect(() => {
    setLeft(remaining());
    const id = setInterval(() => setLeft(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (left === undefined) {
    return <div className="h-[76px]" aria-hidden />;
  }

  if (left === null) {
    return (
      <p className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)]">
        It is happening now.
      </p>
    );
  }

  const cells: [number, string][] = [
    [left.days, "days"],
    [left.hours, "hrs"],
    [left.mins, "min"],
    [left.secs, "sec"],
  ];

  return (
    <div className="flex items-end justify-center gap-6 sm:gap-10">
      {cells.map(([value, label]) => (
        <div key={label} className="text-center">
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-semibold tabular-nums text-storm-white sm:text-4xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] tracking-widest text-storm-white/40 uppercase">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
