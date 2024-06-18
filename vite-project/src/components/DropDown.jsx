import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { TextField, MenuItem } from '@mui/material';


export const DropDown = ({ setTopics }) => {
  const handleChange = (event) => {
    setTopics(event.target.value);
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

  return (
    <TextField
      select
      label="Select Topic"
      value=""
      onChange={handleChange}
      variant="outlined"
      fullWidth
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

  );
};