import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";

const useStyles = makeStyles({
  root: {
    padding: "5px"
  },
  logo: {
    width: "100%",
    maxWidth: "150px"
  },
  title: {
    color: "white"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={2}>
        <img
          src="https://www.iirsi.com/_next/static/images/logo-5901b33682341a53d73542a164f7ee7b.png"
          alt="iirsi"
          className={classes.logo}
        />
      </Grid>
      <Grid item xs={12} sm={10} className={classes.title}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <center>
              <h1>
                ANNUAL CONFERENCE OF INTRAOCULAR IMPLANT & REFRACTIVE SOCIETY
              </h1>
            </center>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <EventNoteOutlinedIcon />
              <Typography>19 - 20 September 2020</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
