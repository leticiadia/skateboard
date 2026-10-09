import { Translate, X } from "phosphor-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import SkateboardLogo from "../../assets/brand/skateboard-logo-black.svg";

type Language = "pt-BR" | "en";

interface RouteProps {
  path: string;
  label: string;
}

interface MenuModalProps {
  isOpen: boolean;
  routes: RouteProps[];
  currentLanguage: Language;
  onClose: () => void;
  onChangeLanguage: (language: Language) => void;
}

export function MenuModal({
  isOpen,
  onClose,
  routes,
  currentLanguage,
  onChangeLanguage,
}: MenuModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  function handleLanguageToggle() {
    const nextLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR";

    onChangeLanguage(nextLanguage);
  }

  function handleBackdropClick() {
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-40 flex min-h-screen items-center 
      justify-center bg-black/30 md:hidden"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="animate-scale-up relative m-4 h-[96vh] w-[90%] rounded-2xl 
        border border-white/10 bg-white p-4 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <img src={SkateboardLogo} className="h-8" alt="Skateboard" />

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded p-1 text-black 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-yellow-300"
            aria-label="Fechar menu"
          >
            <X size={26} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Navegação principal">
          <ul className="mt-6 flex flex-col items-start gap-6">
            {routes.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={onClose}
                  className="text-lg font-medium text-black"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8">
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="flex h-11 cursor-pointer items-center gap-2 rounded-full 
            border border-black/20 px-4 text-black transition-colors 
            duration-300 hover:bg-black hover:text-white 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-yellow-300"
            aria-label="Trocar idioma"
          >
            <Translate size={20} weight="bold" aria-hidden="true" />
            <span className="text-sm font-medium uppercase">
              {currentLanguage === "pt-BR" ? "PT" : "EN"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
