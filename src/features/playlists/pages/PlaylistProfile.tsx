import { useParams } from "react-router-dom";

import { playlists } from "../data/playlists";
import type { BackgroundColor } from "../components/PlaylistCard";

import { Container } from "../../../components/layout/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink";
import { ProfileImage } from "../../../components/ui/ProfileImage";
import { useTranslation } from "react-i18next";

const accentColors: Record<BackgroundColor, string> = {
  zinc300: "#e4e4e7",
  emerald400: "#2ab7ca",
  yellow300: "#ffc857",
  lime300: "#bbf451",
  orange300: "#ffb86a",
};

export function PlaylistProfile() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const playlistData = playlists.find(
    (currentPlaylist) => currentPlaylist.slug === slug,
  );

  if (!playlistData) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium">Playlist não encontrada.</p>
      </section>
    );
  }

  const accentColor = accentColors[playlistData.backgroundColor];

  return (
    <section className="my-8 w-full pt-18">
      <Container>
        <div
          className="flex flex-col items-center justify-between gap-8 
          lg:flex-row"
        >
          <div className="flex flex-col gap-6">
            <div>
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: accentColor }}
              >
                Playlist
              </span>

              <h1 className="mt-2 text-4xl font-bold lg:text-6xl">
                {t(playlistData.title)}
              </h1>
            </div>

            <p
              className="max-w-xl text-base leading-7 text-gray-600 
              lg:text-lg"
            >
              {t(playlistData.description)}
            </p>

            <ButtonLink
              title={t("playlists.buttonPlayPlaylist.name")}
              href="#"
              backgroundColor={accentColor}
              size="large"
            />
          </div>

          <ProfileImage
            image={playlistData.image}
            altText={`Capa da playlist ${playlistData.title}`}
            accentColor={accentColor}
          />
        </div>
      </Container>
    </section>
  );
}
