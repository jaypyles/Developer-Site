import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";
import clientPromise from "src/lib/mongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid image ID" });
  }

  try {
    const client: MongoClient = await clientPromise;
    const db = client.db("posts");
    const bucket = new GridFSBucket(db);

    // create a stream to read the image data from GridFS
    const downloadStream = bucket.openDownloadStream(new ObjectId(id));

    // handle the data events to send the image content to the client
    res.setHeader("Content-Type", "image/jpeg");

    downloadStream.on("data", (chunk) => {
      res.write(chunk);
    });

    downloadStream.on("end", () => {
      res.end();
    });

    downloadStream.on("error", (err) => {
      console.error("Error downloading image:", err);
      res.status(404).json({ error: "Image not found" });
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
