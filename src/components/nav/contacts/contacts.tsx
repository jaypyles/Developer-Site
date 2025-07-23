import { Nav } from "react-bootstrap";
import { footer_links } from "../../../data/contacts";
import { NavItem } from "../navbar/nav-item";

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
