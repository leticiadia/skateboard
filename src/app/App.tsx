import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { ScrollToTop } from "../components/layout/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen w-full flex-col">
        <Header />

        <main className="flex flex-grow flex-col items-center">
          <AppRouter />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
