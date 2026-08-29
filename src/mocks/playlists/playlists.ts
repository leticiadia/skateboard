import type { Playlist } from "./types";

import ImageSaturdaySkateSession from "../../assets/images/playlists/saturday-skate-session.jpg";
import ImageSunsetRide from "../../assets/images/playlists/sunset-ride.jpg";
import ImageCompetitionMode from "../../assets/images/playlists/competition-mode.jpg";
import ImageRetroRide from "../../assets/images/playlists/retro-ride.jpg";
import ImageSoloSession from "../../assets/images/playlists/solo-session.jpg";

export const playlists: Playlist[] = [
  {
    id: 1,
    title: "Saturday Skate Session",
    subtitle: "A trilha sonora perfeita para uma manhã de skate com os amigos.",
    description:
      "Saturday Skate Session reúne músicas para começar o fim de semana da melhor forma: encontrando os amigos, escolhendo um pico e passando horas andando de skate. É uma playlist leve, animada e cheia de energia, pensada para acompanhar aquelas manhãs de sábado em que não existe muita preocupação além de acertar novas manobras, compartilhar boas histórias e aproveitar o momento com a galera.",
    slug: "saturday-skate-session",
    image: ImageSaturdaySkateSession,
    backgroundColor: "emerald400",
  },
  {
    id: 2,
    title: "Sunset Ride",
    subtitle: "Músicas para acompanhar o skate enquanto o sol se põe.",
    description:
      "Sunset Ride foi criada para aqueles fins de tarde em que o céu começa a mudar de cor, a cidade desacelera e ainda sobra tempo para mais algumas sessões de skate. A seleção mistura energia e tranquilidade, acompanhando perfeitamente o clima de reunir os amigos depois de um longo dia para andar, conversar e aproveitar as últimas horas de luz.",
    slug: "sunset-ride",
    image: ImageSunsetRide,
    backgroundColor: "yellow300",
  },
  {
    id: 3,
    title: "Competition Mode",
    subtitle: "Foco, energia e intensidade para os dias de campeonato.",
    description:
      "Competition Mode é uma playlist para entrar no clima de competição. Com músicas intensas e cheias de energia, ela foi pensada para acompanhar os momentos antes de uma bateria, durante o aquecimento e na preparação para encarar novos desafios. É a trilha sonora para quem precisa de concentração, confiança e aquela motivação extra antes de colocar o skate na pista.",
    slug: "competition-mode",
    image: ImageCompetitionMode,
    backgroundColor: "lime300",
  },
  {
    id: 4,
    title: "Retro Ride",
    subtitle: "Uma viagem sonora pelas vibes clássicas e nostálgicas do skate.",
    description:
      "Retro Ride traz uma atmosfera inspirada nas diferentes épocas que ajudaram a construir a cultura do skate. Com uma pegada nostálgica, divertida e cheia de personalidade, esta playlist é perfeita para quem gosta de revisitar referências clássicas, lembrar sessões antigas e aproveitar aquela sensação única que mistura música, estilo e a história do skate.",
    slug: "retro-ride",
    image: ImageRetroRide,
    backgroundColor: "zinc300",
  },
  {
    id: 5,
    title: "Solo Session",
    subtitle: "Uma seleção para aproveitar o skate no seu próprio ritmo.",
    description:
      "Solo Session foi pensada para aqueles dias em que você quer pegar o skate e sair sozinho, sem horário marcado e sem pressa. A playlist acompanha momentos mais pessoais, seja explorando novos lugares, praticando uma manobra repetidas vezes ou simplesmente aproveitando uma sessão tranquila. É uma trilha sonora para se concentrar, respirar e curtir o skate no seu próprio ritmo.",
    slug: "solo-session",
    image: ImageSoloSession,
    backgroundColor: "orange300",
  },
];
