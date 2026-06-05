import { useTranslation } from "react-i18next";

import { Container } from "../../../components/layout/container/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

import ImagePeopleWithSkateboard from "../../../assets/images/people-with-skateboard.png";

export function SectionPlaylists() {
  const { t } = useTranslation();

  return (
    <section className="bg-yellow-300 w-full mt-10">
      <Container>
        <div
          className="flex flex-col items-center justify-evenly gap-8 mb-8 lg:mb-0  
        lg:flex-row lg:justify-between"
        >
          <img
            src={ImagePeopleWithSkateboard}
            className="h-[600px] object-cover lg:mb-0"
            alt=""
          />

          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold">{t("home.playlists.title")}</h2>
            <div className="w-full">
              <p className="text-2xl font-semibold">
                {t("home.playlists.description.paragraph1")}
              </p>

              <p className="text-base mt-4">
                {t("home.playlists.description.paragraph2")}
              </p>
            </div>

            <ButtonLink
              href="#"
              title={t("home.playlists.button")}
              variant="solid"
              size="default"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
