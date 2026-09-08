import type { Athlete } from "./type";

import ImageCarolMendes from "../../assets/images/athletes/carol-alves.jpg";
import ImageCarolChampionship2024 from "../../assets/images/athletes/carol-alves/carol-championship-2024.jpg";
import ImageCarolChampionship2025 from "../../assets/images/athletes/carol-alves/carol-championship-2025.jpg";
import ImageCarolOpen2025 from "../../assets/images/athletes/carol-alves/carol-open-2025.jpg";
import ImageCarolStreet2026 from "../../assets/images/athletes/carol-alves/carol-street-2026.jpg";

// import ImageMarinaSilva from "../../assets/images/athletes/marina-silva.jpg";
// import ImageAshleyOliver from "../../assets/images/athletes/ashley-oliver.jpg";
// import ImageLuizaSilva from "../../assets/images/athletes/luiza-silva.jpg";
// import ImageNinaChaves from "../../assets/images/athletes/nina-chaves.jpg";
// import ImageAnaLima from "../../assets/images/athletes/ana-lima.jpg";

// import ImageLucasMartins from "../../assets/images/athletes/lucas-martins.jpg";
// import ImagePedroAlves from "../../assets/images/athletes/pedro-alves.jpg";
// import ImageJoaoCampos from "../../assets/images/athletes/joao-campos.png";
// import ImageGabrielRibeiro from "../../assets/images/athletes/gabriel-ribeiro.png";
// import ImageLeoCardoso from "../../assets/images/athletes/leo-cardoso.jpg";
// import ImageCaioSilva from "../../assets/images/athletes/caio-silva.jpg";

