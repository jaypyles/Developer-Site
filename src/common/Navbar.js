import React from "react";
import Nav from "react-bootstrap/Nav";
import Social from "./Social";
import { useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Nav.Item>
            <Nav.Link onClick={handleShow}>Other Links</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Social show={show} handleClose={handleClose} />
    </div>
  );
};
