import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { useStyles } from "../../styles/loginPageStyling";

// API connection
import { emailVerify } from "./helper/auth";
import { useHistory } from "react-router";

export default function ForgetPass() {
  const [email, setEmail] = useState("");

  const history = useHistory();

  const verifyEmail = async (e) => {
    e.preventDefault();

    await emailVerify({
      email: email,
    })
      .then((data) => {
        console.log(data.accessToken);
        history.push(`/reset-password/${data.accessToken}`);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <div>
          <form className={classes.form} noValidate>
            <Typography align="left" variant="h6">
              Seems Like you are lost !
            </Typography>
            <Typography align="center" variant="body2">
              {" "}
              Enter your email and recover your Password{" "}
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={verifyEmail}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/LogIn" variant="body2">
                  Remembered your password?
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
      </Paper>
    </Container>
  );
}
