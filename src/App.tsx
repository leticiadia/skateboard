import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/footer";

function App() {
  return (
    <BrowserRouter>
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
