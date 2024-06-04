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
  onImageLoaded: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ data, onImageLoaded }) => {
  const filename = data.image;
  const imageUrl = require(`../images/${filename}`);

  return (
    <Nav.Item>
      <a href={data.link}>
        <img
          src={imageUrl}
          alt={data.alt}
          title={data.title}
          onLoad={onImageLoaded}
        />
      </a>
    </Nav.Item>
  );
};

export default NavItem;
