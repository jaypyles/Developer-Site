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
  className?: string | undefined;
}

export const NavItem: React.FC<NavItemProps> = ({ data, className }) => {
  return (
    <Nav.Item className={className}>
      <a href={data.link} className="no-arrow">
        <img src={`/images/${data.image}`} alt={data.alt} title={data.title} />
      </a>
    </Nav.Item>
  );
};
