import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Container } from "../../components/layout/Container";
import { PageHero } from "../../components/ui/PageHero/PageHero";

import { about } from "./data/about";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        title={t("about.title")}
        subtitle={t("about.description")}
        backgroundColor="#101828"
      />

      <section>
        <Container>
          <div className="my-10 flex flex-col gap-10">
            {about.map((aboutSection, index) => {
              const sectionDirection = aboutSection.reverse
                ? "lg:flex-row-reverse"
                : "lg:flex-row";

              const initialRotation = aboutSection.reverse ? 5 : -5;

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-8 
                  lg:justify-between ${sectionDirection}`}
                >
                  <div
                    className="flex w-full flex-col gap-2 text-base 
                    font-medium text-slate-300"
                  >
                    {aboutSection.paragraphs.map((paragraphKey) => (
                      <p key={paragraphKey}>{t(paragraphKey)}</p>
                    ))}
                  </div>

                  <motion.img
                    src={aboutSection.image}
                    alt=""
                    initial={{
                      opacity: 0,
                      rotate: initialRotation,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
