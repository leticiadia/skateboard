import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { List, Translate } from "phosphor-react";

import { MenuModal } from "../../ui/menuModal/MenuModal";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  function changeLanguage(lang: "pt" | "en") {
    localStorage.setItem("language", lang);

    i18n.changeLanguage(lang);

    setIsLanguageMenuOpen(false);
  }

  const routes = [
    { path: "/sobre", label: t("navbar.about") },
    { path: "/atletas", label: t("navbar.athletes") },
    { path: "/campeonatos", label: t("navbar.championships") },
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

        <div className="relative">
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="flex items-center gap-2 px-3 h-10 rounded-full border 
            border-white/20 text-white transition-all duration-300 
            hover:bg-white hover:text-black cursor-pointer"
          >
            <Translate size={18} weight="bold" />
          </button>

          {isLanguageMenuOpen && (
            <div
              className="absolute top-12 right-0 min-w-[120px] rounded-lg 
              bg-white shadow-lg overflow-hidden"
            >
              <button
                onClick={() => {
                  changeLanguage("pt");
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Português
              </button>

              <button
                onClick={() => {
                  changeLanguage("en");
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>

      <MenuModal
        isOpen={open}
        onClose={() => setOpen(false)}
        routes={routes}
        currentLanguage={i18n.language}
        onChangeLanguage={changeLanguage}
      />
    </nav>
  );
}
