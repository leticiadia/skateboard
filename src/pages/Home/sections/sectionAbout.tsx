import { useState } from "react";

import TonyHawk from "../../../assets/images/tony-hawk.png";
import BlackRightArrow from "../../../assets/icons/black-right-arrow.svg";
import WhiteRightArrow from "../../../assets/icons/white-right-arrow.svg";
import BannerLiveYourExperience from "../../../assets/images/banner-live-your-experience.png";

export function SectionAbout() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="flex flex-col justify-between px-4 w-full mt-10 lg:flex-row xl:items-center xl:justify-around xl:px-16 2xl:justify-evenly 2xl:px-[560px]">
        <div>
          <h2 className="text-2xl text-black font-bold md:text-4xl">
            Sobre a história do skate
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="border-2 border-black p-4 w-[12.5rem] h-12 rounded-full flex items-center gap-2 font-bold text-black mb-8 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Ver sobre
            <img
              src={isHovered ? WhiteRightArrow : BlackRightArrow}
              className="transition-transform duration-300"
              alt=""
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
