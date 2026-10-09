import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SkateboardLogo from "../../assets/brand/skateboard-logo.svg";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

const SCROLL_THRESHOLD = 20;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerBackground = isScrolled
    ? "bg-black-700/80 backdrop-blur-xl shadow-lg"
    : "bg-black-700";

  return (
    <header
      className={`fixed top-0 z-50 w-full py-8 md:py-4 ${headerBackground}`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Página inicial do Skateboard">
            <img src={SkateboardLogo} className="h-8 lg:h-12" alt="" />
          </Link>

          <Navbar />
        </div>
      </Container>
    </header>
  );
}
