import React, { useState, useEffect } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Homepage from "./common/Homepage";
import Posts from "./common/Posts";
import { ButtonSpinner, Spinner } from "@chakra-ui/react";

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
      {imagesLoaded && <Navbar />}
      <Homepage hidden={!imagesLoaded} />
      {!imagesLoaded && (
        <ButtonSpinner
          color="white"
          className="fixed inset-0 flex items-center justify-center bg-[#121212] text-white z-50"
        />
      )}
      <Footer
        className={`footer shadow-2xl shadow-accent ${!imagesLoaded ? "!hidden" : ""}`}
        setImagesLoaded={setImagesLoaded}
      />
    </>
  );
};

export const PostsPage: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [postImagesLoaded, setPostImagesLoaded] = useState<boolean>(false);

  return (
    <>
      {postImagesLoaded && <Navbar />}
      <Posts
        setImagesLoaded={setPostImagesLoaded}
        imagesLoaded={postImagesLoaded}
      />
      {!postImagesLoaded && (
        <ButtonSpinner
          color="white"
          className="fixed inset-0 flex items-center justify-center bg-[#121212] text-white z-50"
        />
      )}
      <Footer
        className={`footer shadow-2xl shadow-accent ${!imagesLoaded ? "!hidden" : ""}`}
        setImagesLoaded={setImagesLoaded}
      />
    </>
  );
};
