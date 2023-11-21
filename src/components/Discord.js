import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Avatar, Badge, Typography } from "@mui/material";
import StyledBadge from "./StyledBadge";

const Discord = () => {
  const [data, setData] = useState(null);
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
        <div className="status">
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
