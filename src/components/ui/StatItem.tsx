import { motion } from "motion/react";

type StatItemProps = {
  value: number;
  label: string;
  accentColor: string;
  delay: number;
  bordered?: boolean;
};

export function StatItem({
  value,
  label,
  accentColor,
  delay,
  bordered = false,
}: StatItemProps) {
  return (
    <motion.div
      className={`
        px-6 py-10
        lg:px-10 lg:py-12
        ${bordered ? "border-t border-gray-200 md:border-l md:border-t-0" : ""}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
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
