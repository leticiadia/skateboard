import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "../../../../components/ui/ButtonLink";

interface AthleteContentProps {
  onNext: () => void;
}

export function AthleteContent({ onNext }: AthleteContentProps) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="mt-4 flex flex-col items-start justify-between gap-4 
        lg:flex-row lg:items-center"
      >
        <p className="w-full lg:w-[34rem]">
          {t("home.athletes.description.paragraph")}
        </p>

        <button
          type="button"
          onClick={onNext}
          aria-label="Próximo atleta"
          className="cursor-pointer transition-transform hover:scale-110 
          active:scale-95"
        >
          <ArrowCircleRightIcon size={32} />
        </button>
      </div>

      <div className="mt-4">
        <ButtonLink
          href="/atletas"
          title={t("home.athletes.button")}
          variant="outline"
          size="large"
        />
      </div>
    </>
  );
}
