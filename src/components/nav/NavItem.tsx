import React from "react";
import Nav from "react-bootstrap/Nav";

interface Data {
  image: string;
  link: string;
  alt: string;
  title: string;
}

interface NavItemProps {
  data: Data;
}

const NavItem: React.FC<NavItemProps> = ({ data }) => {
  return (
    <Nav.Item>
      <a href={data.link} className="no-arrow">
        <img src={`/images/${data.image}`} alt={data.alt} title={data.title} />
      </a>
    </Nav.Item>
  );
};

export default NavItem;
