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
  rankings: AthleteCurrentRanking[];
  nextEvent?: UpcomingEvent;
  nextEventChampionship?: Championships;
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
