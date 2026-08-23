import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About";
import { Athletes } from "./pages/Athletes/Athletes";
import { Championships } from "./pages/Championships/Championships";
import { AthleteProfile } from "./pages/Athletes/AthleteProfile";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sobre" element={<About />}></Route>
      <Route path="/atletas" element={<Athletes />}></Route>
      <Route path="/atletas/:slug" element={<AthleteProfile />}></Route>
      <Route path="/campeonatos" element={<Championships />}></Route>
    </Routes>
  );
}
