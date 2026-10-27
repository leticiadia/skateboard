import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Container } from "../../../components/layout/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink";

import ImagePeopleWithSkateboard from "../../../assets/images/people-with-skateboard.png";

const viewportSettings = {
  once: true,
  amount: 0.3,
};

const fadeInFromLeftAnimation = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
};

const fadeUpAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export function SectionPlaylists() {
  const { t } = useTranslation();

  return (
    <section className="mt-10 w-full bg-yellow-300">
      <Container>
        <div
          className="mb-8 flex flex-col items-center justify-evenly gap-8 
          lg:mb-0 lg:flex-row lg:justify-between"
        >
          <motion.img
            src={ImagePeopleWithSkateboard}
            className="h-[600px] object-cover lg:mb-0"
            alt=""
            {...fadeInFromLeftAnimation}
            viewport={viewportSettings}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="flex flex-col gap-4"
            {...fadeUpAnimation}
            viewport={viewportSettings}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <h2 className="text-5xl font-bold">{t("home.playlists.title")}</h2>

            <div className="w-full">
              <p className="text-2xl font-semibold">
                {t("home.playlists.description.paragraph1")}
              </p>

              <p className="mt-4 text-base">
                {t("home.playlists.description.paragraph2")}
              </p>
            </div>

            <ButtonLink
              href="/playlists"
              title={t("home.playlists.button")}
              variant="solid"
              size="medium"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
