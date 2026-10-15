import { motion, useReducedMotion } from "motion/react";

type StatItemProps = {
  value: number;
  label: string;
  accentColor: string;
  delay: number;
  bordered?: boolean;
};

const HIDDEN_STATE = { opacity: 0, y: 20 } as const;
const VISIBLE_STATE = { opacity: 1, y: 0 } as const;

const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.5,
} as const;

export function StatItem({
  value,
  label,
  accentColor,
  delay,
  bordered = false,
}: StatItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerClasses = [
    "px-6 py-10 lg:px-10 lg:py-12",
    bordered ? "border-t border-gray-200 md:border-l md:border-t-0" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      className={containerClasses}
      initial={shouldReduceMotion ? false : HIDDEN_STATE}
      whileInView={VISIBLE_STATE}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      <strong
        className="block text-5xl font-black leading-none lg:text-6xl"
        style={{ color: accentColor }}
      >
        {value}
      </strong>

      <span className="mt-3 block text-sm font-bold uppercase tracking-widest">
        {label}
      </span>
    </motion.div>
  );
}
