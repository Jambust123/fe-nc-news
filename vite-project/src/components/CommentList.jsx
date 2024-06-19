import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/joy";
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
        setCommentState([]); 
      });
  }, [id]);

  if(commentState){
    return (
      <Box>
        {commentState.map((comment) => {
          return <CommentBody key={comment.comment_id} comment={comment} />;
        })}
      </Box>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Be the first to comment!
          </Typography>
        </CardContent>
      </Card>
    );
  }
};
