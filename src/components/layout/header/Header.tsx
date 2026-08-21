import { Navbar } from "../navbar/Navbar";

import SkateboardLogo from "../../../assets/brand/skateboard-logo.svg";
import { useEffect, useState } from "react";
import { Container } from "../container/Container";
import { Link } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full py-8 md:py-4 lg:justify-around lg:gap-36 2xl:justify-evenly ${
        scrolled ? "bg-black-700/80 backdrop-blur-xl shadow-lg" : "bg-black-700"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold hover:underline">
              <img
                src={SkateboardLogo}
                className="h-8 object-cover lg:h-12"
                alt=""
              />
            </Link>
          </div>

          <Navbar />
        </div>
      </Container>
    </header>
  );
}
