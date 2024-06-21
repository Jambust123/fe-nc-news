import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { TextField, MenuItem, Box } from "@mui/material";
import { Sort } from "./Sort";

export const DropDown = ({ setTopics, setArticles }) => {
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
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        select
        label="Select Topic"
        value=""
        onChange={handleChange}
        variant="outlined"
        fullWidth
        sx={{
          marginTop: "20px",
          backgroundColor: "green",
          "& .MuiInputLabel-root": { color: "white" },
          "&:hover": { backgroundColor: "purple" },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Sort setArticles={setArticles} />
    </Box>
  );
};
