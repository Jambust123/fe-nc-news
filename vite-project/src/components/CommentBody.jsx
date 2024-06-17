import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const CommentBody = ({ comment }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {comment.author}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          {comment.body}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {new Date(comment.created_at).toLocaleDateString()}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body2" component="div">
            Votes: {comment.votes}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};