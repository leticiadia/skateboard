import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { Container } from "../components/layout/container/Container";
import { aboutHistory } from "../mocks/about";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-black-700 flex min-h-[80vh] w-full items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <h2 className="text-5xl font-bold text-white">
                {t("about.title")}
              </h2>

              <div className="mt-2 border-b-4 border-yellow-300" />
            </div>

            <p className="max-w-lg text-center text-base font-medium text-white">
              {t("about.description")}
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="my-10 flex flex-col gap-10">
            {aboutHistory.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-8 lg:justify-between ${
                  item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="flex w-full flex-col gap-2 text-base font-medium text-slate-300">
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

                {/* <img
                  src={item.image}
                  alt=""
                  className="w-full max-w-md object-cover transition-transform 
                  duration-500 hover:scale-105"
                /> */}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
