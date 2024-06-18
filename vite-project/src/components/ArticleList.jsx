import { getAllArticles, getArticlesByTopics } from "../utils/api";
import * as React from "react";
import { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export const ArticleList = ({ topics, setArticleId }) => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (!topics) {
      getAllArticles()
        .then((allArticles) => {
          setArticles(allArticles);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getArticlesByTopics(topics)
        .then((allArticles) => {
          setArticles(allArticles);
          navigate(`/homepage/${topics}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [topics]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {articles.map((article) => {
        return (
          <ArticleCard
            key={article.article_id}
            article={article}
            setArticleId={setArticleId}
          />
        );
      })}
    </Box>
  );
};
