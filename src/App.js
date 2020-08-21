import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import Header from "./components/Header";
import Featuring from "./components/Featuring";
import Form from "./components/Form";
import Footer from "./components/Footer";

const useStyles = makeStyles({
  App: {
    padding: "0px",
    margin: "0px"
  },
  root: {
    padding: "0px",
    margin: "0px",
    fontFamily: "Roboto, sans-serif",
    background: "linear-gradient(rgb(235, 159, 93) 0%,rgb(165, 53, 27) 86%)",
    width: "100%",
    height: "100vh"
  },
  logo: {
    width: "100%",
    maxWidth: "150px"
  },
  footer: {}
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Header></Header>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Featuring></Featuring>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form></Form>
          </Grid>
        </Grid>
        <Footer></Footer>
      </div>
    </div>
  );
}
