import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "src/lib/mongo";

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
    res.status(200).json(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
