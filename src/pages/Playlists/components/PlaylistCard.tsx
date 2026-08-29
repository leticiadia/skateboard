import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

import { Container } from "../../../components/layout/container/Container";

import type { Playlist } from "../../../mocks/playlists/types";

export type BackgroundColor =
  | "zinc300"
  | "emerald400"
  | "yellow300"
  | "lime300"
  | "orange300";

type PlaylistCardProps = {
  playlist: Playlist;
  backgroundColor: BackgroundColor;
};

const colorClasses: Record<BackgroundColor, string> = {
  zinc300: "bg-[#e4e4e7]",
  emerald400: "bg-[#2ab7ca]",
  yellow300: "bg-[#ffc857]",
  lime300: "bg-[#bbf451]",
  orange300: "bg-[#ffb86a]",
};

export function PlaylistCard({ playlist, backgroundColor }: PlaylistCardProps) {
  return (
    <Container>
      <article
        className={`
          group overflow-hidden rounded-sm
          ${colorClasses[backgroundColor]} p-4
          transition-transform duration-200
          hover:-translate-y-1`}
      >
        <Link
          to={`/playlists/${playlist.slug}`}
          className="
            flex flex-col
            focus-visible:rounded-sm
            focus-visible:outline-2
            focus-visible:outline-black
            focus-visible:outline-offset-4
            sm:flex-row sm:items-center sm:gap-6
          "
        >
          <div className="w-full shrink-0 sm:w-48">
            <img
              src={playlist.image}
              alt={`Capa da playlist ${playlist.title}`}
              className="
                h-48 w-full rounded-sm
                object-cover
                sm:h-40
              "
            />
          </div>

          <div
            className="
              flex flex-1 flex-col items-start
              gap-2 pt-4
              sm:pt-0
            "
          >
            <h3 className="text-2xl font-bold text-black">{playlist.title}</h3>

            <p className="text-base font-medium text-black/75">
              {playlist.subtitle}
            </p>

            <span
              className="
                mt-2 flex items-center gap-2
                font-semibold text-black
              "
            >
              Ver playlist
              <ArrowRightIcon
                size={18}
                className="
                  transition-transform duration-200
                  group-hover:translate-x-1
                "
              />
            </span>
          </div>
        </Link>
      </article>
    </Container>
  );
}
