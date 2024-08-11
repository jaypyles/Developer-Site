import React, { useState, useEffect } from "react";
import { Avatar, Typography } from "@mui/material";
import StyledBadge from "./StyledBadge";
import { getDiscordStatus } from "src/lib/UtilFunctions";
import Image from "next/image";

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

interface DiscordProps {
  loadedState: {
    loaded: boolean;
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Discord: React.FC<DiscordProps> = ({ loadedState }) => {
  const [data, setData] = useState<DiscordData | null>(null);
  const { loaded, setLoaded } = loadedState;

  useEffect(() => {
    const fetchDiscord = async () => {
      try {
        const status = await getDiscordStatus();
        setData(status);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching Discord status:", error);
      }
    };

    fetchDiscord();
  }, []);

  return (
    <div className="discord">
      {loaded && data && (
        <div className="discord-status">
          <div className="content">
            <div className="avatar">
              <StyledBadge
                overlap="circular"
                variant="dot"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                color={
                  data.discord_status === "online"
                    ? "success"
                    : data.discord_status === "dnd"
                    ? "error"
                    : data.discord_status === "idle"
                    ? "warning"
                    : "default"
                }
              >
                <Avatar
                  sx={{ height: "100%", width: "100%" }}
                  src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`}
                />
              </StyledBadge>
            </div>
            <div className="user flex flex-col justify-start w-1/2">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {data.discord_user.display_name}
              </Typography>
              <div className="flex flex-row align-middle">
                {data.activities[0]!.emoji && (
                  <Image
                    className="mr-[0.15rem] h-fit"
                    alt="Discord Status Emoji"
                    height={16}
                    width={12}
                    src={`https://cdn.discordapp.com/emojis/${
                      data.activities[0]!.emoji.id
                    }`}
                  ></Image>
                )}
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{ color: "gray", fontSize: "0.75em", lineHeight: 1 }}
                >
                  {data.activities[0]!.state}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discord;
