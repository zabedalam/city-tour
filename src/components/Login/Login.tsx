import React, { useState } from "react";
import {
  Grid,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
  makeStyles,
  CssBaseline,
  Box,
  Container
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Header from "../Header/Header";
import {
  initializeLoginFrameWork,
  signInWithEmailAndPassword
} from "../Firebase/LoginManager";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
interface EventTarget {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
}

interface UserInfo {
  isSignedIn: boolean,
  name: string,
  email: string,
  password: string,
  error: string,
  success: boolean,
  target: EventTarget
}
// let Data:(string | number|boolean)[]=[]
// interface UserInfo {
//   isSignedIn: boolean;
//   name: string;
//   email: string;
//   password: string;
//   error: string;
//   success: boolean;
//   target: EventTarget;
// }
const Login = (person: UserInfo) => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  initializeLoginFrameWork();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then(res => {
        handleResponse(res);
      });
    }
  };

  const handleResponse = (res: any) => {
    setUser(res);
  };

  const handleBlur = (e: UserInfo) => {
    let isFormValid = true;
    let target = e.target as HTMLInputElement;
    if (target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(target.value);
    }
    if (target.name === "password") {
      const isPasswordValid = target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[target.name] = target.value;
      setUser(newUserInfo);
    }
  };
  const { paper, avatar, form, submit } = useStyles();
  return (
    <div>
      {" "}
      <Header></Header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={paper}>
          <Avatar className={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default Login;
