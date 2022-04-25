import * as React from "react";
import {
  FaSoundcloud,
  FaYoutube,
  FaVk,
} from 'react-icons/fa';

const links = [
  { icon: <FaVk />, name: "vk", url: "https://www.vk.com/deti_deda" },
  {
    icon: <FaSoundcloud />,
    name: "Soundcloud",
    url: "https://www.soundcloud.com/detideda",
  },
  {
    icon: <FaYoutube />,
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCX7hAd8zLnv6_cgDiyHFo_w",
  },
];

const Footer = () => (
  <footer>
    <nav>
      {links.map(({ icon, name, url }) => {
        return (
          <a key={name} href={url} target="_blank" rel="noreferrer noopener">
            {icon} {name.toUpperCase()}
          </a>
        );
      })}
    </nav>
    <div>Detideda 2022 &copy;</div>
  </footer>
);

export default Footer;
