import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import { ButtonLink } from "../../../../components/ui/ButtonLink/ButtonLink";

type Props = {
  onNext: () => void;
};

export function AthleteContent({ onNext }: Props) {
  return (
    <>
      <div
        className="flex flex-col items-start gap-4 justify-between mt-4 
      lg:flex-row lg:items-center"
      >
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

      <div className="mt-4">
        <ButtonLink
          href="#"
          title="Ver atletas"
          variant="outline"
          size="default"
        />
      </div>
    </>
  );
}
