import React, { useState, useEffect } from "react";
import { Avatar, Typography } from "@mui/material";
import StyledBadge from "./StyledBadge";

interface Data {
  discord_status: string;
  discord_user: {
    id: string;
    avatar: string;
    username: string;
  };
}

const Discord: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const domain = process.env.REACT_APP_DOMAIN;
  const url = `${domain}/api/discord/status`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="discord">
      {!loading && data && (
        <div className="discord-status">
          <div className="title">
            <p>Discord Status</p>
          </div>
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
            <div className="user">
              <Typography variant="h6">
                {data.discord_user.username}
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{ color: "gray" }}
                >
                  #1337
                </Typography>
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discord;
