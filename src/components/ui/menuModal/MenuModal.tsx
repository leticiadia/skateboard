import { X } from "phosphor-react";
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
    <div className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center md:hidden">
      <div className="relative bg-white w-[90%] h-[96vh] rounded-2xl p-8 shadow-lg border border-white/10 animate-scale-up">
        <div>
          <img
            src={SkateboardLogo}
            className="h-8 object-cover lg:h-14"
            alt=""
          />

          <button
            onClick={onClose}
            className="absolute top-9 right-8"
            aria-label="Botão para fechar o menu"
          >
            <X size={26} color="#000000" />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 mt-6 min-h-[70vh] xs:min-h-[78vh]">
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

        <p>© Todos os direitos reservados ao Skateboard.</p>
      </div>
    </div>
  );
}
