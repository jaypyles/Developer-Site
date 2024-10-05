import React from "react";
import { Nav } from "react-bootstrap";
import NavItem from "../NavItem";
import { footer_links } from "../../../data/Footer";

import classes from "./contacts.module.css";

export const Contacts: React.FC = () => {
  return (
    <div className={classes.contacts}>
      <Nav className={classes["contact-items"]}>
        {footer_links.map((data, index) => (
          <NavItem key={index} data={data} className={classes["nav-item"]} />
        ))}
      </Nav>
    </div>
  );
};
