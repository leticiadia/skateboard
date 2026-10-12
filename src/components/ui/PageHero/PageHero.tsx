import { Container } from "../../layout/Container";

import type { PageHeroProps } from "./types";

const HEIGHT_CLASSES = {
  normal: "min-h-[80vh]",
  full: "min-h-screen",
} as const;

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundColor,
  size = "normal",
}: PageHeroProps) {
  return (
    <section
      className={`relative flex w-full items-center justify-center bg-cover 
      bg-center bg-no-repeat ${HEIGHT_CLASSES[size]}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor,
      }}
    >
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/80"
        />
      )}

      <Container>
        <div
          className="relative z-10 mx-auto flex max-w-3xl flex-col 
          items-center gap-4 text-center"
        >
          <h1 className="text-4xl font-bold text-white lg:text-6xl">{title}</h1>

          <p className="text-base font-medium text-zinc-400">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
