import React from "react";
import { Nav } from "react-bootstrap";
import NavItem from "./NavItem";
import { footer_links } from "../data/Footer";

const Footer = () => {
  return (
    <div className="footer shadow-2xl shadow-accent">
      <Nav className="footer">
        {footer_links.map((data, index) => (
          <NavItem key={index} data={data} />
        ))}
      </Nav>
    </div>
  );
};

export default Footer;
