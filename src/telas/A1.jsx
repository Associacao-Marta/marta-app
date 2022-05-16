import React from "react";
import { Button, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "../assets/css/base.css";
import Pontos from "../components/Pontos";

const A1 = () => {
  return (
    <Grid container className="A1">
      <Grid className="A1h1">
        <h1>Bem-vinda!</h1>
      </Grid>
      <Grid container className="A1ilustracao">
        <CircleIcon sx={{ fontSize: "200px" }} />
      </Grid>
      <Grid item>
        <body2 className="A1body2">
          Olá! Seja bem-vinda ao aplicativo da Associação Marta. Nossa missão é
          atuar na prevenção e conscientização da violência estrutural contra a
          mulher.
        </body2>
      </Grid>
      <Grid item>
        <Button href="B1" className="A1pular">
          Pular
        </Button>
      </Grid>
      <Grid item>
        <Pontos />
      </Grid>
    </Grid>
  );
};

export default A1;
