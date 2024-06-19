import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import { CommentList } from "./CommentList";
import { PostComment } from "./PostComment";
import { postLike } from "../utils/api";

export const FullArticle = ({ id, articleDetails, setArticleDetails }) => {
  const [like, setLike] = useState(false);
  const [vote, setVotes] = useState(Number(articleDetails.votes) || 0);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [likeLoading, setLikeLoading] = useState(false); // Separate loading state for like button
  const numericalId = Number(id);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  const handleClick = (event) => {
    if (!like && !likeLoading) {
      setLike(true);
      setLikeLoading(true);
      const newVoteCount = vote + 1;
      setVotes(newVoteCount);

      postLike(numericalId, { inc_votes: 1 })
        .then((response) => {
          setVotes(response.votes);
          setLikeLoading(false);
        })
        .catch((error) => {
          console.error("Error posting like:", error);
          setLike(false);
          setVotes(vote);
          setLikeLoading(false);
        });
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2, backgroundColor: 'lightgray' }}>
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
          <Badge
            onClick={handleClick}
            badgeContent={vote}
            max={99}
            sx={{ cursor: "pointer" }}
          >
            {likeLoading ? (
              <CircularProgress size={24} />
            ) : like ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </Badge>
          <Typography variant="h6" component="div">
            {new Date(articleDetails.created_at).toLocaleDateString()}
          </Typography>
        </Box>
        <PostComment id={id} />
        <CommentList id={id} />
      </CardContent>
    </Card>
  );
};