import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import { athletes } from "../../../mocks/athletes/athletes";
import { championships } from "../../../mocks/championships/championships";
import { getAthletePodiums } from "../../../mocks/athletes/helpers/getAthletePodiums";
import type { AthleteCategory } from "../../../mocks/athletes/type";

import { AthletePodiumsTable } from "./components/AthletePodiumsTable";
import { Container } from "../../../components/layout/container/Container";

const athleteColors: Record<AthleteCategory, string> = {
  female: "#2ab7ca",
  male: "#ffc857",
  "new-talent": "#ef4444",
};

export function AthletePodiums() {
  const { slug } = useParams();

  const athlete = athletes.find((athlete) => athlete.slug === slug);

  if (!athlete) {
    return <div>Atleta não encontrado.</div>;
  }

  const color = athleteColors[athlete.category];

  const podiums = getAthletePodiums(athlete, championships);

  return (
    <section className="w-full pt-28 pb-10 lg:pt-28">
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color }}
          >
            Pódios
          </span>

          <h1
            className="mt-4 text-4xl font-bold leading-tight sm:text-5xl 
              lg:text-6xl"
          >
            Histórico de pódios
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-7 text-gray-600 
              lg:text-lg"
          >
            Todas as conquistas que colocaram <strong>{athlete.name}</strong> no
            pódio.
          </p>
        </motion.div>

        <div className="mt-8">
          <Link
            to={`/atletas/${athlete.slug}`}
            className="group flex items-center gap-2 text-sm font-bold 
              text-zinc-700"
          >
            <ArrowLeftIcon
              size={14}
              className="transition-transform duration-200 
                group-hover:-translate-x-1"
            />

            <span>Voltar para o perfil</span>
          </Link>
        </div>

        <AthletePodiumsTable podiums={podiums} accentColor={color} />
      </Container>
    </section>
  );
}
