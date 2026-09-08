import { motion } from "motion/react";

interface PodiumItemProps {
  value: number;
  label: string;
  type: "gold" | "silver" | "bronze";
  isMain?: boolean;
}

const medalStyles = {
  gold: {
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/10",
    shadow: "shadow-yellow-500/20",
    text: "text-yellow-400",
  },
  silver: {
    border: "border-slate-400/30",
    bg: "bg-slate-400/5",
    shadow: "shadow-slate-400/10",
    text: "text-slate-300",
  },
  bronze: {
    border: "border-amber-700/30",
    bg: "bg-amber-700/5",
    shadow: "shadow-amber-700/10",
    text: "text-amber-600",
  },
};

export function PodiumItem({
  value,
  label,
  type,
  isMain = false,
}: PodiumItemProps) {
  const style = medalStyles[type];

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative flex flex-col items-center justify-center 
        rounded-xl border p-4 sm:p-6 transition-all ${style.border} ${style.bg} 
        ${style.shadow} shadow-lg backdrop-blur-sm ${
          isMain ? "py-8 sm:py-10 border-2 bg-yellow-500/15 -translate-y-2" : ""
        }`}
    >
      {isMain && (
        <span
          className="absolute -top-3 rounded-full bg-yellow-300 
          px-3 py-0.5 text-[10px] font-black uppercase tracking-wider 
          text-black shadow-md"
        >
          Campeão
        </span>
      )}

      <strong
        className={`font-black leading-none ${style.text} 
        ${
          isMain
            ? "text-6xl sm:text-7xl lg:text-8xl"
            : "text-4xl sm:text-5xl lg:text-6xl"
        }`}
      >
        {value}
      </strong>

      <span
        className={`mt-3 block text-[10px] sm:text-xs font-extrabold uppercase 
        tracking-widest ${style.text}`}
      >
        {label}
      </span>
    </motion.div>
  );
}
