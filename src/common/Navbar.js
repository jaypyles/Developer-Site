import React from "react";
import Nav from "react-bootstrap/Nav";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <Nav className="justify-content-start">
          <Nav.Item>
            <Nav.Link className="name" href="/">
              Jayden Pyles
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="nav-right">
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="https://wiki.jaydenpyles.dev">Wiki</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};
