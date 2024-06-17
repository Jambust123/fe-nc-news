import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CommentList } from "./CommentList";

export const FullArticle = ({ id, articleDetails }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          {articleDetails.topic}
        </Typography>
        <Typography variant="h2" component="div" gutterBottom>
          {articleDetails.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          By {articleDetails.author}
        </Typography>
        <CardMedia
          component="img"
          height="400"
          image={articleDetails.article_img_url}
          alt={articleDetails.title}
          sx={{ borderRadius: 2, mb: 2 }}
        />
        <Typography variant="body1" component="p" gutterBottom>
          {articleDetails.body}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" component="div">
            Votes: {articleDetails.votes}
          </Typography>
          <Typography variant="h6" component="div">
            {new Date(articleDetails.created_at).toLocaleDateString()}
          </Typography>
        </Box>
      <CommentList id={id} />
      </CardContent>
    </Card>
  );
};
