import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About";
import { Athletes } from "./pages/Athletes/Athletes";
import { Championships } from "./pages/Championships/Championships";
import { AthleteProfile } from "./pages/Athletes/AthleteProfile";
import { ChampionshipProfile } from "./pages/Championships/ChampionshipProfile";
import { Playlists } from "./pages/Playlists/Playlists";
import { PlaylistProfile } from "./pages/Playlists/PlaylistProfile";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sobre" element={<About />}></Route>
      <Route path="/atletas" element={<Athletes />}></Route>
      <Route path="/atletas/:slug" element={<AthleteProfile />}></Route>
      <Route path="/campeonatos" element={<Championships />}></Route>
      <Route
        path="/campeonatos/:slug"
        element={<ChampionshipProfile />}
      ></Route>
      <Route path="/playlists" element={<Playlists />}></Route>
      <Route path="/playlists/:slug" element={<PlaylistProfile />}></Route>
    </Routes>
  );
}
