import * as React from "react";
import {
  FaSoundcloud,
  FaYoutube,
  FaVk,
} from 'react-icons/fa';

import styles from "./Footer.module.css";

const links = [
  { icon: FaVk, name: "vk", url: "https://www.vk.com/deti_deda" },
  {
    icon: FaSoundcloud,
    name: "Soundcloud",
    url: "https://www.soundcloud.com/detideda",
  },
  {
    icon: FaYoutube,
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCX7hAd8zLnv6_cgDiyHFo_w",
  },
];

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      {links.map(({ icon: Icon, name, url }) => {
        return (
          <a className={styles.navLink} key={name} href={url} target="_blank" rel="noreferrer noopener">
            <Icon className={styles.navIcon} />
          </a>
        );
      })}
    </nav>
    <div className={styles.copyright}>Detideda 2022 &copy;</div>
  </footer>
);

export default Footer;
