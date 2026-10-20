const items = [
  "13–14 February 2027",
  "Six systems",
  "Three flags each",
  "Two days",
  "Hong Kong",
];

export default function Marquee() {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-storm-white/10 py-3">
      <div className="marquee flex w-max gap-10 whitespace-nowrap text-[11px] tracking-[0.2em] text-storm-white/40 uppercase">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item}
            <span className="h-1 w-1 rounded-full bg-electric-cyan/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
