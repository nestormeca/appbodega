import { Container, AppBar, Typography } from "@mui/material";
import React from "react";
import useStyles from "../styles";

export const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Bodega Colina
        </Typography>
        {/* <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        /> */}
      </AppBar>
    </Container>
  );
};
