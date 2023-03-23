import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import debounce from "lodash/debounce";
import React from "react";

export function SearchField({ placeholder = "Search...", onSearchChange }) {
  const handleSearchChange = debounce((e) => {
    onSearchChange?.(e.target.value);
  }, 600);

  return (
    <TextField
      sx={{
        width: "100%",
        minWidth: "200px",
      }}
      size="medium"
      placeholder={placeholder}
      onChange={handleSearchChange}
      InputProps={{
        "aria-label": "Search...",
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="large" />
          </InputAdornment>
        ),
      }}
    />
  );
}
