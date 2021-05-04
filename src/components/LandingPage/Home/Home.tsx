import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core/";
import Data from "../Data/Data";
import HomeDetails from "../HomeDetails/HomeDetails";
import BgImage from "../../../images/Bg.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    backgroundImage:`url(${BgImage})`,
    backgroundSize:"cover",
    height:"100vh",
  }
}));
const Home = () => {
  const [data, setData] = useState(Data);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map(data => (
          <Grid item xs={12} sm={6} md={3}>
            <HomeDetails name={data.name} id={data.id} img={data.img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
