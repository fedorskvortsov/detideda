import * as React from "react";
import PropTypes from "prop-types";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#features">Группа</Nav.Link>
          <Nav.Link href="#pricing">Альбомы</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
