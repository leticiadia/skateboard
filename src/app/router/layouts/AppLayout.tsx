import { Header } from "../../../components/layout/Header";
import { ScrollToTop } from "../../../components/layout/ScrollToTop";
import { Outlet } from "react-router-dom";
import { Footer } from "../../../components/layout/Footer";

export function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <ScrollToTop />
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
