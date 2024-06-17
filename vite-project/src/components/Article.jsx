import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { FullArticle } from "./FullArticle";

export const Article = (articleId) => {
  const { id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  console.log(articleDetails);

  useEffect(() => {
    getArticleById(id).then((data) => {
      setArticleDetails(data[0]);
    });
  }, [id]);



  return (
  <>
  <FullArticle articleDetails={articleDetails}/>
  </>
  );
};
