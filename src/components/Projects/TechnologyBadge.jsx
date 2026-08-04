export default function TechnologyBadge({ technology }) {
  return (
    <span
      className="
        px-4 py-2 rounded-full text-sm text-slate-200
        bg-white/5 border border-white/15
        transition
        hover:bg-[#c1272d]/15 hover:border-[#c1272d]/40 hover:text-white hover:scale-105
      "
    >
      {technology}
    </span>
  );
}
