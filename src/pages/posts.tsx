import { Posts } from "@/components/posts";
import { PostDocument } from "@/lib/mongo";
import { GetStaticProps } from "next";
import { Navbar } from "src/components/nav/navbar/navbar";
import clientPromise from "src/lib/mongo";
function formatDateWithSuffix(isoDateString: string): string {
  const date = new Date(isoDateString);

  const day = date.getDate();
  let suffix = "th";

  if (day % 10 === 1 && day !== 11) {
    suffix = "st";
  } else if (day % 10 === 2 && day !== 12) {
    suffix = "nd";
  } else if (day % 10 === 3 && day !== 13) {
    suffix = "rd";
  }

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${day}${suffix}, ${year}`;
}

export const getStaticProps: GetStaticProps = async () => {
  const client = await clientPromise;
  const db = client.db("posts");

  const postsCollection = db.collection("posts");
  const posts = await postsCollection.find({}).limit(25).toArray();

  const formattedPosts = posts.map((post) => {
    const formattedPost = {
      image_id: post.image_id.toString(),
      description: post.description,
      time_posted: formatDateWithSuffix(post.dateUploaded),
    };
    formattedPost.time_posted = formatDateWithSuffix(post.dateUploaded);
    return formattedPost;
  });

  return {
    props: {
      posts: formattedPosts.reverse(),
    },
    revalidate: 60000,
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
