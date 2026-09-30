import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

import { Athletes } from "./features/athletes/pages/Athletes";
import { AthleteProfile } from "./features/athletes/pages/AthleteProfile";
import { AthletePodiums } from "./features/athletes/pages/AthletePodiums";

import { Championships } from "./features/championships/pages/Championships";
import { ChampionshipProfile } from "./features/championships/pages/ChampionshipProfile";
import { ChampionshipRanking } from "./features/championships/pages/ChampionshipRanking";

import { Playlists } from "./features/playlists/pages/Playlists";
import { PlaylistProfile } from "./features/playlists/pages/PlaylistProfile";

import { Events } from "./features/events/pages/Events";
import { EventProfile } from "./features/events/pages/EventProfile";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sobre" element={<About />}></Route>
      <Route path="/atletas" element={<Athletes />}></Route>
      <Route path="/atletas/:slug" element={<AthleteProfile />}></Route>
      <Route path="/atletas/:slug/podio" element={<AthletePodiums />}></Route>
      <Route path="/campeonatos" element={<Championships />}></Route>
      <Route
        path="/campeonatos/:slug"
        element={<ChampionshipProfile />}
      ></Route>
      <Route
        path="/campeonatos/:slug/ranking"
        element={<ChampionshipRanking />}
      ></Route>
      <Route path="/campeonatos/:slug/eventos" element={<Events />}></Route>
      <Route
        path="/campeonatos/:slug/eventos/:eventSlug"
        element={<EventProfile />}
      ></Route>
      <Route path="/playlists" element={<Playlists />}></Route>
      <Route path="/playlists/:slug" element={<PlaylistProfile />}></Route>
    </Routes>
  );
}
