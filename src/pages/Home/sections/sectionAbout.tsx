import TonyHawk from "../../../assets/images/tony-hawk.png";
import BannerLiveYourExperience from "../../../assets/images/banner-live-your-experience.png";
import { ArrowRightIcon } from "@phosphor-icons/react";

export function SectionAbout() {
  return (
    <>
      <section className="flex flex-col justify-between px-4 w-full mt-10 lg:flex-row xl:items-center xl:justify-around xl:px-16 2xl:justify-evenly 2xl:px-[560px]">
        <div>
          <h2 className="text-2xl text-black font-bold md:text-4xl">
            A História do Skate
          </h2>

          <div className="my-4 w-full xl:w-[36rem]">
            <p>
              O skate nasceu como uma alternativa criativa para os surfistas que
              buscavam novas formas de liberdade sobre rodas. Cada manobra, cada
              rua e cada geração ajudou a escrever a história desse universo em
              constante evolução.
            </p>

            <p className="mt-4">
              Descubra como o skate surgiu, evoluiu e se tornou um movimento
              cultural. Clique e conheça a trajetória completa que transformou o
              skate em um ícone mundial.
            </p>
          </div>

          <a
            href="#"
            className="group relative p-4 w-full lg:w-[12.5rem] h-12 border-2 border-black rounded-full flex items-center justify-center gap-2 font-bold mb-8 text-black overflow-hidden"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Ver história
            </span>

            <ArrowRightIcon
              size={18}
              weight="bold"
              className="absolute right-8 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </a>
        </div>

        <img src={TonyHawk} alt="" />
      </section>

      <section className="mt-10">
        <img
          src={BannerLiveYourExperience}
          className="h-full object-cover"
          alt=""
        />
      </section>
    </>
  );
}
