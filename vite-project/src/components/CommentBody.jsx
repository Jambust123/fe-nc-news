import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { deleteComment } from "../utils/api";

export const CommentBody = ({ comment }) => {
  const [noComment, setNoComment] = React.useState(false);

  const handleClick = (event) => {
    setNoComment(true);
    deleteComment(comment.comment_id);
  };

  if (noComment)
    return (
      <Card sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Comment Deleted!
          </Typography>
        </CardContent>
      </Card>
    );

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
          <Button onClick={handleClick} size="md" color="danger">
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
