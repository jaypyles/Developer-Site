import React from "react";
import { Paper, Typography, Card, CardContent, CardMedia } from "@mui/material";

// Define an interface for the component props
interface CardPostProps {
  img: string;
  description: string;
  date: string;
}

const CardPost: React.FC<CardPostProps> = ({ img, description, date }) => {
  return (
    <Paper elevation={2}>
      <Card className="p-2">
        <CardMedia component="img" image={img} alt={description} />
        <CardContent>
          {description}
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CardPost;
