import type { Championships } from "./types";

import ImageSLSChampionship from "../../assets/images/championships/sls.png";
import ImageDewTourChampionship from "../../assets/images/championships/dew-tour.png";
import ImageXGamesChampionship from "../../assets/images/championships/x-games.png";
import ImageVPSChampionship from "../../assets/images/championships/vps.png";

export const championships: Championships[] = [
  {
    id: 1,
    title: "Street League Skateboarding",
    subtitle: "Onde os melhores skatistas do mundo se enfrentam.",
    description:
      "Conheça o Street League Skateboarding, o campeonato que reúne habilidade, estilo e muita adrenalina. Clique para descobrir mais sobre as edições e os atletas que fazem história.",
    image: ImageSLSChampionship,
    abbreviation: "SLS",
    backgroundColor: "yellow",
  },

  {
    id: 2,
    title: "Dew Tour",
    subtitle: "A adrenalina encontra a rua e o parque.",
    description:
      "Explore o Dew Tour, um dos campeonatos mais emocionantes do skate mundial, reunindo manobras radicais e atletas de elite. Clique e conheça as edições e os destaques.",
    abbreviation: "Dew Tour",
    image: ImageDewTourChampionship,
    backgroundColor: "blue",
  },

  {
    id: 3,
    title: "X Games",
    subtitle: "Onde o impossível se torna realidade.",
    description:
      "Descubra o X Games, o evento que desafia limites e celebra os skatistas mais ousados do planeta. Clique para ver os grandes momentos e conquistas históricas.",
    abbreviation: "X Games",
    image: ImageXGamesChampionship,
    backgroundColor: "blueDark",
  },

  {
    id: 4,
    title: "Vans Park Series",
    subtitle: "O parque é o palco da criatividade.",
    description:
      "Conheça a Vans Park Series, o campeonato que valoriza técnica, estilo e inovação em cada pista. Clique para acompanhar os atletas e performances que definem tendências.",
    abbreviation: "VPS",
    image: ImageVPSChampionship,
    backgroundColor: "red",
  },
];
