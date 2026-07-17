export default function TechnologyBadge({ technology }) {
  return (
    <span
      className="
        px-4
        py-2
        rounded-full
        text-sm
        text-cyan-300
        bg-cyan-400/10
        border
        border-cyan-400/20
        backdrop-blur-md
        transition
        hover:bg-cyan-400/20
        hover:scale-105
      "
    >
      {technology}
    </span>
  );
}