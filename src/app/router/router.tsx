import { createBrowserRouter, type RouteObject } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { LanguageLayout } from "./layouts/LanguageLayout";

import { routeConfig } from "./route-config";

function createLocalizedRoutes(language: "pt" | "en"): RouteObject[] {
  return routeConfig.map((route): RouteObject => {
    if ("index" in route && route.index) {
      return {
        index: true,
        Component: route.Component,
      };
    }

    return {
      path: route[language],
      Component: route.Component,
    };
  });
}

const portugueseRoutes = createLocalizedRoutes("pt");
const englishRoutes = createLocalizedRoutes("en");

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        Component: () => <LanguageLayout language="pt" />,
        children: portugueseRoutes,
      },
      {
        path: "en",
        Component: () => <LanguageLayout language="en" />,
        children: englishRoutes,
      },
    ],
  },
]);
