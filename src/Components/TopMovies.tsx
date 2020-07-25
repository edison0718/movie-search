import React, { useState, useEffect } from "react";

interface IState {
  id: number;
  title: String;
  imageURL: string;
}

function TopMovies() {
  const [ItemArray, setItemArray] = useState<IState[]>([
    { id: 0, title: "", imageURL: "" },
  ]);

  function TopFive(results: any[]) {
    results = results.slice(0, 5);
    console.log(results);
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
        process.env.REACT_APP_API_KEY +
        "&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        TopFive(response.results);
      })
      .catch(() => console.log("it didn't work"));
  });

  return (
    <div className="App">
      <h3> Top 5 Movies</h3>
    </div>
  );
}

export default TopMovies;
