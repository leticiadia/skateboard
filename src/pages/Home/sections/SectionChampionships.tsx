import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { championships } from "../../../features/championships/data/championships";

import { Container } from "../../../components/layout/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink";
import { EntityCard } from "../../../components/ui/EntityCard";

import BannerLiveYourDreamsEN from "../../../assets/images/banner-live-your-dreams-en.png";
import BannerLiveYourDreamsPT from "../../../assets/images/banner-live-your-dreams.png";

const viewportSettings = {
  once: true,
  amount: 0.3,
};

const fadeUpAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export function SectionChampionships() {
  const { t, i18n } = useTranslation();

  const dreamsBannerImage =
    i18n.language === "en" ? BannerLiveYourDreamsEN : BannerLiveYourDreamsPT;

  return (
    <>
      <section className="mt-10 w-full">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <motion.h2
              className="text-2xl font-bold text-black md:text-4xl"
              initial={fadeUpAnimation.initial}
              whileInView={fadeUpAnimation.whileInView}
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {t("home.championships.title")}
            </motion.h2>

            <motion.div
              className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 
              md:grid-cols-4"
              initial={fadeUpAnimation.initial}
              whileInView={fadeUpAnimation.whileInView}
              viewport={{ ...viewportSettings, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              {championships.map((championshipData) => (
                <EntityCard
                  key={championshipData.id}
                  href={`/campeonatos/${championshipData.slug}`}
                  name={championshipData.abbreviation}
                  image={championshipData.imageThumbnail}
                  color="blue"
                />
              ))}
            </motion.div>

            <motion.div
              className="w-full"
              initial={fadeUpAnimation.initial}
              whileInView={fadeUpAnimation.whileInView}
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <ButtonLink
                href="/campeonatos"
                title={t("home.championships.button")}
                variant="outline"
                size="large"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="my-10">
        <Container>
          <motion.img
            src={dreamsBannerImage}
            className="h-full object-cover"
            alt=""
            initial={fadeUpAnimation.initial}
            whileInView={fadeUpAnimation.whileInView}
            viewport={viewportSettings}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </Container>
      </section>
    </>
  );
}
