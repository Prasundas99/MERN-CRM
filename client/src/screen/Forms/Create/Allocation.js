import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from '../../../styles/loginPageStyling';

function Allocation() {
    const classes = useStyles();

    return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      
      <Paper className={classes.paper} elevation = {5}>
      <div >
        <form className={classes.form} noValidate>
        <Typography align='left' variant='h6'>Add New Customer-Product</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
          >
            Submit
          </Button>
        </form>
      </div>
      </Paper>
    </Container>
    )
}

export default Allocation;
