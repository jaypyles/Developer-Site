import React, { useState, useEffect } from "react";
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
  const [image, setImage] = useState("");
  const filename = data.image;
  const domain = process.env.REACT_APP_DOMAIN;
  const url = `${domain}/api/images/${filename}`;

  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);

    setImage(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const handleImageLoad = () => {
    onImageLoaded();
  };

  return (
    <Nav.Item>
      <a href={data.link}>
        <img
          src={image}
          alt={data.alt}
          title={data.title}
          onLoad={handleImageLoad}
        />
      </a>
    </Nav.Item>
  );
};

export default NavItem;
