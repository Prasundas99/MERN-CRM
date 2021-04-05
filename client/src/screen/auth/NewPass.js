import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { useStyles } from "../../styles/loginPageStyling";

// API connection
import { resetPassword } from "./helper/auth";
import { useHistory, useParams } from "react-router";

export default function NewPass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const params = useParams();
  const history = useHistory();
  const accessToken = params.accessToken;

  const passwordReset = async (e) => {
    e.preventDefault();

    //reset password
    resetPassword({ password: password }, accessToken)
      .then((data) => {
        console.log(data);
        alert(data.message);
        history.push("/login");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
        history.goBack();
      });
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <div>
          <form className={classes.form} noValidate>
            <Typography align="left" variant="h6">
              Add your Neww Password
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="newPass"
              label="New PassWord"
              name="New Password"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="conformnewPass"
              label="Re-enter New PassWord"
              name="Re-enter New Password"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={passwordReset}
            >
              Submit
            </Button>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
