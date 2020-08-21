import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  form: {
    padding: "20px"
  },
  textfield: {
    background: "white"
  },
  btn: {
    padding: "3% 5%",
    float: "left",
    background: "rgb(255, 224, 102)",
    color: "rgb(112, 112, 112)"
  }
});

export default function Form() {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="firstName"
            variant="filled"
            fullWidth
            id="fName"
            label="First Name"
            autoFocus
            className={classes.textfield}
            color="secondary"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastName"
            variant="filled"
            fullWidth
            id="lName"
            label="Last Name"
            className={classes.textfield}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className={classes.textfield}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            fullWidth
            id="phone"
            label="Phone"
            name="email"
            autoComplete="phone"
            className={classes.textfield}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            fullWidth
            id="country"
            label="Country"
            name="country"
            autoComplete="country"
            className={classes.textfield}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className={classes.btn}>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
