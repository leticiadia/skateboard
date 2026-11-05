import { useLocation } from "react-router-dom";

import { translateRoute } from "../route-translations";

type Language = "pt-BR" | "en";

export function useLocalizedPath() {
  const { pathname } = useLocation();

  const language: Language = pathname.startsWith("/en") ? "en" : "pt-BR";

  function getLocalizedPath(path: string) {
    return translateRoute(path, language);
  }

  return getLocalizedPath;
}
