import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./SearchBar.css";

interface ISearchBarProps {
  SetUserInput: (a: string) => void;
}

function SearchBar(props: ISearchBarProps) {
  const [SearchQuery, setSearchQuery] = useState<string | null>("");
  const handleSearchQueryChange = (s: string | null) => {
    setSearchQuery(s);
  };

  const handleSubmit = () => {
    if (
      SearchQuery?.length !== 0 &&
      SearchQuery !== null &&
      SearchQuery !== ""
    ) {
      props.SetUserInput(SearchQuery);
    }
  };

  return (
    <div className="SearchBarContainer">
      <TextField
        required
        id="outlined-required"
        label="Search"
        variant="outlined"
        value={SearchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default SearchBar;
