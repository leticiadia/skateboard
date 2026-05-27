import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

import TonyHawk from "../../../assets/images/tony-hawk.png";
import BannerLiveYourExperience from "../../../assets/images/banner-live-your-experience.png";
import { Container } from "../../../components/layout/container/Container";

export function SectionAbout() {
  return (
    <>
      <section className="w-full mt-10">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl text-black font-bold md:text-4xl">
                A História do Skate
              </h2>

              <div className="my-4 w-full xl:w-[36rem]">
                <p>
                  O skate nasceu como uma alternativa criativa para os surfistas
                  que buscavam novas formas de liberdade sobre rodas. Cada
                  manobra, cada rua e cada geração ajudou a escrever a história
                  desse universo em constante evolução.
                </p>

                <p className="mt-4">
                  Descubra como o skate surgiu, evoluiu e se tornou um movimento
                  cultural. Clique e conheça a trajetória completa que
                  transformou o skate em um ícone mundial.
                </p>
              </div>

              <ButtonLink
                href="#"
                title="Ver história"
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
          <img
            src={BannerLiveYourExperience}
            className="h-full object-cover"
            alt=""
          />
        </Container>
      </section>
    </>
  );
}
