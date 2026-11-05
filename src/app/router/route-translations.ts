import { generatePath, matchPath } from "react-router-dom";

import { enPaths, ptPaths } from "./paths";
import { routeConfig } from "./route-config";

type Language = "pt-BR" | "en";
type RouteLanguage = "pt" | "en";

function getRouteLanguage(language: Language): RouteLanguage {
  return language === "en" ? "en" : "pt";
}

function getCurrentLanguage(pathname: string): Language {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt-BR";
}

export function translateRoute(pathname: string, language: Language): string {
  const currentLanguage = getCurrentLanguage(pathname);

  if (currentLanguage === language) {
    return pathname;
  }

  const sourceLanguage = getRouteLanguage(currentLanguage);
  const targetLanguage = getRouteLanguage(language);

  for (const route of routeConfig) {
    const sourcePath =
      sourceLanguage === "pt" ? ptPaths[route.key] : enPaths[route.key];

    const targetPath =
      targetLanguage === "pt" ? ptPaths[route.key] : enPaths[route.key];

    const match = matchPath(
      {
        path: sourcePath,
        end: true,
      },
      pathname,
    );

    if (match) {
      const params = {
        slug: match.params.slug ?? null,
        eventSlug: match.params.eventSlug ?? null,
      };

      return generatePath(targetPath, params);
    }
  }

  return language === "en" ? enPaths.home : ptPaths.home;
}
