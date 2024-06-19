import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { FullArticle } from "./FullArticle";

export const Article = (articleId) => {
  const { id } = useParams();
  parseInt(id);
  const [articleDetails, setArticleDetails] = useState({});
  useEffect(() => {
    getArticleById(id).then((data) => {
      setArticleDetails(data[0]);
    });
  }, []);



  return (
  <>
  <FullArticle key={id} id={id} articleDetails={articleDetails} setArticleDetails={setArticleDetails}/>
  </>
  );
};
