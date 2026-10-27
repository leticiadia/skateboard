import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Container } from "../../../components/layout/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink";

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
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex items-center gap-4"
                initial={fadeUpAnimation.initial}
                whileInView={fadeUpAnimation.whileInView}
                viewport={viewportSettings}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <p
                  className="text-4xl font-rock-salt text-white 
                  md:text-6xl lg:text-7xl"
                >
                  Skateboard!
                </p>
              </motion.div>
            </div>

            <motion.p
              className="my-8 w-full text-base text-white"
              initial={fadeUpAnimation.initial}
              whileInView={fadeUpAnimation.whileInView}
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              {t("home.main.description")}
            </motion.p>

            <motion.div
              initial={fadeUpAnimation.initial}
              whileInView={fadeUpAnimation.whileInView}
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <ButtonLink
                href="#"
                title={t("home.main.button")}
                variant="yellow"
                size="medium"
              />
            </motion.div>
          </div>

          <motion.img
            src={SkateboardPhoto}
            className="lg:h-[400px] xl:h-full"
            alt=""
            initial={fadeInFromRightAnimation.initial}
            whileInView={fadeInFromRightAnimation.whileInView}
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
