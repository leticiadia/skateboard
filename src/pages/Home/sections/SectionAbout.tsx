import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Container } from "../../../components/layout/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink";

import BannerLiveYourExperienceEN from "../../../assets/images/banner-live-your-experience-en.png";
import BannerLiveYourExperiencePT from "../../../assets/images/banner-live-your-experience.png";
import TonyHawk from "../../../assets/images/tony-hawk.png";

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

export function SectionAbout() {
  const { t, i18n } = useTranslation();

  const experienceBannerImage =
    i18n.language === "en"
      ? BannerLiveYourExperienceEN
      : BannerLiveYourExperiencePT;

  return (
    <>
      <section className="mt-10 w-full">
        <Container>
          <div
            className="flex flex-col gap-8 lg:flex-row lg:items-center 
            lg:justify-between"
          >
            <motion.div
              initial={fadeUpAnimation.initial}
              whileInView={fadeUpAnimation.whileInView}
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <h2 className="text-2xl font-bold text-black md:text-4xl">
                {t("home.about.title")}
              </h2>

              <div className="my-4 w-full xl:w-[36rem]">
                <p>{t("home.about.description.paragraph1")}</p>

                <p className="mt-4">{t("home.about.description.paragraph2")}</p>
              </div>

              <ButtonLink
                href="/sobre"
                title={t("home.about.button")}
                variant="outline"
                size="medium"
              />
            </motion.div>

            <motion.img
              src={TonyHawk}
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

      <section className="mt-10">
        <Container>
          <motion.img
            src={experienceBannerImage}
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
