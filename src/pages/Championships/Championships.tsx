import { championships } from "../../mocks/championships/championships";

import { Container } from "../../components/layout/container/Container";
import { ChampionshipSection } from "./components/ChampionshipSection";

export function Championships() {
  return (
    <>
      <section
        className="
                  flex min-h-[80vh] w-full items-center justify-center
                  bg-black-700
                "
      >
        <Container>
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Campeonatos
              </h2>

              <div className="mt-2 border-b-4 border-yellow-300" />
            </div>

            <p
              className="
                        max-w-lg text-center text-base font-medium
                        text-white
                      "
            >
              Explore os principais campeonatos de skate e acompanhe os atletas
              que fazem história nas pistas e ruas.
            </p>
          </div>
        </Container>
      </section>

      <section className="w-full">
        {championships.map((championship) => (
          <ChampionshipSection
            key={championship.id}
            title={championship.title}
            subtitle={championship.subtitle}
            description={championship.description}
            href="#"
            backgroundColor={championship.backgroundColor}
          />
        ))}
      </section>
    </>
  );
}
