import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";

function App() {
  const [SearchQuery, setSearchQuery] = useState<string | null>("");

  return (
    <div className="App">
      <h1> Movie Search APP</h1>
      <SearchBar SetUserInput={(a: string) => setSearchQuery(a)} />
    </div>
  );
}

export default App;
