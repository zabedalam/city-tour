import React from "react";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

interface Data {
  id: number;
  name: string;
  img: string;
}

const useStyles = makeStyles({
  root: {},
  media: {
    height: 240,
    width: "auto",
    margin: 10,
  }
});
const HomeDetails = (props: Data): any => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.img} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeDetails;
