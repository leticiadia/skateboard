import { useParams } from "react-router-dom";

import { playlists } from "../../mocks/playlists/playlists";
import type { BackgroundColor } from "./components/PlaylistCard";

import { Container } from "../../components/layout/container/Container";
import { ProfileImage } from "../../components/layout/ProfileImage/ProfileImage";

import { ButtonLink } from "../../components/ui/ButtonLink/ButtonLink";

const colorClasses: Record<BackgroundColor, string> = {
  zinc300: "#e4e4e7",
  emerald400: "#2ab7ca",
  yellow300: "#ffc857",
  lime300: "#bbf451",
  orange300: "#ffb86a",
};

export function PlaylistProfile() {
  const { slug } = useParams();

  const playlist = playlists.find((playlist) => playlist.slug === slug);

  if (!playlist) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium">Playlist não encontrada.</p>
      </section>
    );
  }

  const color = colorClasses[playlist.backgroundColor];

  return (
    <section className="w-full pt-24 my-8">
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
                Playlist
              </span>

              <h1 className="mt-2 text-4xl font-bold lg:text-6xl">
                {playlist.title}
              </h1>
            </div>

            <p
              className="max-w-xl text-base leading-7 text-gray-600 
                  lg:text-lg"
            >
              {playlist.description}
            </p>

            <ButtonLink
              title="Ouvir playlist"
              href="#"
              backgroundColor={color}
              size="medium"
            />
          </div>

          <ProfileImage
            image={playlist.image}
            altText={`Capa da playlist ${playlist.title}`}
            accentColor={color}
          />
        </div>
      </Container>
    </section>
  );
}
