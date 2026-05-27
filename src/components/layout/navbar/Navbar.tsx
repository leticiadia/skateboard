import { useState } from "react";
import { List, Translate } from "phosphor-react";
import { Link } from "react-router-dom";
import { MenuModal } from "../../ui/menuModal/MenuModal";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/sobre", label: "Sobre" },
    { path: "/atletas", label: "Atletas" },
    { path: "/playlists", label: "Playlists" },
    { path: "/campeonatos", label: "Campeonatos" },
  ];

  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-4 top-9 cursor-pointer md:hidden"
      >
        <List size={26} color="#ffffff" />
      </div>

      <div className="hidden md:flex md:items-center md:gap-8">
        <ul className="flex items-center gap-4 text-xl">
          {routes.map(({ path, label }) => (
            <li key={path} className="relative">
              <Link
                to={path}
                className="text-base text-white font-medium relative 
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                after:w-full after:h-[2px] after:bg-yellow-300 after:scale-x-0 
                after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="flex items-center gap-2 px-3 h-10 rounded-full border 
          border-white/20 text-white transition-all duration-300 hover:bg-white 
          hover:text-black cursor-pointer"
          aria-label="Trocar idioma"
        >
          <Translate size={18} weight="bold" />
          <span className="text-sm font-medium">PT</span>
        </button>
      </div>

      <MenuModal isOpen={open} onClose={() => setOpen(false)} routes={routes} />
    </nav>
  );
}
