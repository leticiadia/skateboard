import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <AthleteCategorySection
                title={t("athletes.category.female")}
                athletes={femaleAthletes}
                color="blue"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <AthleteCategorySection
                title={t("athletes.category.male")}
                athletes={maleAthletes}
                color="yellow"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <AthleteCategorySection
                title={t("athletes.category.new-talent")}
                athletes={newTalents}
                color="red"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
