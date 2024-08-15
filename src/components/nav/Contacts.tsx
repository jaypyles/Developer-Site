import React from "react";
import { Nav } from "react-bootstrap";
import NavItem from "./NavItem";
import { footer_links } from "../../data/Footer";

const Contacts: React.FC = () => {
  return (
    <div className="contacts absolute top-0 right-0">
      <Nav className="contacts">
        {footer_links.map((data, index) => (
          <NavItem key={index} data={data} />
        ))}
      </Nav>
    </div>
  );
};

export default Contacts;
