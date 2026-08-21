import { useTranslation } from "react-i18next";

import { championships } from "../../../mocks/championships";

import { Container } from "../../../components/layout/container/Container";
import { EntityCard } from "../../../components/layout/EntityCard/EntityCard";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

import BannerLiveYourDreamsPT from "../../../assets/images/banner-live-your-dreams.png";
import BannerLiveYourDreamsEN from "../../../assets/images/banner-live-your-dreams-en.png";

export function SectionChampionships() {
  const { t, i18n } = useTranslation();

  const bannerImage =
    i18n.language === "en" ? BannerLiveYourDreamsEN : BannerLiveYourDreamsPT;

  return (
    <>
      <section className="w-full mt-10">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-2xl text-black font-bold md:text-4xl">
              {t("home.championships.title")}
            </h2>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 
              xl:grid-cols-4 gap-8 w-full"
            >
              {championships.map((championship) => (
                <EntityCard
                  href="null"
                  name={championship.name}
                  image={championship.image}
                  color="blue"
                />
              ))}
            </div>

            <ButtonLink
              href="#"
              title={t("home.championships.button")}
              variant="outline"
              size="large"
            />
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
