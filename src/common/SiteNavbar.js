import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" style={{ paddingLeft: "0.5em" }}>
        About
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/jaypyles" target="_blank">
          Github
        </Nav.Link>
        <Nav.Link
          href="https://drive.google.com/file/d/1fU6faaTCP40AJ8Mly9UzK5lE6EjGkgA8/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Nav.Link>
        <Nav.Link href="mailto:jaydenpyles0524@gmail.com">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SiteNavbar;
