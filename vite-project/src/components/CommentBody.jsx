import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { deleteComment } from "../utils/api";

export const CommentBody = ({ comment, loggedInUser }) => {
  const [noComment, setNoComment] = React.useState(false);

  const handleClick = (event) => {
    setNoComment(true);
    deleteComment(comment.comment_id);
  };

  if (noComment && comment.author === loggedInUser.username)
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
          {loggedInUser.username === comment.author && (
            <Tooltip title="Delete Comment" arrow>
              <IconButton
                onClick={handleClick}
                color="error"
                sx={{
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};