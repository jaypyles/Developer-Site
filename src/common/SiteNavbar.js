import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" style={{ paddingLeft: "0.5em" }}>
        Resume
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact and Socials
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SiteNavbar;
