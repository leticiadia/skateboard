import { useTranslation } from "react-i18next";

import { athletes } from "../../mocks/athletes/athletes";

import { Container } from "../../components/layout/container/Container";
import { PageHero } from "../../components/layout/PageHero/PageHero";

import { AthleteCategorySection } from "./components/AthleteCategorySection";

export function Athletes() {
  const { t } = useTranslation();

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
      <PageHero
        title={t("athletes.title")}
        subtitle={t("athletes.description")}
        backgroundColor="#101828"
      />

      <section className="my-10 w-full">
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
