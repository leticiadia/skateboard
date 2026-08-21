import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About";
import { Athletes } from "./pages/Athletes/Athletes";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sobre" element={<About />}></Route>
      <Route path="/atletas" element={<Athletes />}></Route>
    </Routes>
  );
}
