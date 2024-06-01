import React, { useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Homepage from "./common/Homepage";
import Posts from "./common/Posts";

interface LayoutProps {
  children: ReactJSXElement;
}

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#121212] text-white z-50">
      <div className="loader">Loading...</div>
    </div>
  );
};

export const HomepagePage: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  return (
    <>
      {!imagesLoaded && <Loading />}
      <Navbar />
      <Homepage hidden={!imagesLoaded} />
      <Footer
        className={`footer shadow-2xl shadow-accent ${!imagesLoaded ? "!hidden" : ""}`}
        setImagesLoaded={setImagesLoaded}
      />
    </>
  );
};

export const PostsPage: React.FC<LayoutProps> = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  return (
    <>
      <Navbar />
      <Posts />
      <Footer
        className={`footer shadow-2xl shadow-accent ${!imagesLoaded ? "!hidden" : ""}`}
        setImagesLoaded={setImagesLoaded}
      />
    </>
  );
};
