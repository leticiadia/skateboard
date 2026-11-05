import { Home } from "../../pages/Home/Home";
import { About } from "../../pages/About/About";

import { Athletes } from "../../features/athletes/pages/Athletes";
import { AthleteProfile } from "../../features/athletes/pages/AthleteProfile";
import { AthletePodiums } from "../../features/athletes/pages/AthletePodiums";

import { Championships } from "../../features/championships/pages/Championships";
import { ChampionshipProfile } from "../../features/championships/pages/ChampionshipProfile";
import { ChampionshipRanking } from "../../features/championships/pages/ChampionshipRanking";

import { Events } from "../../features/events/pages/Events";
import { EventProfile } from "../../features/events/pages/EventProfile";

import { Playlists } from "../../features/playlists/pages/Playlists";
import { PlaylistProfile } from "../../features/playlists/pages/PlaylistProfile";

export const routeConfig = [
  {
    key: "home",
    pt: "",
    en: "",
    index: true,
    Component: Home,
  },
  {
    key: "about",
    pt: "sobre",
    en: "about",
    Component: About,
  },
  {
    key: "athletes",
    pt: "atletas",
    en: "athletes",
    Component: Athletes,
  },
  {
    key: "athleteProfile",
    pt: "atletas/:slug",
    en: "athletes/:slug",
    Component: AthleteProfile,
  },
  {
    key: "athletePodiums",
    pt: "atletas/:slug/podio",
    en: "athletes/:slug/podium",
    Component: AthletePodiums,
  },
  {
    key: "championships",
    pt: "campeonatos",
    en: "championships",
    Component: Championships,
  },
  {
    key: "championshipProfile",
    pt: "campeonatos/:slug",
    en: "championships/:slug",
    Component: ChampionshipProfile,
  },
  {
    key: "championshipRanking",
    pt: "campeonatos/:slug/ranking",
    en: "championships/:slug/ranking",
    Component: ChampionshipRanking,
  },
  {
    key: "championshipEvents",
    pt: "campeonatos/:slug/eventos",
    en: "championships/:slug/events",
    Component: Events,
  },
  {
    key: "eventProfile",
    pt: "campeonatos/:slug/eventos/:eventSlug",
    en: "championships/:slug/events/:eventSlug",
    Component: EventProfile,
  },
  {
    key: "playlists",
    pt: "playlists",
    en: "playlists",
    Component: Playlists,
  },
  {
    key: "playlistProfile",
    pt: "playlists/:slug",
    en: "playlists/:slug",
    Component: PlaylistProfile,
  },
] as const;
