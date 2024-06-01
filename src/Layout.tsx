import React, { useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface LayoutProps {
  children: ReactJSXElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  return (
    <>
      <Navbar />
      {children}
      <Footer
        className={`footer shadow-2xl shadow-accent ${!imagesLoaded ? "!hidden" : ""}`}
        setImagesLoaded={setImagesLoaded}
      />
    </>
  );
};

export default Layout;
