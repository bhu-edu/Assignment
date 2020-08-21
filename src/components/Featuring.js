import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
const useStyles = makeStyles({
  root: {
    padding: "8%",
    color: "white"
  },
  speakers: {
    border: "solid 1px white",
    borderRadius: "25px",
    padding: "10%"
  }
});

export default function Featuring() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <h4>Featuring</h4>
      </Grid>
      <Grid item xs={12} sm={7}>
        <div className={classes.speakers}>
          <center>
            <PeopleAltIcon fontSize="large" />
            <h4>162+ Expert Speakers</h4>
          </center>
        </div>
      </Grid>
    </Grid>
    /*
    <Grid container spacing={1} direction="row" justify="center" alignItems="center">
      
      <Grid item xs={12} sm={6} className={classes.title}>
        
      </Grid>
      <Grid item xs={12} sm={10} className={classes.title}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h3>
              ANNUAL CONFERENCE OF INTRAOCULAR IMPLANT & REFRACTIVE SOCIETY
            </h3>
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
    </Grid>*/
  );
}
