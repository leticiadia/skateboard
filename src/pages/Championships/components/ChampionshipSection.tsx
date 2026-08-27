import { useTranslation } from "react-i18next";

import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";
import { Container } from "../../../components/layout/container/Container";

export type BackgroundColor = "zinc300" | "zinc800";

interface ChampionshipSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  backgroundColor: BackgroundColor;
}

const colorClasses: Record<BackgroundColor, string> = {
  zinc300: "bg-[#e4e4e7]",
  zinc800: "bg-[#27272a]",
};

export function ChampionshipSection({
  title,
  subtitle,
  description,
  href,
  backgroundColor,
  image,
}: ChampionshipSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className={`w-full min-h-[80vh] ${colorClasses[backgroundColor]} 
      flex flex-col items-center justify-center`}
    >
      <Container>
        <div className="w-full flex items-center justify-between gap-8">
          <div className="flex flex-col items-start gap-4 lg:w-1/2">
            <h2 className="text-3xl text-black font-bold">{t(title)}</h2>

            <p className="text-2xl text-black font-semibold">{t(subtitle)}</p>

            <p className="text-base text-black font-medium">{t(description)}</p>

            <ButtonLink
              href={href}
              title="Explore"
              variant="solid"
              size="default"
            />
          </div>

          <img
            src={image}
            className="transition-transform duration-500 ease-out 
            hover:scale-102"
            alt=""
          />
        </div>
      </Container>
    </section>
  );
}
