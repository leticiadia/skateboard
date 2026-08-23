import { useParams } from "react-router-dom";
import { TbSkateboard } from "react-icons/tb";
import { TbSkateboarding } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa6";

import { athletes } from "../../mocks/athletes/athletes";
import type { AthleteCategory } from "../../mocks/athletes/type";
import { Container } from "../../components/layout/container/Container";
import { AthleteProfileImage } from "./components/AthleteProfileImage";

const categoryColors: Record<AthleteCategory, string> = {
  female: "#2ab7ca",
  male: "#ffc857",
  "new-talent": "#ef4444",
};

export function AthleteProfile() {
  const { slug } = useParams();

  const athlete = athletes.find((athlete) => athlete.slug === slug);

  if (!athlete) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium">Atleta não encontrado.</p>
      </section>
    );
  }

  const color = categoryColors[athlete.category];

  return (
    <>
      <section className="w-full pt-24 mt-8">
        <Container>
          <div
            className="flex flex-col items-center justify-between gap-8 
            lg:flex-row"
          >
            <div className="flex flex-col gap-6">
              <div>
                <span
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color }}
                >
                  Atleta
                </span>

                <h1 className="mt-2 text-4xl font-bold lg:text-6xl">
                  {athlete.name}
                </h1>
              </div>

              <p
                className="max-w-xl text-base leading-7 text-gray-600 
                lg:text-lg"
              >
                {athlete.description}
              </p>
            </div>

            <AthleteProfileImage
              image={athlete.image}
              name={athlete.name}
              category={athlete.category}
            />
          </div>
        </Container>
      </section>

      <section className="w-full my-10">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div
              className={`rounded-2xl border border-[${color}] p-6`}
              style={{ color }}
            >
              <div className="flex items-center gap-2">
                <TbSkateboard size={32} style={{ color }} />

                <h2 className="text-2xl font-bold lg:text-3xl">Campeonatos</h2>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                {athlete.championships.map((championship) => (
                  <div
                    key={`${championship.name}-${championship.year}`}
                    className="flex items-center gap-4"
                  >
                    {championship.placement && (
                      <p className="font-semibold" style={{ color }}>
                        {championship.placement}º
                      </p>
                    )}

                    <div
                      className="flex flex-1 items-center justify-between 
                      gap-4"
                    >
                      <h3 className="text-base font-medium text-zinc-500">
                        {championship.name}
                      </h3>

                      <p className="font-semibold" style={{ color }}>
                        {championship.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {athlete.awards.length > 0 && (
              <div
                className={`rounded-2xl border border-[${color}] p-6`}
                style={{ color }}
              >
                <div className="flex items-center gap-2">
                  <FaTrophy size={32} style={{ color }} />

                  <h2 className="text-2xl font-bold lg:text-3xl">Prêmios</h2>
                </div>

                <div className="mt-8 flex flex-col gap-6">
                  {athlete.awards.map((award) => (
                    <div
                      key={`${award.name}-${award.year}`}
                      className="flex items-start gap-4"
                    >
                      <TbSkateboarding size={20} style={{ color }} />

                      <div>
                        <h3 className="text-xl font-bold">{award.name}</h3>

                        <div
                          className="mt-2 flex flex-wrap items-center gap-x-4 
                          gap-y-1"
                        >
                          <p className="text-base font-medium text-zinc-500">
                            {award.year}
                          </p>

                          {award.championship && (
                            <p className="text-base font-medium text-zinc-500">
                              {award.championship}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
