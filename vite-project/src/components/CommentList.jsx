import { getCommentsByArticleId } from "../utils/api";
import { CommentBody } from "./CommentBody";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

export const CommentList = ({ id }) => {
  const [commentState, setCommentState] = useState([]);

  console.log(typeof id);
  useEffect(() => {
    getCommentsByArticleId(id).then((data) => {
      console.log(data);
      setCommentState(data);
    });
  }, [id]);

  return (
    <Box>
      {commentState.map((comment) => {
        return <CommentBody comment={comment} />;
      })}
    </Box>
  );
};
