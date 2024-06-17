import { getTopics } from "../utils/api";
import Select from "react-select";
import { useState, useEffect } from "react";

export const DropDown = ({ setTopics }) => {
  const handleChange = (event) => {
    setTopics(event.value);
  };

  const [options, setOptions] = useState([]);
  useEffect(() => {
    getTopics().then((topicsArr) => {
      const newOptions = topicsArr.map((topics) => {
        return { value: topics.slug, label: topics.slug };
      });
      setOptions(newOptions);
    });
  }, []);
  return <Select options={options} onChange={handleChange} />;
};
