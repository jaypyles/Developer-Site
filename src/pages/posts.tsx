import React from "react";
import { Navbar } from "src/components/nav/navbar/navbar";
import { Posts } from "src/components/posts";
import { GetServerSideProps } from "next";
import { PostDocument } from "src/lib/mongo";

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts: PostDocument[] = await res.json();

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
