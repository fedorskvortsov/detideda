import * as React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faVk,
  faYoutube,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer>
    <Nav className="justify-content-center">
      <Nav.Link href="https://www.instagram.com/deti_deda" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Nav.Link>
      <Nav.Link href="https://www.vk.com/deti_deda" target="_blank">
        <FontAwesomeIcon icon={faVk} />
      </Nav.Link>
      <Nav.Link href="https://www.soundcloud.com/detideda" target="_blank">
        <FontAwesomeIcon icon={faSoundcloud} />
      </Nav.Link>
      <Nav.Link
        href="https://www.youtube.com/channel/UCX7hAd8zLnv6_cgDiyHFo_w"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </Nav.Link>
    </Nav>
  </footer>
);

export default Footer;
