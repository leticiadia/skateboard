import ImageSaturdaySkateSession from "../../../assets/images/playlists/saturday-skate-session.jpg";
import ImageSunsetRide from "../../../assets/images/playlists/sunset-ride.jpg";
import ImageCompetitionMode from "../../../assets/images/playlists/competition-mode.jpg";
import ImageRetroRide from "../../../assets/images/playlists/retro-ride.jpg";
import ImageSoloSession from "../../../assets/images/playlists/solo-session.jpg";

import type { Playlist } from "../types/playlist";

export const playlists: Playlist[] = [
  {
    id: 1,
    title: "playlists.saturdaySkateSession.title",
    subtitle: "playlists.saturdaySkateSession.subtitle",
    description: "playlists.saturdaySkateSession.description",
    slug: "saturday-skate-session",
    image: ImageSaturdaySkateSession,
    backgroundColor: "emerald400",
  },
  {
    id: 2,
    title: "playlists.sunsetRide.title",
    subtitle: "playlists.sunsetRide.subtitle",
    description: "playlists.sunsetRide.description",
    slug: "sunset-ride",
    image: ImageSunsetRide,
    backgroundColor: "yellow300",
  },
  {
    id: 3,
    title: "playlists.competitionMode.title",
    subtitle: "playlists.competitionMode.subtitle",
    description: "playlists.competitionMode.description",
    slug: "competition-mode",
    image: ImageCompetitionMode,
    backgroundColor: "lime300",
  },
  {
    id: 4,
    title: "playlists.retroRide.title",
    subtitle: "playlists.retroRide.subtitle",
    description: "playlists.retroRide.description",
    slug: "retro-ride",
    image: ImageRetroRide,
    backgroundColor: "zinc300",
  },
  {
    id: 5,
    title: "playlists.soloSession.title",
    subtitle: "playlists.soloSession.subtitle",
    description: "playlists.soloSession.description",
    slug: "solo-session",
    image: ImageSoloSession,
    backgroundColor: "orange300",
  },
];
