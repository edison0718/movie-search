import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import TopMovies from "./Components/TopMovies";
import ResultMovies from "./Components/ResultMovies";

function App() {
  const [userInput, setUserInput] = useState<String | null>("");

  return (
    <div className="App">
      <h1> Movie Search APP</h1>
      <SearchBar SetUserInput={(a: string | null) => setUserInput(a)} />
      <TopMovies />
      <ResultMovies search={userInput} />
    </div>
  );
}

export default App;
