import { useState } from "react";
import { DropDown } from "./DropDown";
import { ArticleList } from "./ArticleList";

export const Homepage = ({setArticleId}) => {
  const [topics, setTopics] = useState("");

  

  return (
    <div>
      <h2>homepage</h2>
      <label>
        <DropDown setTopics={setTopics} />
      </label>
      <ul>
        <ArticleList topics={topics} setArticleId={setArticleId}/>
      </ul>
    </div>
  );
};
