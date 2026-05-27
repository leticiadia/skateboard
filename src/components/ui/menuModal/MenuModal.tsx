import { Translate, X } from "phosphor-react";
import { Link } from "react-router-dom";

import SkateboardLogo from "../../../assets/images/skateboard-logo-black.svg";

interface RouteProps {
  path: string;
  label: string;
}

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  routes: RouteProps[];
}

export function MenuModal({ isOpen, onClose, routes }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-black/30 z-40 min-h-[100vh] flex items-center justify-center md:hidden">
      <div className="relative bg-white w-[90%] h-[96vh] rounded-2xl p-4 m-4 shadow-lg border border-white/10 animate-scale-up">
        <div className="flex items-center justify-between">
          <img
            src={SkateboardLogo}
            className="h-8 object-cover lg:h-14"
            alt=""
          />

          <button
            onClick={onClose}
            className="cursor-pointer"
            aria-label="Botão para fechar o menu"
          >
            <X size={26} color="#000000" />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 mt-6">
          {routes.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={onClose}
                className="text-black text-lg font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button
            className="flex items-center gap-2 px-4 h-11 rounded-full border 
            border-black/20 text-black transition-all duration-300
            hover:bg-black hover:text-white"
            aria-label="Trocar idioma"
          >
            <Translate size={20} weight="bold" />

            <span className="text-sm font-medium">PT-BR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
