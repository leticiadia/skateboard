import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Container } from "../../../components/layout/Container";

import SkateboardPhoto from "../../../assets/images/skateboard.png";

const viewportSettings = {
  once: true,
  amount: 0.3,
};

const fadeUpAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const fadeInFromRightAnimation = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
};

export function SectionMain() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[80vh] w-full bg-black-700 pt-16 lg:pt-8">
      <Container>
        <div
          className="my-8 flex flex-col gap-8 lg:flex-row lg:items-center 
          lg:justify-between"
        >
          <div>
            <motion.h1
              className="text-4xl font-rock-salt text-white md:text-6xl 
              lg:text-7xl"
              {...fadeUpAnimation}
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Skateboard!
            </motion.h1>

            <motion.div
              className="mt-8 flex flex-col gap-2"
              {...fadeUpAnimation}
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <p className="w-full text-xl font-bold text-yellow-300">
                {t("home.main.title")}
              </p>

              <p className="w-full text-base text-white">
                {t("home.main.description")}
              </p>
            </motion.div>
          </div>

          <motion.img
            src={SkateboardPhoto}
            className="lg:h-[400px] xl:h-full"
            alt=""
            {...fadeInFromRightAnimation}
            viewport={viewportSettings}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
