import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { List } from "phosphor-react";

import { MenuModal } from "../../ui/menuModal/MenuModal";
import { Dropdown } from "../../ui/Dropdown/Dropdown";

const languageOptions = [
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
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

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

        <Dropdown
          options={languageOptions}
          value={i18n.language}
          onChange={handleLanguageChange}
        />
      </div>

      <MenuModal
        isOpen={open}
        onClose={() => setOpen(false)}
        routes={routes}
        currentLanguage={i18n.language}
        onChangeLanguage={handleLanguageChange}
      />
    </nav>
  );
}
