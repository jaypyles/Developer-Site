import React, { useState } from "react";
import Navbar from "src/common/Navbar";
import Footer from "src/common/Footer";
import Posts from "src/common/Posts";
import Loading from "src/common/Loading";

const PostsPage: React.FC = () => {
  const [postImagesLoaded, setPostImagesLoaded] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <Posts
        setImagesLoaded={setPostImagesLoaded}
        imagesLoaded={postImagesLoaded}
      />
      {!postImagesLoaded && <Loading />}
      <Footer />
    </>
  );
};

export default PostsPage;
