import * as React from "react";
import { Input } from "@mui/material";
import { postComment } from "../utils/api";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";

export const PostComment = ({id}) => {
  const [newComment, setNewComment] = React.useState("");
  const numericalId = Number(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
    const commentBody = {
        author: "weegembump",
        body: newComment,
    };
    postComment(numericalId, commentBody).then((response) => {
        if(response) alert("comment posted")
    })
    setNewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Post a comment here..."
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        endDecorator={
          <LocalPostOfficeRoundedIcon
            onClick={(event) => {
              event.stopPropagation();
              handleSubmit(event);
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