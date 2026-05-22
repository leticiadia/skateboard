import { ArrowCircleRightIcon, ArrowRightIcon } from "@phosphor-icons/react";

type Props = {
  onNext: () => void;
};

export function AthleteContent({ onNext }: Props) {
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
          className="group relative p-4 w-full lg:w-[12.5rem] h-12 border-2 border-black rounded-full flex items-center justify-center gap-2 font-bold mb-8 text-black overflow-hidden"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            Ver atletas
          </span>

          <ArrowRightIcon
            size={18}
            weight="bold"
            className="absolute right-8 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </a>
      </div>
    </>
  );
}
