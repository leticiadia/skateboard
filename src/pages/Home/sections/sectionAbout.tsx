import { useTranslation } from "react-i18next";

import { Container } from "../../../components/layout/container/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

import TonyHawk from "../../../assets/images/tony-hawk.png";
import BannerLiveYourExperiencePT from "../../../assets/images/banner-live-your-experience.png";
import BannerLiveYourExperienceEN from "../../../assets/images/banner-live-your-experience-en.png";

export function SectionAbout() {
  const { t, i18n } = useTranslation();

  const bannerImage =
    i18n.language === "en"
      ? BannerLiveYourExperienceEN
      : BannerLiveYourExperiencePT;

  return (
    <>
      <section className="w-full mt-10">
        <Container>
          <div
            className="flex flex-col gap-8 lg:flex-row lg:items-center 
          lg:justify-between"
          >
            <div>
              <h2 className="text-2xl text-black font-bold md:text-4xl">
                {t("home.about.title")}
              </h2>

              <div className="my-4 w-full xl:w-[36rem]">
                <p>{t("home.about.description.paragraph1")}</p>

                <p className="mt-4">{t("home.about.description.paragraph2")}</p>
              </div>

              <ButtonLink
                href="#"
                title={t("home.about.button")}
                variant="outline"
                size="default"
              />
            </div>

            <img src={TonyHawk} alt="" />
          </div>
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          <img src={bannerImage} className="h-full object-cover" alt="" />
        </Container>
      </section>
    </>
  );
}
