import type { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("posts");
    const postsCollection = db.collection("posts");
    const posts = await postsCollection.find({}).limit(25).toArray();
    console.log(`Posts: ${posts}`);
    posts.forEach((post) => {
      post.time_posted = formatDateWithSuffix(post.dateUploaded);
    });
    res.status(200).json(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
