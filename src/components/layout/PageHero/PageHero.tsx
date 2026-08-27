import { Container } from "../container/Container";
import type { PageHeroProps } from "./types";

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundColor,
  size = "normal",
}: PageHeroProps) {
  const heightClasses = {
    normal: "min-h-[80vh]",
    full: "min-h-screen",
  };

  return (
    <section
      className={`
        relative flex w-full
        items-center justify-center
        bg-cover bg-center bg-no-repeat
        ${heightClasses[size]}
      `}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor,
      }}
    >
      <Container>
        {backgroundImage && <div className="absolute inset-0 bg-black/80" />}

        <div
          className="
          relative z-10 mx-auto flex max-w-3xl
          flex-col items-center gap-4
          text-center
        "
        >
          <h1 className="text-4xl font-bold text-white lg:text-6xl">{title}</h1>

          <p className="text-base font-medium text-zinc-400">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
