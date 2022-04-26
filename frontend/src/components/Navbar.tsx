import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "../models/NavLink";

import styles from "./Navbar.module.css";

interface Props {
  links: NavLink[];
}

const Navbar: React.FC<Props> = ({ links }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onMenuButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={styles.nav}>
      <Link className={styles.homeLink} to="/">Detideda</Link>
      <button className={styles.menuButton} onClick={onMenuButtonClick}>
        {expanded ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`${styles.navList} ${expanded ? styles.active : ""}`}>
        {links.map(({ name, url }, index) => {
          return (
            <li className={styles.navItem} key={index}>
              <Link className={styles.navLink} to={url}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;