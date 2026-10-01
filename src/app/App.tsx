import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";

import { ScrollToTop } from "../components/layout/ScrollToTop";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen w-full">
        <Header />

        <main className="flex-grow flex flex-col items-center">
          <AppRouter />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
