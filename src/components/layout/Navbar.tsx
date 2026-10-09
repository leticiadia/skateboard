import { List } from "phosphor-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Dropdown } from "../ui/Dropdown/Dropdown";
import { MenuModal } from "../ui/MenuModal";

type Language = "pt-BR" | "en";

const languageOptions: { label: string; value: Language }[] = [
  {
    label: "Português",
    value: "pt-BR",
  },
  {
    label: "English",
    value: "en",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const routes = [
    { path: "/sobre", label: t("navbar.about") },
    { path: "/atletas", label: t("navbar.athletes") },
    { path: "/campeonatos", label: t("navbar.championships") },
  ];

  const currentLanguage: Language = i18n.language.toLowerCase().startsWith("en")
    ? "en"
    : "pt-BR";

  function handleLanguageChange(language: string) {
    const isSupportedLanguage = languageOptions.some(
      (option) => option.value === language,
    );

    if (!isSupportedLanguage) {
      return;
    }

    void i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

  function handleMenuToggle() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <nav>
      <button
        type="button"
        onClick={handleMenuToggle}
        aria-label={t("navbar.openMenu")}
        aria-expanded={isMenuOpen}
        className="absolute right-4 top-9 cursor-pointer rounded p-1 
        text-white focus-visible:outline-2 focus-visible:outline-offset-4 
        focus-visible:outline-yellow-300 md:hidden"
      >
        <List size={26} aria-hidden="true" />
      </button>

      <div className="hidden items-center gap-8 md:flex">
        <ul className="flex items-center gap-4">
          {routes.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="relative text-base font-medium text-white 
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 
                after:w-full after:scale-x-0 after:bg-yellow-300 
                after:transition-transform after:duration-300 
                hover:after:scale-x-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Dropdown
          options={languageOptions}
          value={currentLanguage}
          onChange={handleLanguageChange}
        />
      </div>

      <MenuModal
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        routes={routes}
        currentLanguage={currentLanguage}
        onChangeLanguage={handleLanguageChange}
      />
    </nav>
  );
}
