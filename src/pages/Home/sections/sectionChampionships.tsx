import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";
import { championships } from "../mocks/championships";

import BanerLiveYourDreams from "../../../assets/images/live-your-dreams.png";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";
import { Container } from "../../../components/layout/container/Container";

export function SectionChampionships() {
  return (
    <>
      <section className="w-full mt-10">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-2xl text-black font-bold md:text-4xl">
              Campeonatos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-8 w-full">
              {championships.map((championship) => (
                <div key={championship.id} className="relative w-full">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={championship.image}
                      className="w-full h-80 object-cover rounded-2xl lg:h-full transition-transform duration-500 ease-out hover:scale-105 opacity-90"
                      alt=""
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2 absolute bottom-0 bg-emerald-400 w-full h-24 rounded-b-2xl">
                    <a href="" className="text-2xl font-bold hover:underline">
                      {championship.name}
                    </a>

                    <ArrowCircleUpRightIcon size={28} weight="fill" />
                  </div>
                </div>
              ))}
            </div>

            <ButtonLink
              href="#"
              title="Ver campeonatos"
              variant="outline"
              size="large"
            />
          </div>
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          <img
            src={BanerLiveYourDreams}
            className="h-full object-cover"
            alt=""
          />
        </Container>
      </section>
    </>
  );
}
