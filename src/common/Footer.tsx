import React, { useEffect, useCallback, useState } from "react";
import { Nav } from "react-bootstrap";
import NavItem from "./NavItem";
import { footer_links } from "../data/Footer";

interface FooterProps {
  className?: string;
  setImagesLoaded: Function;
}

const Footer: React.FC<FooterProps> = ({ className, setImagesLoaded }) => {
  const [loadedCount, setLoadedCount] = useState<number>(0);

  const handleImageLoaded = useCallback(() => {
    setLoadedCount((prevCount: number) => prevCount + 1);
  }, []);

  useEffect(() => {
    if (loadedCount === footer_links.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  return (
    <div className={className}>
      <Nav className="footer">
        {footer_links.map((data, index) => (
          <NavItem key={index} data={data} onImageLoaded={handleImageLoaded} />
        ))}
      </Nav>
    </div>
  );
};

export default Footer;
