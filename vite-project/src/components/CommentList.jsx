import { getCommentsByArticleId } from "../utils/api";
import { CommentBody } from "./CommentBody";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

export const CommentList = ({ id }) => {
  const [commentState, setCommentState] = useState([]);
  useEffect(() => {
    getCommentsByArticleId(id)
      .then((data) => {
        setCommentState(data);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setCommentState([]); // Ensure commentState is an array even if there's an error
      });
  }, [id]);

  return (
    <Box>
      {commentState.map((comment) => {
        return <CommentBody key={comment.comment_id} comment={comment} />;
      })}
    </Box>
  );
};
