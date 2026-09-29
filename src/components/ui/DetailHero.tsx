import type { ReactNode } from "react";

interface DetailHeroProps {
  label: string;
  title: string;
  description: ReactNode;
  accentColor?: string;
}

export function DetailHero({
  label,
  title,
  description,
  accentColor,
}: DetailHeroProps) {
  return (
    <header className="relative overflow-hidden pb-10 sm:pb-8">
      <div className="relative z-10 max-w-4xl">
        <span
          className="text-xs font-bold uppercase tracking-[0.25em] sm:text-sm"
          style={{ color: accentColor }}
        >
          {label}
        </span>

        <h1
          className="mt-3 text-4xl font-black leading-[0.95] tracking-tight 
        text-black sm:text-5xl lg:text-7xl"
        >
          {title}
        </h1>

        <div
          aria-hidden="true"
          className="mt-6 h-1 w-16 sm:mt-8 sm:w-24"
          style={{ backgroundColor: accentColor }}
        />

        <p
          className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 
          lg:text-lg"
        >
          {description}
        </p>
      </div>
    </header>
  );
}
