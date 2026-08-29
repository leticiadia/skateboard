import { PageHero } from "../../components/layout/PageHero/PageHero";
import { playlists } from "../../mocks/playlists/playlists";
import { PlaylistCard } from "./components/PlaylistCard";

export function Playlists() {
  return (
    <>
      <PageHero
        title="Playlists"
        subtitle="Uma seleção de músicas para entrar no ritmo do skate com batidas intensas e muita energia, tudo feito para quem vive o skate."
        backgroundColor="#101828"
      />

      <div className="flex w-full flex-col gap-6 my-8">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            backgroundColor={playlist.backgroundColor}
          />
        ))}
      </div>
    </>
  );
}
