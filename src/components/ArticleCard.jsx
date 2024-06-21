import React from 'react';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ArticleCard = ({ article, setArticleId }) => {
  const navigate = useNavigate();

  if (!article) return null;

  const handleClick = (event) => {
    setArticleId(event.target.id);
    navigate(`/article/${event.target.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '20px',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
        },
      }}
    >
      <CardActionArea onClick={handleClick} value={article.article_id}>
        <CardMedia
          component="img"
          height="200"
          id={article.article_id}
          image={article.article_img_url}
          alt={article.title}
          sx={{
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        />
        <CardContent
          sx={{
            backgroundColor: '#f5f5f5',
            padding: '10px', // Reduced padding
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontStyle: 'italic',
              color: '#666',
            }}
          >
            Author: {article.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const ArticleList = ({ articles, setArticleId }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={4} key={article.article_id}>
          <ArticleCard article={article} setArticleId={setArticleId} />
        </Grid>
      ))}
    </Grid>
  );
};