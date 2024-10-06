import { MongoClient } from "mongodb";

export interface PostDocument {
  image_id: string;
  description: string;
  time_posted: string;
}

const uri = process.env.MONGO_URI;
const options = {};

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client: MongoClient = new MongoClient(uri, options);
const clientPromise: Promise<MongoClient> = client.connect();


export default clientPromise;
