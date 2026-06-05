import { useTranslation } from "react-i18next";

import { Container } from "../../../components/layout/container/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

import SkateboardPhoto from "../../../assets/images/skateboard.png";

export function SectionMain() {
  const { t } = useTranslation();

  return (
    <section className="bg-black-700 w-full min-h-[80vh] pt-16">
      <Container>
        <div
          className="flex flex-col gap-8 my-8 lg:flex-row lg:items-center 
        lg:justify-between"
        >
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <p
                  className="text-5xl text-white font-bold md:text-6xl 
                lg:text-8xl"
                >
                  Skate
                </p>
                <span
                  className="border-b-4 border-b-white w-[7rem] 
                rounded-full"
                ></span>
              </div>
              <p className="text-5xl text-white font-bold md:text-6xl lg:text-8xl">
                boarding
              </p>
            </div>

            <p className="text-base text-white w-full my-8">
              {t("home.main.description")}
            </p>

            <ButtonLink
              href="#"
              title={t("home.main.button")}
              variant="yellow"
              size="default"
            />
          </div>

          <img
            src={SkateboardPhoto}
            className="lg:h-[400px] xl:h-full"
            alt=""
          />
        </div>
      </Container>
    </section>
  );
}
