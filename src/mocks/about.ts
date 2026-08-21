import ImageSkaterYoungRiding from "../assets/images/skater-young-riding.png";
import ImageTonyHawk from "../assets/images/tony-hawk-story.png";
import ImageSkatersFriendsVan from "../assets/images/skaters-friends-van.png";
import ImageSkatersGroupPark from "../assets/images/skaters-group-park.png";

export const aboutHistory = [
  {
    image: ImageSkaterYoungRiding,
    reverse: false,
    paragraphs: [
      "about.history.origin.paragraph1",
      "about.history.origin.paragraph2",
      "about.history.origin.paragraph3",
    ],
  },
  {
    image: ImageTonyHawk,
    reverse: true,
    paragraphs: [
      "about.history.tonyHawk.paragraph1",
      "about.history.tonyHawk.paragraph2",
    ],
  },
  {
    image: ImageSkatersFriendsVan,
    reverse: false,
    paragraphs: ["about.history.culture.paragraph1"],
  },
  {
    image: ImageSkatersGroupPark,
    reverse: true,
    paragraphs: [
      "about.history.competition.paragraph1",
      "about.history.competition.paragraph2",
    ],
  },
];