export const athletes: Athlete[] = [
  {
    id: "carol-alves",
    name: "Carol Alves",
    slug: "carol-alves",
    category: "female",
    image: ImageCarolMendes,
    description: "athletes.profiles.carol-alves.description",
    championships: [
      { championshipSlug: "legacy-street-tour", year: 2024, placement: 3 },
      { championshipSlug: "street-womens-pro", year: 2025, placement: 1 },
      { championshipSlug: "boardwalk-clash", year: 2025, placement: 2 },
      { championshipSlug: "legacy-street-tour", year: 2026, placement: 1 },
    ],
    awards: [
      {
        name: "athletes.profiles.carol-alves.awards.rookie-of-the-year",
        year: 2024,
        championshipSlug: "legacy-street-tour",
      },
      {
        name: "athletes.profiles.carol-alves.awards.best-trick",
        year: 2025,
        championshipSlug: "street-womens-pro",
      },
      {
        name: "athletes.profiles.carol-alves.awards.skater-of-the-year",
        year: 2026,
        championshipSlug: "legacy-street-tour",
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 3,
        points: 820,
        wins: 4,
        losses: 4,
        podiums: { gold: 2, silver: 1, bronze: 1 },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 6,
        points: 690,
        wins: 3,
        losses: 5,
        podiums: { gold: 1, silver: 1, bronze: 1 },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 1,
        points: 980,
        wins: 6,
        losses: 2,
        podiums: { gold: 4, silver: 1, bronze: 1 },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 10,
        points: 510,
        wins: 2,
        losses: 6,
        podiums: { gold: 0, silver: 1, bronze: 1 },
      },
    ],
    nextEvent: { championshipSlug: "legacy-street-tour", eventId: 1 },
    gallery: [
      {
        image: ImageCarolChampionship2024,
        championshipSlug: "legacy-street-tour",
        year: 2024,
        caption: "Primeiro pódio de Carol no Legacy Street Tour",
      },
      {
        image: ImageCarolChampionship2025,
        championshipSlug: "street-womens-pro",
        year: 2025,
        caption: "Carol conquista seu primeiro título no Street Women's Pro",
      },
      {
        image: ImageCarolOpen2025,
        championshipSlug: "boardwalk-clash",
        year: 2025,
        caption: "Segundo lugar na final do Boardwalk Clash",
      },
      {
        image: ImageCarolStreet2026,
        championshipSlug: "legacy-street-tour",
        year: 2026,
        caption:
          "Temporada 2026: Carol entre as principais atletas do circuito",
      },
    ],
  },

  // {
  //   id: "marina-silva",
  //   name: "Marina Silva",
  //   slug: "marina-silva",
  //   category: "female",
  //   image: ImageMarinaSilva,
  //   description: "athletes.profiles.marina-silva.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.marina-silva.championships.national-skate-open",
  //       year: 2025,
  //       placement: 1,
  //     },
  //     {
  //       name: "athletes.profiles.marina-silva.championships.brazilian-skate-circuit",
  //       year: 2024,
  //       placement: 4,
  //     },
  //   ],
  //   awards: [
  //     {
  //       name: "athletes.profiles.marina-silva.awards.best-trick",
  //       year: 2025,
  //       championship:
  //         "athletes.profiles.marina-silva.championships.national-skate-open",
  //     },
  //   ],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 1,
  //       points: 980,
  //       wins: 6,
  //       losses: 2,
  //       podiums: {
  //         gold: 4,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 4,
  //       points: 760,
  //       wins: 4,
  //       losses: 4,
  //       podiums: {
  //         gold: 2,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 3,
  //       points: 850,
  //       wins: 4,
  //       losses: 4,
  //       podiums: {
  //         gold: 2,
  //         silver: 2,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 9,
  //       points: 540,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "ashley-oliver",
  //   name: "Ashley Oliver",
  //   slug: "ashley-oliver",
  //   category: "female",
  //   image: ImageAshleyOliver,
  //   description: "athletes.profiles.ashley-oliver.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.ashley-oliver.championships.national-skate-open",
  //       year: 2025,
  //       placement: 1,
  //     },
  //     {
  //       name: "athletes.profiles.ashley-oliver.championships.australian-circuit",
  //       year: 2024,
  //       placement: 4,
  //     },
  //   ],
  //   awards: [
  //     {
  //       name: "athletes.profiles.ashley-oliver.awards.skater-of-the-year",
  //       year: 2025,
  //     },
  //   ],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 5,
  //       points: 730,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 2,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 2,
  //       points: 900,
  //       wins: 5,
  //       losses: 3,
  //       podiums: {
  //         gold: 3,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 6,
  //       points: 680,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 8,
  //       points: 580,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "luiza-silva",
  //   name: "Luiza Silva",
  //   slug: "luiza-silva",
  //   category: "female",
  //   image: ImageLuizaSilva,
  //   description: "athletes.profiles.luiza-silva.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.luiza-silva.championships.national-skate-open",
  //       year: 2025,
  //       placement: 1,
  //     },
  //     {
  //       name: "athletes.profiles.luiza-silva.championships.australian-circuit",
  //       year: 2024,
  //       placement: 4,
  //     },
  //   ],
  //   awards: [
  //     {
  //       name: "athletes.profiles.luiza-silva.awards.skater-of-the-year",
  //       year: 2025,
  //     },
  //   ],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 8,
  //       points: 590,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 10,
  //       points: 490,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 4,
  //       points: 780,
  //       wins: 4,
  //       losses: 4,
  //       podiums: {
  //         gold: 2,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 12,
  //       points: 420,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "lucas-martins",
  //   name: "Lucas Martins",
  //   slug: "lucas-martins",
  //   category: "male",
  //   image: ImageLucasMartins,
  //   description: "athletes.profiles.lucas-martins.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.lucas-martins.championships.national-skate-open",
  //       year: 2025,
  //       placement: 3,
  //     },
  //   ],
  //   awards: [],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 4,
  //       points: 790,
  //       wins: 4,
  //       losses: 4,
  //       podiums: {
  //         gold: 2,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 1,
  //       points: 1000,
  //       wins: 6,
  //       losses: 2,
  //       podiums: {
  //         gold: 4,
  //         silver: 1,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 10,
  //       points: 500,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 6,
  //       points: 690,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 2,
  //         bronze: 0,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "pedro-alves",
  //   name: "Pedro Alves",
  //   slug: "pedro-alves",
  //   category: "new-talent",
  //   image: ImagePedroAlves,
  //   description: "athletes.profiles.pedro-alves.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.pedro-alves.championships.state-skate-championship",
  //       year: 2025,
  //       placement: 1,
  //     },
  //   ],
  //   awards: [
  //     {
  //       name: "athletes.profiles.pedro-alves.awards.highlight-of-the-year",
  //       year: 2026,
  //       championship:
  //         "athletes.profiles.pedro-alves.championships.street-circuit-europe",
  //     },
  //     {
  //       name: "athletes.profiles.pedro-alves.awards.best-trick",
  //       year: 2025,
  //       championship:
  //         "athletes.profiles.pedro-alves.championships.national-skate-open",
  //     },
  //   ],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 9,
  //       points: 550,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 8,
  //       points: 610,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 1,
  //         silver: 0,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 11,
  //       points: 470,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 3,
  //       points: 850,
  //       wins: 4,
  //       losses: 4,
  //       podiums: {
  //         gold: 2,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "joao-campos",
  //   name: "João Campos",
  //   slug: "joao-campos",
  //   category: "male",
  //   image: ImageJoaoCampos,
  //   description: "athletes.profiles.joao-campos.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.joao-campos.championships.brazilian-skate-circuit",
  //       year: 2025,
  //       placement: 2,
  //     },
  //     {
  //       name: "athletes.profiles.joao-campos.championships.national-skate-open",
  //       year: 2024,
  //       placement: 1,
  //     },
  //   ],
  //   awards: [
  //     {
  //       name: "athletes.profiles.joao-campos.awards.best-run",
  //       year: 2024,
  //       championship:
  //         "athletes.profiles.joao-campos.championships.national-skate-open",
  //     },
  //   ],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 2,
  //       points: 900,
  //       wins: 5,
  //       losses: 3,
  //       podiums: {
  //         gold: 3,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 7,
  //       points: 650,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 7,
  //       points: 630,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 1,
  //         silver: 0,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 4,
  //       points: 780,
  //       wins: 4,
  //       losses: 4,
  //       podiums: {
  //         gold: 2,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "gabriel-ribeiro",
  //   name: "Gabriel Ribeiro",
  //   slug: "gabriel-ribeiro",
  //   category: "male",
  //   image: ImageGabrielRibeiro,
  //   description: "athletes.profiles.gabriel-ribeiro.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.gabriel-ribeiro.championships.brazilian-street-skate-championship",
  //       year: 2025,
  //       placement: 4,
  //     },
  //     {
  //       name: "athletes.profiles.gabriel-ribeiro.championships.state-skate-circuit",
  //       year: 2024,
  //       placement: 1,
  //     },
  //   ],
  //   awards: [],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 6,
  //       points: 680,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 5,
  //       points: 720,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 2,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 8,
  //       points: 590,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 2,
  //       points: 920,
  //       wins: 5,
  //       losses: 3,
  //       podiums: {
  //         gold: 3,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "leo-cardoso",
  //   name: "Leo Cardoso",
  //   slug: "leo-cardoso",
  //   category: "male",
  //   image: ImageLeoCardoso,
  //   description: "athletes.profiles.leo-cardoso.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.leo-cardoso.championships.national-skate-open",
  //       year: 2025,
  //       placement: 2,
  //     },
  //     {
  //       name: "athletes.profiles.leo-cardoso.championships.national-skate-circuit",
  //       year: 2023,
  //       placement: 3,
  //     },
  //   ],
  //   awards: [
  //     {
  //       name: "athletes.profiles.leo-cardoso.awards.standout-skater",
  //       year: 2025,
  //       championship:
  //         "athletes.profiles.leo-cardoso.championships.national-skate-open",
  //     },
  //   ],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 7,
  //       points: 640,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 3,
  //       points: 840,
  //       wins: 4,
  //       losses: 4,
  //       podiums: {
  //         gold: 2,
  //         silver: 2,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 9,
  //       points: 540,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 1,
  //       points: 1010,
  //       wins: 6,
  //       losses: 2,
  //       podiums: {
  //         gold: 4,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "caio-silva",
  //   name: "Caio Silva",
  //   slug: "caio-silva",
  //   category: "new-talent",
  //   image: ImageCaioSilva,
  //   description: "athletes.profiles.caio-silva.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.caio-silva.championships.state-skate-championship",
  //       year: 2025,
  //       placement: 1,
  //     },
  //     {
  //       name: "athletes.profiles.caio-silva.championships.brazilian-skate-circuit",
  //       year: 2024,
  //       placement: 5,
  //     },
  //   ],
  //   awards: [],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 11,
  //       points: 450,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 12,
  //       points: 400,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 12,
  //       points: 390,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 5,
  //       points: 730,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "nina-chaves",
  //   name: "Nina Chaves",
  //   slug: "nina-chaves",
  //   category: "new-talent",
  //   image: ImageNinaChaves,
  //   description: "athletes.profiles.nina-chaves.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.nina-chaves.championships.national-skate-circuit",
  //       year: 2025,
  //       placement: 2,
  //     },
  //     {
  //       name: "athletes.profiles.nina-chaves.championships.national-skate-open",
  //       year: 2024,
  //       placement: 3,
  //     },
  //   ],
  //   awards: [
  //     {
  //       name: "athletes.profiles.nina-chaves.awards.female-highlight",
  //       year: 2025,
  //       championship:
  //         "athletes.profiles.nina-chaves.championships.national-skate-circuit",
  //     },
  //   ],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 10,
  //       points: 500,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 11,
  //       points: 440,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 2,
  //       points: 910,
  //       wins: 5,
  //       losses: 3,
  //       podiums: {
  //         gold: 3,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 11,
  //       points: 480,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 0,
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "ana-lima",
  //   name: "Ana Lima",
  //   slug: "ana-lima",
  //   category: "new-talent",
  //   image: ImageAnaLima,
  //   description: "athletes.profiles.ana-lima.description",
  //   championships: [
  //     {
  //       name: "athletes.profiles.ana-lima.championships.brazilian-street-skate-championship",
  //       year: 2025,
  //       placement: 3,
  //     },
  //     {
  //       name: "athletes.profiles.ana-lima.championships.state-skate-circuit",
  //       year: 2024,
  //       placement: 1,
  //     },
  //   ],
  //   awards: [],
  //   rankings: [
  //     {
  //       championshipSlug: "legacy-street-tour",
  //       season: 2026,
  //       position: 12,
  //       points: 400,
  //       wins: 1,
  //       losses: 7,
  //       podiums: {
  //         gold: 0,
  //         silver: 0,
  //         bronze: 0,
  //       },
  //     },
  //     {
  //       championshipSlug: "boardwalk-clash",
  //       season: 2026,
  //       position: 9,
  //       points: 560,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 0,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "street-womens-pro",
  //       season: 2026,
  //       position: 5,
  //       points: 720,
  //       wins: 3,
  //       losses: 5,
  //       podiums: {
  //         gold: 1,
  //         silver: 1,
  //         bronze: 1,
  //       },
  //     },
  //     {
  //       championshipSlug: "old-school-street-pro",
  //       season: 2026,
  //       position: 7,
  //       points: 620,
  //       wins: 2,
  //       losses: 6,
  //       podiums: {
  //         gold: 1,
  //         silver: 1,
  //         bronze: 0,
  //       },
  //     },
  //   ],
  // },
];
