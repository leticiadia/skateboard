import { ArrowRightIcon } from "@phosphor-icons/react";
import ImagePeopleWithSkateboard from "../../../assets/images/people-with-skateboard.png";

export function SectionPlaylists() {
  return (
    <section className="bg-yellow-300 w-full">
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 lg:flex-row">
        <img
          src={ImagePeopleWithSkateboard}
          className="h-[600px] mb-8 object-cover lg:mb-0"
          alt=""
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold">Playlists</h2>
          <div className="w-full lg:w-[544px]">
            <p className="text-2xl font-semibold">
              Playlists selecionadas para acompanhar suas sessions, treinos e
              rolês no skate.
            </p>

            <p className="text-base mt-4">
              Uma seleção de músicas para entrar no ritmo do skate com batidas
              intensas e muita energia, tudo feito para quem vive o skate.
            </p>
          </div>

          <a
            href="#"
            className="group relative p-4 w-full lg:w-[12.5rem] h-12 rounded-full flex items-center justify-center gap-2 font-bold mb-8 bg-black text-white overflow-hidden"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Explore
            </span>

            <ArrowRightIcon
              size={18}
              weight="bold"
              className="absolute right-10 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
