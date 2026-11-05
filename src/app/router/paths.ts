import { routeConfig } from "./route-config";

type RouteKey = (typeof routeConfig)[number]["key"];

type LocalizedPaths = Record<RouteKey, string>;

function createPaths(language: "pt" | "en"): LocalizedPaths {
  return routeConfig.reduce((paths, route) => {
    const isIndexRoute = "index" in route && route.index;
    const routePath = route[language];

    if (language === "en") {
      paths[route.key] = isIndexRoute ? "/en" : `/en/${routePath}`;
    } else {
      paths[route.key] = isIndexRoute ? "/" : `/${routePath}`;
    }

    return paths;
  }, {} as LocalizedPaths);
}

export const ptPaths = createPaths("pt");
export const enPaths = createPaths("en");
