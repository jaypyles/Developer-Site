import React, { useEffect, useCallback, useState } from "react";
import { Nav } from "react-bootstrap";
import NavItem from "./NavItem";
import { footer_links } from "../data/Footer";

interface FooterProps {
  imagesLoaded: boolean;
  setImagesLoaded: Function;
}

const Footer: React.FC<FooterProps> = ({
  imagesLoaded = false,
  setImagesLoaded,
}) => {
  const [loadedCount, setLoadedCount] = useState<number>(0);

  const handleImageLoaded = useCallback(() => {
    setLoadedCount((prevCount: number) => prevCount + 1);
  }, []);

  useEffect(() => {
    if (loadedCount === footer_links.length && footer_links.length > 0) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  return (
    <div
      className={`footer emboss bg-imageAccent ${!imagesLoaded ? "!hidden" : ""}`}
    >
      <Nav className="footer">
        {footer_links.map((data, index) => (
          <NavItem key={index} data={data} onImageLoaded={handleImageLoaded} />
        ))}
      </Nav>
    </div>
  );
};

export default Footer;
