import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";
import { Container } from "../../../components/layout/container/Container";

export type BackgroundColor = "zinc300" | "emerald400" | "yellow300";

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
  emerald400: "bg-[#2ab7ca]",
  yellow300: "bg-[#ffc857]",
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

  const isZincBackground = backgroundColor === "zinc300";

  return (
    <section
      className={`w-full min-h-[80vh] ${colorClasses[backgroundColor]} flex 
      flex-col items-center justify-center py-4`}
    >
      <Container>
        <div
          className={`flex w-full flex-col items-center justify-between gap-8 
          lg:flex-row ${!isZincBackground ? "lg:flex-row-reverse" : ""}`}
        >
          <motion.div
            className="flex flex-col items-start gap-4 lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl text-black font-bold">{t(title)}</h2>

            <p className="text-2xl text-black font-semibold">{t(subtitle)}</p>

            <p className="text-base text-black font-medium">{t(description)}</p>

            <ButtonLink
              href={href}
              title="Explore"
              variant="solid"
              size="default"
            />
          </motion.div>

          <motion.img
            src={image}
            className="transition-transform duration-500 ease-out hover:scale-102"
            alt=""
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
