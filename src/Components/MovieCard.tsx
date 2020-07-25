import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 500 / 3 + 100,
    maxHeight: 750 / 3 + 100,
    padding: 0,
  },
  media: {
    height: 750 / 3,
    width: 500 / 3 + 100,
  },
  content: {
    padding: 5,
  },
  action: {},
});

interface MovieCardProps {
  id: number;
  title: String;
  imageURL: string;
}

export default function MovieCard(props: MovieCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={"https://image.tmdb.org/t/p/w500" + props.imageURL}
      />
      <CardContent className={classes.content}>{props.title}</CardContent>
      <CardActions className={classes.action}>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            window.open("https://www.themoviedb.org/movie/" + props.id)
          }
        >
          More Detail
        </Button>
      </CardActions>
    </Card>
  );
}
