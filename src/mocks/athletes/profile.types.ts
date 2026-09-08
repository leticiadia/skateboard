import type { Championships, UpcomingEvent } from "../championships/types";
import type {
  AthleteAward,
  AthleteCategory,
  AthleteGalleryItem,
  AthleteRanking,
} from "./type";

export type AthleteStats = {
  totalWins: number;
  totalLosses: number;
  totalChampionships: number;
  totalAwards: number;
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

export type AthleteCurrentRanking = AthleteRanking & {
  championship: Championships;
};

export type AthleteCurrentData = {
  season: number;
  rankings: AthleteCurrentRanking[];
  nextEvent?: UpcomingEvent;
  nextEventChampionship?: Championships;
};

export type AthletePodium = {
  year: number;
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
