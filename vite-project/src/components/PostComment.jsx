import * as React from "react";
import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import { postComment } from "../utils/api";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";

export const PostComment = ({ id }) => {
  const [newComment, setNewComment] = React.useState("");
  const [commentSubmitted, setCommentSubmitted] = React.useState(false);
  const numericalId = Number(id);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newComment.trim()) {
      alert("Comment cannot be empty");
      return;
    }

    const commentBody = {
      author: "weegembump",
      body: newComment,
    };

    if (!commentSubmitted) {
      setCommentSubmitted(true);
      postComment(numericalId, commentBody).then((response) => {
        if (response) alert("Comment posted");
      });
      setNewComment("");
      setTimeout(() => {
        setCommentSubmitted(false);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Post a comment here..."
        value={newComment}
        required
        onChange={(event) => setNewComment(event.target.value)}
        endDecorator={
          <LocalPostOfficeRoundedIcon
            onClick={(event) => {
              event.stopPropagation();
              if (newComment.trim()) {
                handleSubmit(event);
              } else {
                alert("Comment cannot be empty");
              }
            }}
            style={{ cursor: "pointer" }}
          />
        }
        sx={{
          "--Input-minHeight": "56px",
          "--Input-radius": "6px",
          border: "1px solid #ccc",
          padding: "0 12px",
          display: "flex",
          alignItems: "center",
        }}
      />
    </form>
  );
};