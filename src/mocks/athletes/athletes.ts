import type { Athlete } from "./type";

import ImageCarolMendes from "../../assets/images/athletes/carol-alves.jpg";
import ImageMarinaSilva from "../../assets/images/athletes/marina-silva.jpg";
import ImageAshleyOliver from "../../assets/images/athletes/ashley-oliver.jpg";
import ImageLuizaSilva from "../../assets/images/athletes/luiza-silva.jpg";
import ImageNinaChaves from "../../assets/images/athletes/nina-chaves.jpg";
import ImageAnaLima from "../../assets/images/athletes/ana-lima.jpg";

import ImageLucasMartins from "../../assets/images/athletes/lucas-martins.jpg";
import ImagePedroAlves from "../../assets/images/athletes/pedro-alves.jpg";
import ImageJoaoCampos from "../../assets/images/athletes/joao-campos.png";
import ImageGabrielRibeiro from "../../assets/images/athletes/gabriel-ribeiro.png";
import ImageLeoCardoso from "../../assets/images/athletes/leo-cardoso.jpg";
import ImageCaioSilva from "../../assets/images/athletes/caio-silva.jpg";

export const athletes: Athlete[] = [
  {
    id: "carol-alves",
    name: "Carol Alves",
    slug: "carol-alves",
    category: "female",
    image: ImageCarolMendes,
    description:
      "Carol Alves é uma skatista brasileira apaixonada pelo street skate. Com uma trajetória marcada por dedicação, criatividade e evolução constante, vem conquistando espaço nas competições nacionais.",
    championships: [
      {
        name: "Campeonato Brasileiro de Skate Street",
        year: 2025,
        placement: 2,
      },
      {
        name: "Circuito Nacional de Skate",
        year: 2024,
        placement: 3,
      },
    ],
    awards: [
      {
        name: "Revelação do Ano",
        year: 2024,
        championship: "Circuito Nacional de Skate",
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
        podiums: {
          gold: 2,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 6,
        points: 690,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 1,
        points: 980,
        wins: 6,
        losses: 2,
        podiums: {
          gold: 4,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 10,
        points: 510,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "marina-silva",
    name: "Marina Silva",
    slug: "marina-silva",
    category: "female",
    image: ImageMarinaSilva,
    description:
      "Marina Silva começou a andar de skate ainda criança e encontrou no esporte uma forma de expressar sua criatividade. Atualmente participa de competições nacionais e busca evoluir a cada campeonato.",
    championships: [
      {
        name: "Open Nacional de Skate",
        year: 2025,
        placement: 1,
      },
      {
        name: "Circuito Brasileiro",
        year: 2024,
        placement: 4,
      },
    ],
    awards: [
      {
        name: "Melhor Manobra",
        year: 2025,
        championship: "Open Nacional de Skate",
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 1,
        points: 980,
        wins: 6,
        losses: 2,
        podiums: {
          gold: 4,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 4,
        points: 760,
        wins: 4,
        losses: 4,
        podiums: {
          gold: 2,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 3,
        points: 850,
        wins: 4,
        losses: 4,
        podiums: {
          gold: 2,
          silver: 2,
          bronze: 0,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 9,
        points: 540,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "ashley-oliver",
    name: "Ashley Oliver",
    slug: "ashley-oliver",
    category: "female",
    image: ImageAshleyOliver,
    description:
      "Ashley Oliver começou a andar de skate ainda criança e encontrou no esporte uma forma de expressar sua criatividade. Atualmente participa de competições nacionais e busca evoluir a cada campeonato.",
    championships: [
      {
        name: "Open Nacional de Skate",
        year: 2025,
        placement: 1,
      },
      {
        name: "Circuito Australiano",
        year: 2024,
        placement: 4,
      },
    ],
    awards: [
      {
        name: "Skatista do Ano",
        year: 2025,
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 5,
        points: 730,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 2,
          bronze: 0,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 2,
        points: 900,
        wins: 5,
        losses: 3,
        podiums: {
          gold: 3,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 6,
        points: 680,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 8,
        points: 580,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "luiza-silva",
    name: "Luiza Silva",
    slug: "luiza-silva",
    category: "female",
    image: ImageLuizaSilva,
    description:
      "Luiza Silva começou a andar de skate ainda criança e encontrou no esporte uma forma de expressar sua criatividade. Atualmente participa de competições nacionais e busca evoluir a cada campeonato.",
    championships: [
      {
        name: "Open Nacional de Skate",
        year: 2025,
        placement: 1,
      },
      {
        name: "Circuito Australiano",
        year: 2024,
        placement: 4,
      },
    ],
    awards: [
      {
        name: "Skatista do Ano",
        year: 2025,
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 8,
        points: 590,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 10,
        points: 490,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 4,
        points: 780,
        wins: 4,
        losses: 4,
        podiums: {
          gold: 2,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 12,
        points: 420,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "lucas-martins",
    name: "Lucas Martins",
    slug: "lucas-martins",
    category: "male",
    image: ImageLucasMartins,
    description:
      "Lucas Martins vem ganhando destaque nas competições nacionais graças ao seu estilo técnico e consistência. O skatista busca representar sua geração nas principais competições do país.",
    championships: [
      {
        name: "Open Nacional de Skate",
        year: 2025,
        placement: 3,
      },
    ],
    awards: [],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 4,
        points: 790,
        wins: 4,
        losses: 4,
        podiums: {
          gold: 2,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 1,
        points: 1000,
        wins: 6,
        losses: 2,
        podiums: {
          gold: 4,
          silver: 1,
          bronze: 0,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 10,
        points: 500,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 0,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 6,
        points: 690,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 2,
          bronze: 0,
        },
      },
    ],
  },

  {
    id: "pedro-alves",
    name: "Pedro Alves",
    slug: "pedro-alves",
    category: "new-talent",
    image: ImagePedroAlves,
    description:
      "Pedro Alves é um dos novos talentos que vêm chamando atenção no cenário do skate. Ainda no início de sua trajetória competitiva, já demonstra grande potencial e muita criatividade sobre o skate.",
    championships: [
      {
        name: "Campeonato Estadual de Skate",
        year: 2025,
        placement: 1,
      },
    ],
    awards: [
      {
        name: "Highlight of the Year",
        year: 2026,
        championship: "Street Circuit Europe",
      },
      {
        name: "Melhor Manobra",
        year: 2025,
        championship: "Open Nacional de Skate",
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 9,
        points: 550,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 8,
        points: 610,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 1,
          silver: 0,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 11,
        points: 470,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 3,
        points: 850,
        wins: 4,
        losses: 4,
        podiums: {
          gold: 2,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "joao-campos",
    name: "João Campos",
    slug: "joao-campos",
    category: "male",
    image: ImageJoaoCampos,
    description:
      "João Campos é conhecido por seu estilo técnico e pela consistência em suas linhas. Com experiência em diferentes campeonatos nacionais, vem se consolidando como um dos nomes de destaque da nova geração do skate.",
    championships: [
      {
        name: "Circuito Brasileiro de Skate",
        year: 2025,
        placement: 2,
      },
      {
        name: "Open Nacional de Skate",
        year: 2024,
        placement: 1,
      },
    ],
    awards: [
      {
        name: "Melhor Linha",
        year: 2024,
        championship: "Open Nacional de Skate",
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 2,
        points: 900,
        wins: 5,
        losses: 3,
        podiums: {
          gold: 3,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 7,
        points: 650,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 7,
        points: 630,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 1,
          silver: 0,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 4,
        points: 780,
        wins: 4,
        losses: 4,
        podiums: {
          gold: 2,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "gabriel-ribeiro",
    name: "Gabriel Ribeiro",
    slug: "gabriel-ribeiro",
    category: "male",
    image: ImageGabrielRibeiro,
    description:
      "Gabriel Ribeiro começou a andar de skate ainda jovem e rapidamente se destacou pela criatividade e pela variedade de suas manobras. Atualmente participa de importantes competições do cenário nacional.",
    championships: [
      {
        name: "Campeonato Brasileiro de Skate Street",
        year: 2025,
        placement: 4,
      },
      {
        name: "Circuito Estadual de Skate",
        year: 2024,
        placement: 1,
      },
    ],
    awards: [],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 6,
        points: 680,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 5,
        points: 720,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 2,
          bronze: 0,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 8,
        points: 590,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 2,
        points: 920,
        wins: 5,
        losses: 3,
        podiums: {
          gold: 3,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "leo-cardoso",
    name: "Leo Cardoso",
    slug: "leo-cardoso",
    category: "male",
    image: ImageLeoCardoso,
    description:
      "Leo Cardoso vem construindo sua carreira com um skate marcado por velocidade, técnica e muita personalidade. Entre competições e sessões, busca constantemente novas formas de evoluir sobre o skate.",
    championships: [
      {
        name: "Open Nacional de Skate",
        year: 2025,
        placement: 2,
      },
      {
        name: "Circuito Nacional de Skate",
        year: 2023,
        placement: 3,
      },
    ],
    awards: [
      {
        name: "Destaque da Competição",
        year: 2025,
        championship: "Open Nacional de Skate",
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 7,
        points: 640,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 3,
        points: 840,
        wins: 4,
        losses: 4,
        podiums: {
          gold: 2,
          silver: 2,
          bronze: 0,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 9,
        points: 540,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 1,
        points: 1010,
        wins: 6,
        losses: 2,
        podiums: {
          gold: 4,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "caio-silva",
    name: "Caio Silva",
    slug: "caio-silva",
    category: "new-talent",
    image: ImageCaioSilva,
    description:
      "Caio Silva representa uma geração de skatistas que vem renovando o cenário nacional. Seu estilo criativo e sua dedicação aos treinos têm garantido bons resultados nas competições que disputa.",
    championships: [
      {
        name: "Campeonato Estadual de Skate",
        year: 2025,
        placement: 1,
      },
      {
        name: "Circuito Brasileiro de Skate",
        year: 2024,
        placement: 5,
      },
    ],
    awards: [],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 11,
        points: 450,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 12,
        points: 400,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 0,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 12,
        points: 390,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 0,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 5,
        points: 730,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 1,
        },
      },
    ],
  },

  {
    id: "nina-chaves",
    name: "Nina Chaves",
    slug: "nina-chaves",
    category: "new-talent",
    image: ImageNinaChaves,
    description:
      "Nina Chaves encontrou no skate uma forma de expressão e vem se destacando pela criatividade e determinação. Com participação em competições nacionais, busca conquistar cada vez mais espaço no cenário feminino.",
    championships: [
      {
        name: "Circuito Nacional de Skate",
        year: 2025,
        placement: 2,
      },
      {
        name: "Open Nacional de Skate",
        year: 2024,
        placement: 3,
      },
    ],
    awards: [
      {
        name: "Destaque Feminino",
        year: 2025,
        championship: "Circuito Nacional de Skate",
      },
    ],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 10,
        points: 500,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 11,
        points: 440,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 2,
        points: 910,
        wins: 5,
        losses: 3,
        podiums: {
          gold: 3,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 11,
        points: 480,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 0,
        },
      },
    ],
  },

  {
    id: "ana-lima",
    name: "Ana Lima",
    slug: "ana-lima",
    category: "new-talent",
    image: ImageAnaLima,
    description:
      "Ana Lima é uma skatista brasileira que vem ganhando espaço nas competições nacionais. Seu estilo combina técnica e criatividade, características que fazem parte da sua evolução dentro do esporte.",
    championships: [
      {
        name: "Campeonato Brasileiro de Skate Street",
        year: 2025,
        placement: 3,
      },
      {
        name: "Circuito Estadual de Skate",
        year: 2024,
        placement: 1,
      },
    ],
    awards: [],
    rankings: [
      {
        championshipSlug: "legacy-street-tour",
        season: 2026,
        position: 12,
        points: 400,
        wins: 1,
        losses: 7,
        podiums: {
          gold: 0,
          silver: 0,
          bronze: 0,
        },
      },
      {
        championshipSlug: "boardwalk-clash",
        season: 2026,
        position: 9,
        points: 560,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 0,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "street-womens-pro",
        season: 2026,
        position: 5,
        points: 720,
        wins: 3,
        losses: 5,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 1,
        },
      },
      {
        championshipSlug: "old-school-street-pro",
        season: 2026,
        position: 7,
        points: 620,
        wins: 2,
        losses: 6,
        podiums: {
          gold: 1,
          silver: 1,
          bronze: 0,
        },
      },
    ],
  },
];
