import React from "react";
import { makeStyles,Button,Link } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    margin: "auto",
    marginTop:20,
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="error">
        <AlertTitle>404</AlertTitle>
        <strong>Not Found!</strong>
        <Link href="/home"><Button>Back to home</Button></Link>
      </Alert>
    </div>
  );
};

export default NotFound;
