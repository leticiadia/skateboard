import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { about } from "../mocks/about";

import { Container } from "../components/layout/container/Container";
import { PageHero } from "../components/layout/PageHero/PageHero";

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
            {about.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-8 lg:justify-between 
                ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <div
                  className="flex w-full flex-col gap-2 text-base font-medium 
                text-slate-300"
                >
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{t(paragraph)}</p>
                  ))}
                </div>

                <motion.img
                  src={item.image}
                  alt=""
                  initial={{
                    opacity: 0,
                    rotate: item.reverse ? 5 : -5,
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
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
