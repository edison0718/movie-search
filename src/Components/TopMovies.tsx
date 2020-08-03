import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";
import "./TopMovies.css";

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
    let new_results = results.map((r) => {
      return { id: r.id, title: r.title, imageURL: r.poster_path };
    });
    setItemArray(new_results);
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
    // console.log("hi");
  }, []);

  var Cards: JSX.Element[] = [];
  ItemArray.forEach((el: IState, i: Number) => {
    if (!el) {
      return;
    }
    Cards.push(
      <Grid
        key={"card_" + i}
        item
        sm={2}
        md={2}
        lg={2}
        className="MediaGridCard"
      >
        <MovieCard id={el.id} title={el.title} imageURL={el.imageURL} />
      </Grid>
    );
  });

  return (
    <div className="App">
      <h3> Top Rated 5 Movies</h3>
      <Grid
        container
        justify="center"
        spacing={2}
        className="MediaGridContainer"
      >
        {Cards}
      </Grid>
    </div>
  );
}
export default TopMovies;
