import type { NextApiRequest, NextApiResponse } from "next";

interface Status {
  state: string;
  emoji: {
    id: string;
  };
}

interface DiscordData {
  discord_status: string;
  discord_user: {
    id: string;
    avatar: string;
    username: string;
    display_name: string;
  };
  activities: Status[];
}
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const url = `https://api.lanyard.rest/v1/users/${process.env.NEXT_PUBLIC_DISCORD_USER_ID}`;

  try {
    const response = await fetch(url);
    const status: { data: DiscordData } = await response.json();
    res.status(200).json(status.data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
