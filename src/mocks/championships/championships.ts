import type { Championships } from "./types";

import ImageLegacyStreetTourChampionship from "../../assets/images/championships/legacy-street-tour.jpg";
import ImageBoardwalkClashChampionship from "../../assets/images/championships/boardwalk-clash.jpg";
import ImageStreetWomensProChampionship from "../../assets/images/championships/street-womens-pro.jpg";
import ImageOldSchoolStreetProChampionship from "../../assets/images/championships/old-school-street-pro.jpg";

import ImageSectionLegacyStreetTour from "../../assets/images/legacy-street-tour.png";
import ImageSectionBoardwalkClash from "../../assets/images/boardwalk-clash.png";
import ImageSectionStreetWomensPro from "../../assets/images/street-womens-pro.png";
import ImageSectionOldSchoolStreetPro from "../../assets/images/old-school-street-pro.png";

export const championships: Championships[] = [
  {
    id: 1,
    title: "championship-profile.LegacyStreetTour.title",
    subtitle: "championship-profile.LegacyStreetTour.subtitle",
    description: "championship-profile.LegacyStreetTour.description",
    imageThumbnail: ImageLegacyStreetTourChampionship,
    imageSection: ImageSectionLegacyStreetTour,
    slug: "legacy-street-tour",
    abbreviation: "LST",
    backgroundColor: "zinc300",

    seasons: [
      {
        year: 2024,
        stages: [
          {
            id: "lst-2024-stage-1",
            number: 1,
            name: "São Paulo Street Open",
            location: "São Paulo, SP",
            date: "2024-04-20",
          },
          {
            id: "lst-2024-stage-2",
            number: 2,
            name: "Rio Street Classic",
            location: "Rio de Janeiro, RJ",
            date: "2024-06-15",
          },
          {
            id: "lst-2024-stage-3",
            number: 3,
            name: "Belo Horizonte Street Jam",
            location: "Belo Horizonte, MG",
            date: "2024-08-24",
          },
          {
            id: "lst-2024-stage-4",
            number: 4,
            name: "São Paulo Street Finals",
            location: "São Paulo, SP",
            date: "2024-10-26",
          },
        ],
      },

      {
        year: 2025,
        stages: [
          {
            id: "lst-2025-stage-1",
            number: 1,
            name: "São Paulo Street Open",
            location: "São Paulo, SP",
            date: "2025-03-22",
          },
          {
            id: "lst-2025-stage-2",
            number: 2,
            name: "Rio Street Classic",
            location: "Rio de Janeiro, RJ",
            date: "2025-05-17",
          },
          {
            id: "lst-2025-stage-3",
            number: 3,
            name: "Curitiba Street Challenge",
            location: "Curitiba, PR",
            date: "2025-08-16",
          },
          {
            id: "lst-2025-stage-4",
            number: 4,
            name: "São Paulo Street Finals",
            location: "São Paulo, SP",
            date: "2025-10-25",
          },
        ],
      },

      {
        year: 2026,
        stages: [
          {
            id: "lst-2026-stage-1",
            number: 1,
            name: "São Paulo Street Open",
            location: "São Paulo, SP",
            date: "2026-03-21",
          },
          {
            id: "lst-2026-stage-2",
            number: 2,
            name: "Rio Street Classic",
            location: "Rio de Janeiro, RJ",
            date: "2026-05-16",
          },
          {
            id: "lst-2026-stage-3",
            number: 3,
            name: "Curitiba Street Challenge",
            location: "Curitiba, PR",
            date: "2026-07-18",
          },
          {
            id: "lst-2026-stage-4",
            number: 4,
            name: "São Paulo Street Finals",
            location: "São Paulo, SP",
            date: "2026-10-24",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "championship-profile.BoardwalkClash.title",
    subtitle: "championship-profile.BoardwalkClash.subtitle",
    description: "championship-profile.BoardwalkClash.description",
    abbreviation: "BC",
    imageThumbnail: ImageBoardwalkClashChampionship,
    imageSection: ImageSectionBoardwalkClash,
    slug: "boardwalk-clash",
    backgroundColor: "emerald400",

    seasons: [
      {
        year: 2024,
        stages: [
          {
            id: "bc-2024-stage-1",
            number: 1,
            name: "Santos Boardwalk Open",
            location: "Santos, SP",
            date: "2024-05-11",
          },
          {
            id: "bc-2024-stage-2",
            number: 2,
            name: "Florianópolis Boardwalk Clash",
            location: "Florianópolis, SC",
            date: "2024-07-13",
          },
          {
            id: "bc-2024-stage-3",
            number: 3,
            name: "Rio Beach Street",
            location: "Rio de Janeiro, RJ",
            date: "2024-09-14",
          },
          {
            id: "bc-2024-stage-4",
            number: 4,
            name: "Boardwalk Finals",
            location: "Santos, SP",
            date: "2024-11-23",
          },
        ],
      },

      {
        year: 2025,
        stages: [
          {
            id: "bc-2025-stage-1",
            number: 1,
            name: "Santos Boardwalk Open",
            location: "Santos, SP",
            date: "2025-04-12",
          },
          {
            id: "bc-2025-stage-2",
            number: 2,
            name: "Florianópolis Boardwalk Clash",
            location: "Florianópolis, SC",
            date: "2025-06-21",
          },
          {
            id: "bc-2025-stage-3",
            number: 3,
            name: "Rio Beach Street",
            location: "Rio de Janeiro, RJ",
            date: "2025-09-20",
          },
          {
            id: "bc-2025-stage-4",
            number: 4,
            name: "Boardwalk Finals",
            location: "Santos, SP",
            date: "2025-11-22",
          },
        ],
      },

      {
        year: 2026,
        stages: [
          {
            id: "bc-2026-stage-1",
            number: 1,
            name: "Santos Boardwalk Open",
            location: "Santos, SP",
            date: "2026-04-18",
          },
          {
            id: "bc-2026-stage-2",
            number: 2,
            name: "Florianópolis Boardwalk Clash",
            location: "Florianópolis, SC",
            date: "2026-06-20",
          },
          {
            id: "bc-2026-stage-3",
            number: 3,
            name: "Rio Beach Street",
            location: "Rio de Janeiro, RJ",
            date: "2026-08-22",
          },
          {
            id: "bc-2026-stage-4",
            number: 4,
            name: "Boardwalk Finals",
            location: "Santos, SP",
            date: "2026-11-21",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "championship-profile.StreetWomensPro.title",
    subtitle: "championship-profile.StreetWomensPro.subtitle",
    description: "championship-profile.StreetWomensPro.description",
    abbreviation: "SWP",
    imageThumbnail: ImageStreetWomensProChampionship,
    imageSection: ImageSectionStreetWomensPro,
    slug: "street-womens-pro",
    backgroundColor: "zinc300",

    seasons: [
      {
        year: 2024,
        stages: [
          {
            id: "swp-2024-stage-1",
            number: 1,
            name: "Women’s Street Open",
            location: "São Paulo, SP",
            date: "2024-04-27",
          },
          {
            id: "swp-2024-stage-2",
            number: 2,
            name: "Women’s Street Classic",
            location: "Rio de Janeiro, RJ",
            date: "2024-06-29",
          },
          {
            id: "swp-2024-stage-3",
            number: 3,
            name: "Women’s Street Challenge",
            location: "Curitiba, PR",
            date: "2024-08-31",
          },
          {
            id: "swp-2024-stage-4",
            number: 4,
            name: "Women’s Street Finals",
            location: "São Paulo, SP",
            date: "2024-10-19",
          },
        ],
      },

      {
        year: 2025,
        stages: [
          {
            id: "swp-2025-stage-1",
            number: 1,
            name: "Women’s Street Open",
            location: "São Paulo, SP",
            date: "2025-03-29",
          },
          {
            id: "swp-2025-stage-2",
            number: 2,
            name: "Women’s Street Classic",
            location: "Rio de Janeiro, RJ",
            date: "2025-06-28",
          },
          {
            id: "swp-2025-stage-3",
            number: 3,
            name: "Women’s Street Challenge",
            location: "Curitiba, PR",
            date: "2025-08-30",
          },
          {
            id: "swp-2025-stage-4",
            number: 4,
            name: "Women’s Street Finals",
            location: "São Paulo, SP",
            date: "2025-10-18",
          },
        ],
      },

      {
        year: 2026,
        stages: [
          {
            id: "swp-2026-stage-1",
            number: 1,
            name: "Women’s Street Open",
            location: "São Paulo, SP",
            date: "2026-03-28",
          },
          {
            id: "swp-2026-stage-2",
            number: 2,
            name: "Women’s Street Classic",
            location: "Rio de Janeiro, RJ",
            date: "2026-06-27",
          },
          {
            id: "swp-2026-stage-3",
            number: 3,
            name: "Women’s Street Challenge",
            location: "Curitiba, PR",
            date: "2026-08-29",
          },
          {
            id: "swp-2026-stage-4",
            number: 4,
            name: "Women’s Street Finals",
            location: "São Paulo, SP",
            date: "2026-10-17",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "championship-profile.OldSchoolStreetPro.title",
    subtitle: "championship-profile.OldSchoolStreetPro.subtitle",
    description: "championship-profile.OldSchoolStreetPro.description",
    abbreviation: "OSSP",
    imageThumbnail: ImageOldSchoolStreetProChampionship,
    imageSection: ImageSectionOldSchoolStreetPro,
    slug: "old-school-street-pro",
    backgroundColor: "yellow300",

    seasons: [
      {
        year: 2024,
        stages: [
          {
            id: "ossp-2024-stage-1",
            number: 1,
            name: "Classic Street Open",
            location: "Porto Alegre, RS",
            date: "2024-05-25",
          },
          {
            id: "ossp-2024-stage-2",
            number: 2,
            name: "Old School Street Jam",
            location: "Curitiba, PR",
            date: "2024-07-27",
          },
          {
            id: "ossp-2024-stage-3",
            number: 3,
            name: "Classic Street Challenge",
            location: "São Paulo, SP",
            date: "2024-09-28",
          },
          {
            id: "ossp-2024-stage-4",
            number: 4,
            name: "Old School Finals",
            location: "Porto Alegre, RS",
            date: "2024-11-30",
          },
        ],
      },

      {
        year: 2025,
        stages: [
          {
            id: "ossp-2025-stage-1",
            number: 1,
            name: "Classic Street Open",
            location: "Porto Alegre, RS",
            date: "2025-05-24",
          },
          {
            id: "ossp-2025-stage-2",
            number: 2,
            name: "Old School Street Jam",
            location: "Curitiba, PR",
            date: "2025-07-26",
          },
          {
            id: "ossp-2025-stage-3",
            number: 3,
            name: "Classic Street Challenge",
            location: "São Paulo, SP",
            date: "2025-09-27",
          },
          {
            id: "ossp-2025-stage-4",
            number: 4,
            name: "Old School Finals",
            location: "Porto Alegre, RS",
            date: "2025-11-29",
          },
        ],
      },

      {
        year: 2026,
        stages: [
          {
            id: "ossp-2026-stage-1",
            number: 1,
            name: "Classic Street Open",
            location: "Porto Alegre, RS",
            date: "2026-05-23",
          },
          {
            id: "ossp-2026-stage-2",
            number: 2,
            name: "Old School Street Jam",
            location: "Curitiba, PR",
            date: "2026-07-25",
          },
          {
            id: "ossp-2026-stage-3",
            number: 3,
            name: "Classic Street Challenge",
            location: "São Paulo, SP",
            date: "2026-09-26",
          },
          {
            id: "ossp-2026-stage-4",
            number: 4,
            name: "Old School Finals",
            location: "Porto Alegre, RS",
            date: "2026-11-28",
          },
        ],
      },
    ],
  },
];
