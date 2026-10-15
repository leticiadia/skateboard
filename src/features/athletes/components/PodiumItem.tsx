import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";

type PodiumMedal = "gold" | "silver" | "bronze";

type PodiumItemProps = {
  value: number;
  label: string;
  type: PodiumMedal;
  isMain?: boolean;
};

const MEDAL_STYLES = {
  gold: {
    border: "border-yellow-500/40",
    background: "bg-yellow-500/10",
    shadow: "shadow-yellow-500/20",
    text: "text-yellow-400",
  },
  silver: {
    border: "border-slate-400/30",
    background: "bg-slate-400/5",
    shadow: "shadow-slate-400/10",
    text: "text-slate-300",
  },
  bronze: {
    border: "border-amber-700/30",
    background: "bg-amber-700/5",
    shadow: "shadow-amber-700/10",
    text: "text-amber-600",
  },
} satisfies Record<
  PodiumMedal,
  {
    border: string;
    background: string;
    shadow: string;
    text: string;
  }
>;

const HOVER_ANIMATION = {
  y: -5,
  transition: { duration: 0.2 },
};

export function PodiumItem({
  value,
  label,
  type,
  isMain = false,
}: PodiumItemProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const medalStyle = MEDAL_STYLES[type];

  const containerClasses = [
    "relative flex flex-col items-center justify-center rounded-xl border p-4 sm:p-6 shadow-lg backdrop-blur-sm",
    medalStyle.border,
    medalStyle.background,
    medalStyle.shadow,
    isMain ? "border-2 bg-yellow-500/15 py-8 sm:py-10 -translate-y-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const valueSizeClasses = isMain
    ? "text-6xl sm:text-7xl lg:text-8xl"
    : "text-4xl sm:text-5xl lg:text-6xl";

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : HOVER_ANIMATION}
      className={containerClasses}
    >
      {isMain && (
        <span
          className="absolute -top-3 rounded-full bg-yellow-300 px-3 
          py-0.5 text-[10px] font-black uppercase tracking-wider 
          text-black shadow-md"
        >
          {t("podium-item.champion")}
        </span>
      )}

      <strong
        className={`font-black leading-none ${medalStyle.text} ${valueSizeClasses}`}
      >
        {value}
      </strong>

      <span
        className={`mt-3 block text-[10px] font-extrabold uppercase 
        tracking-widest sm:text-xs ${medalStyle.text}`}
      >
        {label}
      </span>
    </motion.div>
  );
}
