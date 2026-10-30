import { useTranslation } from "react-i18next";
import { Container } from "../../../components/layout/Container";
import { PageHero } from "../../../components/ui/PageHero/PageHero";
import { PlaylistCard } from "../components/PlaylistCard";

import { playlists } from "../data/playlists";

export function Playlists() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        title={t("home.playlists.title")}
        subtitle={t("home.playlists.description.paragraph2")}
        backgroundColor="#101828"
      />

      <Container>
        <div className="flex w-full flex-col gap-6 my-8">
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              backgroundColor={playlist.backgroundColor}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
