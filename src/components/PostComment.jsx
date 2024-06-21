import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { postComment } from "../utils/api";

export const PostComment = ({ id, loggedInUser }) => {
  const [comment, setComment] = React.useState("");
  const [isPosting, setIsPosting] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true);
    postComment(id, { username: loggedInUser.username, body: comment })
      .then((newComment) => {
        setComment("");
        setIsPosting(false);
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
        setIsPosting(false);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Add a comment"
        multiline
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isPosting}
      >
        {isPosting ? "Posting..." : "Post Comment"}
      </Button>
    </Box>
  );
};