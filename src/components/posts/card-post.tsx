import React from "react";
import { Paper, Typography, Card, CardContent, CardMedia } from "@mui/material";

interface CardPostProps {
  img: string;
  description: string;
  date: string;
}

export const CardPost: React.FC<CardPostProps> = ({
  img,
  description,
  date,
}) => {
  return (
    <Paper elevation={2}>
      <Card className="p-2">
        <CardMedia component="img" image={img} alt={description} />
        <CardContent>
          <p className="!font-prompt">{description}</p>
          <Typography variant="body2" color="text.secondary">
            <p className="!font-prompt">{date}</p>
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
