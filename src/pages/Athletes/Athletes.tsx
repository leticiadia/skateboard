import { athletes } from "../../mocks/athletes/athletes";

import { Container } from "../../components/layout/container/Container";
import { AthleteCategorySection } from "./components/AthleteCategorySection";

export function Athletes() {
  const femaleAthletes = athletes.filter(
    (athlete) => athlete.category === "female",
  );

  const maleAthletes = athletes.filter(
    (athlete) => athlete.category === "male",
  );

  const newTalents = athletes.filter(
    (athlete) => athlete.category === "new-talent",
  );

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
              <h2 className="text-5xl font-bold text-white">Atletas</h2>

              <div className="mt-2 border-b-4 border-yellow-300" />
            </div>

            <p
              className="
                max-w-lg text-center text-base font-medium
                text-white
              "
            >
              Conheça os skatistas que marcaram a cena, das lendas às novas
              gerações que transformam o esporte.
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-10 w-full">
        <Container>
          <div className="flex flex-col gap-16">
            <AthleteCategorySection
              title="Feminino"
              athletes={femaleAthletes}
              color="blue"
            />

            <AthleteCategorySection
              title="Masculino"
              athletes={maleAthletes}
              color="yellow"
            />

            <AthleteCategorySection
              title="Novos talentos"
              athletes={newTalents}
              color="red"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
