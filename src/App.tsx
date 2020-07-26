import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import TopMovies from "./Components/TopMovies";
import ResultMovies from "./Components/ResultMovies";
import { IUserinput } from "./Components/interface";

function App() {
  const [UserInput, setUserInput] = useState<IUserinput>({
    search: "Batman",
  });

  function SetUserInput(a: IUserinput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <h1> Movie Search APP</h1>
      <SearchBar SetUserInput={(a: IUserinput) => setUserInput(a)} />
      <TopMovies />
      <ResultMovies search={UserInput.search} />
    </div>
  );
}

export default App;
