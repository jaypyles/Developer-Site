import React, { useState } from "react";
import Navbar from "src/common/Navbar";
import Posts from "src/common/Posts";
import Loading from "src/common/Loading";
import { GetServerSideProps } from "next";
import { PostDocument } from "src/lib/mongo";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts: PostDocument[] = await res.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

interface PostsPageProps {
  posts: PostDocument[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  const [postImagesLoaded, setPostImagesLoaded] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <Posts
        posts={posts}
        setImagesLoaded={setPostImagesLoaded}
        imagesLoaded={postImagesLoaded}
      />
      {!postImagesLoaded && <Loading />}
    </>
  );
};

export default PostsPage;
