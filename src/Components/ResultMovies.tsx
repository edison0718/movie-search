import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";
import "./TopMovies.css";

interface IState {
  id: number;
  title: String;
  imageURL: string;
}

interface IUserinput {
  search: String | null;
}

function ResultMovies(props: IUserinput) {
  const [ItemArray, setItemArray] = useState<IState[]>([]);

  function Results(results: any[]) {
    let new_results = results.map((r) => {
      return { id: r.id, title: r.title, imageURL: r.poster_path };
    });
    setItemArray(new_results);
  }

  useEffect(() => {
    if (props.search !== "") {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          process.env.REACT_APP_API_KEY +
          "&language=en-US&query=" +
          props.search
      )
        .then((response) => response.json())
        .then((response) => {
          Results(response.results);
        })
        .catch(() => console.log("it didn't work"));
    }
  });

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

  if (ItemArray.length === 0) {
    return <></>;
  } else {
    return (
      <div className="App">
        <h3> Search Results: "{props.search}"</h3>
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
}

export default ResultMovies;
