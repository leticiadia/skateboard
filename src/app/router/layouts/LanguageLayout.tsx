import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

type LanguageLayoutProps = {
  language: "pt" | "en";
};

export function LanguageLayout({ language }: LanguageLayoutProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.resolvedLanguage !== language) {
      void i18n.changeLanguage(language);
    }

    localStorage.setItem("language", language === "en" ? "en" : "pt-BR");
  }, [language, i18n]);

  return <Outlet />;
}
