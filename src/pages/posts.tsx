import React from "react";
import { Posts } from "@/components/posts";
import { GetStaticProps } from "next";
import { PostDocument } from "@/lib/mongo";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts: PostDocument[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 6000,
  };
};

interface PostsPageProps {
  posts: PostDocument[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return <Posts posts={posts} />;
};

export default PostsPage;
