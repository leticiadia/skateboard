import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import { ButtonLink } from "../../../../components/ui/ButtonLink/ButtonLink";
import { useTranslation } from "react-i18next";

type Props = {
  onNext: () => void;
};

export function AthleteContent({ onNext }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="flex flex-col items-start gap-4 justify-between mt-4 
      lg:flex-row lg:items-center"
      >
        <p className="w-full lg:w-[34rem]">
          {t("home.athletes.description.paragraph")}
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
          title={t("home.athletes.button")}
          variant="outline"
          size="default"
        />
      </div>
    </>
  );
}
