import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

const fakeToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const generateClassName = createGenerateClassName({
  seed: "signin",
});

const SignIn = () => {
  let navigate = useNavigate();

  const onSignIn = () => {
    window.sessionStorage.setItem("token", fakeToken);
    navigate("/shop");
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Grid
        container={true}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "60vh", minWidth: "500px" }}
      >
        <form>
          <div>
            <Typography component="p">Username</Typography>
            <TextField id="username" />
          </div>
          <div>
            <Typography component="p">Password</Typography>
            <TextField
              id="password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <br />
          <Button variant="contained" onClick={onSignIn}>
            Sign in
          </Button>
        </form>
      </Grid>
    </StylesProvider>
  );
};

export default SignIn;
