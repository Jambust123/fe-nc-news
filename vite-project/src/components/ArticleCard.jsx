import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export const ArticleCard = ({ article, setArticleId }) => {
  const navigate = useNavigate();

  if (!article) return null;
  const handleClick = (event) => {
    setArticleId(event.target.id);
    navigate(`/article/${event.target.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick} value={article.article_id}>
        <CardMedia
          component="img"
          height="140"
          id={article.article_id}
          image={article.article_img_url}
          alt={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            author: {article.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
