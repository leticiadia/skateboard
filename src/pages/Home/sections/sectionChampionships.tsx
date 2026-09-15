import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { Container } from "../../../components/layout/container/Container";
import { EntityCard } from "../../../components/layout/EntityCard/EntityCard";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

import BannerLiveYourDreamsPT from "../../../assets/images/banner-live-your-dreams.png";
import BannerLiveYourDreamsEN from "../../../assets/images/banner-live-your-dreams-en.png";
import { championships } from "../../../mocks/championships/championships";

export function SectionChampionships() {
  const { t, i18n } = useTranslation();

  const bannerImage =
    i18n.language === "en" ? BannerLiveYourDreamsEN : BannerLiveYourDreamsPT;

  return (
    <>
      <section className="w-full mt-10">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <motion.h2
              className="text-2xl text-black font-bold md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {t("home.championships.title")}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 
              xl:grid-cols-4 gap-8 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              {championships.map((championship) => (
                <EntityCard
                  key={championship.id}
                  href={`/campeonatos/${championship.slug}`}
                  name={championship.abbreviation}
                  image={championship.imageThumbnail}
                  color="blue"
                />
              ))}
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
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
            src={bannerImage}
            className="h-full object-cover"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
