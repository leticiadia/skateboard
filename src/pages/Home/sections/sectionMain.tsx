import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { Container } from "../../../components/layout/container/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

import SkateboardPhoto from "../../../assets/images/skateboard.png";

export function SectionMain() {
  const { t } = useTranslation();

  return (
    <section className="bg-black-700 w-full min-h-[80vh] pt-16 lg:pt-8">
      <Container>
        <div
          className="flex flex-col gap-8 my-8 lg:flex-row lg:items-center 
          lg:justify-between"
        >
          <div>
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p
                  className="text-5xl text-white font-bold md:text-6xl 
                  lg:text-8xl"
                >
                  Skate
                </p>

                <span className="border-b-4 border-b-white w-[7rem] rounded-full" />
              </motion.div>

              <motion.p
                className="text-5xl text-white font-bold md:text-6xl lg:text-8xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: "easeOut",
                }}
              >
                boarding
              </motion.p>
            </div>

            <motion.p
              className="text-base text-white w-full my-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              {t("home.main.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
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
                size="default"
              />
            </motion.div>
          </div>

          <motion.img
            src={SkateboardPhoto}
            className="lg:h-[400px] xl:h-full"
            alt=""
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
