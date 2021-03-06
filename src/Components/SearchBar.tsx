import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

interface ISearchBarProps {
  SetUserInput: (a: string | null) => void;
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
      <Grid container justify="center" spacing={1}>
        <TextField
          required
          id="outlined-required"
          label="Search movie name.."
          variant="outlined"
          value={SearchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Search
        </Button>
      </Grid>
    </div>
  );
}

export default SearchBar;
