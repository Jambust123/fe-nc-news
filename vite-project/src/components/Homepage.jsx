import { useState } from "react";
import { DropDown } from "./DropDown";
import { ArticleList } from "./ArticleList";

export const Homepage = () => {
  const [topics, setTopics] = useState("");

  return (
    <div>
      <h2>homepage</h2>
      <label>
        viewing the topic:
        <DropDown setTopics={setTopics} />
      </label>
      <ul>
        <ArticleList topics={topics} />
      </ul>
    </div>
  );
};
