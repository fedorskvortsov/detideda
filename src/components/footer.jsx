import * as React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinks from "data/social-links.yml";
import { getIconByName } from "util/mapper/icon-mapper";

const Footer = () => (
  <footer className="text-center">
    <Nav className="justify-content-center">
      {socialLinks.map(({ name, link }, index) => {
        return (
          <Nav.Link key={name} href={link} target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={getIconByName(name)} />
          </Nav.Link>
        );
      })}
    </Nav>
    <div className="small copyright">Detideda 2021 &copy;</div>
  </footer>
);

export default Footer;
