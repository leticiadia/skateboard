import type { Championships } from "../championships/types";
import type { Event } from "../events/types";

import type { AthleteAward, AthleteCategory, AthleteGalleryItem } from "./type";

export type AthleteStats = {
  totalChampionships: number;
  totalTitles: number;
  totalAwards: number;
  podiums: {
    gold: number;
    silver: number;
    bronze: number;
    total: number;
  };
};

export type AthleteSeasonStats = {
  points: number;
  wins: number;
  podiums: {
    gold: number;
    silver: number;
    bronze: number;
    total: number;
  };
};

export type AthleteAchievement = {
  championship: Championships;
  year: number;
  placement: number;
};

export type AthleteAchievements = {
  titles: AthleteAchievement[];
  awards: AthleteAward[];
};

export type AthleteCurrentRanking = {
  championship: Championships;
  position: number;
  points: number;
};

export type AthleteCurrentData = {
  season: number;
  rankings: AthleteCurrentRanking[];
  nextEvent?: Event;
  nextEventChampionship?: Championships;
};

export type AthletePodium = {
  year: number;
  stageId: string;
  championship: Championships;
  medal: "gold" | "silver" | "bronze";
};

export type AthletePodiumsData = {
  athlete: {
    name: string;
    image: string;
  };
  podiums: AthletePodium[];
};

export type AthleteProfileData = {
  athlete: {
    name: string;
    description: string;
    image: string;
    category: AthleteCategory;
  };
  stats: AthleteStats;
  achievements: AthleteAchievements;
  current: AthleteCurrentData;
  gallery: AthleteGalleryItem[];
};
