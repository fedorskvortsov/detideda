import {
  faInstagram,
  faVk,
  faYoutube,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

export const getIconByName = (name) => {
  switch (name) {
    case "instagram":
      return faInstagram;
    case "soundcloud":
      return faSoundcloud;
    case "vk":
      return faVk;
    case "youtube":
      return faYoutube;
  }
};