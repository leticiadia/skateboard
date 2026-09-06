import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container } from "../../components/layout/container/Container";
import { athletes } from "../../mocks/athletes/athletes";
import { championships } from "../../mocks/championships/championships";
import type { BackgroundColor } from "./components/ChampionshipSection";
import { GlobalRanking } from "./components/GlobalRanking";

const colorClasses = {
  zinc300: "#e4e4e7",
  emerald400: "#2ab7ca",
  yellow300: "#ffc857",
} satisfies Record<BackgroundColor, string>;

export function ChampionshipRanking() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const championship = championships.find(
    (championship) => championship.slug === slug,
  );

  if (!championship) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <p className="text-center text-xl font-medium">
          Campeonato não encontrado.
        </p>
      </main>
    );
  }

  const championshipTitle = t(championship.title);
  const color = colorClasses[championship.backgroundColor];

  return (
    <main className="w-full pt-10 md:pt-0">
      <header
        aria-labelledby="championship-ranking-title"
        className="relative mt-10 min-h-[50vh] overflow-hidden bg-zinc-900 
        sm:min-h-[45vh]"
      >
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 size-48 rounded-full 
          border-[24px] sm:-right-20 sm:-top-20 sm:size-80 sm:border-[40px]"
          style={{ borderColor: color }}
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-[-10%] size-40 rotate-45 
          border-[20px] sm:-bottom-32 sm:right-1/4 sm:size-72 sm:border-[32px]"
          style={{ borderColor: color }}
        />

        <Container>
          <div
            className="relative z-10 flex min-h-[50vh] flex-col justify-center
            py-12 sm:min-h-[45vh] sm:py-16"
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.25em] 
              sm:text-sm sm:tracking-[0.3em]"
              style={{ color }}
            >
              Campeonato
            </span>

            <h1
              id="championship-ranking-title"
              className="mt-3 max-w-4xl text-4xl font-black uppercase 
              leading-[0.95] tracking-tight text-white sm:mt-4 sm:text-6xl
              lg:text-8xl"
            >
              {championshipTitle}
            </h1>

            <div
              aria-hidden="true"
              className="mt-6 h-1 w-16 sm:mt-8 sm:w-24"
              style={{ backgroundColor: color }}
            />

            <div className="mt-6 sm:mt-8">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] 
                text-zinc-400 sm:text-sm sm:tracking-[0.25em]"
              >
                Ranking
              </p>

              <p
                className="mt-1 text-2xl font-black uppercase text-white 
                sm:mt-2 sm:text-4xl"
              >
                Completo
              </p>
            </div>
          </div>
        </Container>
      </header>

      <section
        aria-labelledby="ranking-section-title"
        className="py-8 sm:py-10"
      >
        <Container>
          <h2 id="ranking-section-title" className="sr-only">
            Ranking completo do {championshipTitle}
          </h2>

          <GlobalRanking
            athletes={athletes}
            championshipSlug={championship.slug}
            title={`Ranking ${championshipTitle}`}
            subtitle="Classificação completa dos atletas participantes."
          />
        </Container>
      </section>
    </main>
  );
}
