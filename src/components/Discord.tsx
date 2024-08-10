import React, { useState, useEffect } from "react";
import { Avatar, Typography } from "@mui/material";
import StyledBadge from "./StyledBadge";
import { getDiscordStatus } from "src/lib/UtilFunctions";
import { DiscordData } from "src/lib/types";

interface DiscordProps {
  loadedState: {
    loaded: boolean;
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Discord: React.FC<DiscordProps> = ({ loadedState }) => {
  const [data, setData] = useState<DiscordData | null>(null);
  //t

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
            <div className="user flex items-center">
              <Typography
                variant="h6"
                style={{ marginRight: 8, fontWeight: "bold" }}
              >
                {data.discord_user.username}
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                sx={{ color: "gray" }}
              >
                #1337
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discord;
