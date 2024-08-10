import React from "react";
import Navbar from "src/common/Navbar";
import Posts from "src/common/Posts";
import { GetServerSideProps } from "next";
import { PostDocument } from "src/lib/mongo";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`/api/posts`);
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
  return (
    <>
      <Navbar />
      <Posts posts={posts} />
    </>
  );
};

export default PostsPage;
