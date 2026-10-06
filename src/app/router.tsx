import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";

import { Athletes } from "../features/athletes/pages/Athletes";
import { AthleteProfile } from "../features/athletes/pages/AthleteProfile";
import { AthletePodiums } from "../features/athletes/pages/AthletePodiums";

import { Championships } from "../features/championships/pages/Championships";
import { ChampionshipProfile } from "../features/championships/pages/ChampionshipProfile";
import { ChampionshipRanking } from "../features/championships/pages/ChampionshipRanking";

import { Events } from "../features/events/pages/Events";
import { EventProfile } from "../features/events/pages/EventProfile";

import { Playlists } from "../features/playlists/pages/Playlists";
import { PlaylistProfile } from "../features/playlists/pages/PlaylistProfile";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/atletas" element={<Athletes />} />
      <Route path="/atletas/:slug" element={<AthleteProfile />} />
      <Route path="/atletas/:slug/podio" element={<AthletePodiums />} />
      <Route path="/campeonatos" element={<Championships />} />
      <Route path="/campeonatos/:slug" element={<ChampionshipProfile />} />
      <Route
        path="/campeonatos/:slug/ranking"
        element={<ChampionshipRanking />}
      />
      <Route path="/campeonatos/:slug/eventos" element={<Events />} />
      <Route
        path="/campeonatos/:slug/eventos/:eventSlug"
        element={<EventProfile />}
      />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlists/:slug" element={<PlaylistProfile />} />
    </Routes>
  );
}
