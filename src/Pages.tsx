import React, { useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Homepage from "./common/Homepage";
import Posts from "./common/Posts";
import loading from "./images/loading.gif";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-imageAccent text-white z-50">
      <img src={loading} alt="Loading..."></img>
    </div>
  );
};

export const HomepagePage: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  return (
    <>
      <Navbar hidden={!imagesLoaded} />
      <Homepage hidden={!imagesLoaded} />
      {!imagesLoaded && <Loading />}
      <Footer imagesLoaded={imagesLoaded} setImagesLoaded={setImagesLoaded} />
    </>
  );
};

export const PostsPage: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [postImagesLoaded, setPostImagesLoaded] = useState<boolean>(false);

  return (
    <>
      <Navbar hidden={!imagesLoaded} />
      <Posts
        setImagesLoaded={setPostImagesLoaded}
        imagesLoaded={postImagesLoaded}
      />
      {!postImagesLoaded && <Loading />}
      <Footer imagesLoaded={imagesLoaded} setImagesLoaded={setImagesLoaded} />
    </>
  );
};
