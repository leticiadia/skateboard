import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Header } from "./components/layout/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <AppRouter />
      </main>
    </BrowserRouter>
  );
}

export default App;
