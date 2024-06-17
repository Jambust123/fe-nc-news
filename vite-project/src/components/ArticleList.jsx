import { getAllArticles } from "../utils/api";
import * as React from "react";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = (topics) => {
  const [articles, setArticles] = useState([]);
  const [articleId, setArticleId] = useState("");
console.log(articleId);


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
<ul>
    {articles.map((article) => {
        return(
    <ArticleCard article={article} setArticleId={setArticleId} />
)})}
</ul>
)

};

