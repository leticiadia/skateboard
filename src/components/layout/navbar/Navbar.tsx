import { useState } from "react";
import { List } from "phosphor-react";
import { Link } from "react-router-dom";
import { MenuModal } from "../../ui/menuModal/MenuModal";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", label: "" },
    { path: "/sobre", label: "Sobre" },
    { path: "/atletas", label: "Atletas" },
    { path: "/playlists", label: "Playlists" },
    { path: "/campeonatos", label: "Campenatos" },
  ];

  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-4 top-9 cursor-pointer md:hidden"
      >
        <List size={26} color="#ffffff" />
      </div>
      <ul className="hidden md:flex md:items-center gap-4 text-xl">
        {routes.map(({ path, label }) => (
          <li key={path} className="relative md:ml-2 md:my-0 my-7">
            <Link
              to={path}
              className="text-base text-white font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-yellow-300 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <MenuModal isOpen={open} onClose={() => setOpen(false)} routes={routes} />
    </nav>
  );
}
