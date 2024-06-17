import { getAllArticles } from "../utils/api";
import * as React from "react";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";
import { ArticleCard } from "./ArticleCard";
import Box from "@mui/material/Box";

export const ArticleList = ({ topics, setArticleId }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((allArticles) => {
        setArticles(allArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topics]);

  return (
    <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }} >
      {articles.map((article) => {
        return <ArticleCard key={article.article_id } article={article} setArticleId={setArticleId} />;
      })}
    </Box>
  );
};
