import { useState } from "react";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";

import WhiteRightArrow from "../../../../assets/icons/white-right-arrow.svg";
import BlackRightArrow from "../../../../assets/icons/black-right-arrow.svg";

type Props = {
  onNext: () => void;
};

export function AthleteContent({ onNext }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col items-start gap-4 justify-between mt-8 mb-6 lg:flex-row lg:items-center">
        <p className="w-full lg:w-[34rem]">
          Conheça a trajetória dos atletas que vêm deixando sua marca no skate,
          com talento, atitude e evolução constante. Descubra suas conquistas,
          estilos únicos e o impacto dentro e fora das pistas.
        </p>

        <button
          onClick={onNext}
          aria-label="Próximo atleta"
          className="cursor-pointer"
        >
          <div className="transition-transform hover:scale-110 active:scale-95">
            <ArrowCircleRightIcon size={32} />
          </div>
        </button>
      </div>

      <div className="mt-8">
        <a
          href="#"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="border-2 border-black p-4 w-[13rem] h-12 rounded-full flex items-center gap-2 font-bold text-black mb-8 hover:bg-black hover:text-white transition-colors duration-300"
        >
          Ver atletas
          <img
            src={isHovered ? WhiteRightArrow : BlackRightArrow}
            className="transition-transform duration-300"
            alt=""
          />
        </a>
      </div>
    </>
  );
}
