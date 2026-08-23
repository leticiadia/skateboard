import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

export type BackgroundColor = "yellow" | "blue" | "red" | "blueDark";

interface ChampionshipSectionProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  backgroundColor: BackgroundColor;
}

const colorClasses: Record<BackgroundColor, string> = {
  yellow: "bg-[#ffc857]",
  blue: "bg-[#2ab7ca]",
  red: "bg-[#ef4444]",
  blueDark: "bg-[#101828]",
};

export function ChampionshipSection({
  title,
  subtitle,
  description,
  href,
  backgroundColor,
}: ChampionshipSectionProps) {
  return (
    <section
      className={`w-full min-h-[100vh] ${colorClasses[backgroundColor]} 
      flex flex-col items-center justify-center gap-4 px-4 lg:px-0`}
    >
      <h2 className="text-3xl text-black font-bold text-center">{title}</h2>

      <p className="text-2xl text-black font-semibold text-center">
        {subtitle}
      </p>

      <p className="text-base text-black font-medium text-center w-full lg:w-1/2">
        {description}
      </p>

      <ButtonLink href={href} title="Explore" variant="solid" size="default" />
    </section>
  );
}
