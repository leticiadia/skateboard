import type { Championships } from "./types";

import ImageLegacyStreetTourChampionship from "../../assets/images/championships/legacy-street-tour.jpg";
import ImageBoardwalkClashChampionship from "../../assets/images/championships/boardwalk-clash.jpg";
import ImageStreetWomensProChampionship from "../../assets/images/championships/street-womens-pro.jpg";
import ImageOldSchoolStreetProChampionship from "../../assets/images/championships/old-school-street-pro.jpg";

import ImageSectionLegacyStreetTour from "../../assets/images/legacy-street-tour.png";

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
  },

  {
    id: 2,
    title: "championship-profile.BoardwalkClash.title",
    subtitle: "championship-profile.BoardwalkClash.subtitle",
    description: "championship-profile.BoardwalkClash.description",
    abbreviation: "BC",
    imageThumbnail: ImageBoardwalkClashChampionship,
    imageSection: ImageSectionLegacyStreetTour,
    slug: "boardwalk-clash",
    backgroundColor: "zinc800",
  },

  {
    id: 3,
    title: "championship-profile.StreetWomensPro.title",
    subtitle: "championship-profile.StreetWomensPro.subtitle",
    description: "championship-profile.StreetWomensPro.description",
    abbreviation: "SWP",
    imageThumbnail: ImageStreetWomensProChampionship,
    imageSection: ImageSectionLegacyStreetTour,
    slug: "street-womens-pro",
    backgroundColor: "zinc300",
  },

  {
    id: 4,
    title: "championship-profile.OldSchoolStreetPro.title",
    subtitle: "championship-profile.OldSchoolStreetPro.subtitle",
    description: "championship-profile.OldSchoolStreetPro.description",
    abbreviation: "OSSP",
    imageThumbnail: ImageOldSchoolStreetProChampionship,
    imageSection: ImageSectionLegacyStreetTour,
    slug: "old-school-street-pro",
    backgroundColor: "zinc800",
  },
];
