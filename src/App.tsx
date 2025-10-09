import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <BrowserRouter>
      <main>
        <AppRouter />
      </main>
    </BrowserRouter>
  );
}

export default App;
