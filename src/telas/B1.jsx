import { Button, Grid, Checkbox } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import MenuInferior from "../components/MenuInferior";

import ilustracao from "../assets/img/B1.svg";

const B1 = () => {
  return (
    <Grid container className="containerMaior">
      <Grid container className="container">
        <h1 className="tituloOnboarding">Termos de Uso</h1>
      </Grid>
      <Grid container className="container">
        <img src={ilustracao} className="ilustracao" />
      </Grid>
      <Grid item>
        <body2 className="A1body2">
          Antes de continuar, precisamos que leia e aceite os Termos de Uso.
          <br />
          <br />
          <br />
          <Checkbox />
          Li e Aceito os Termos de Uso.
        </body2>
      </Grid>
      <Grid container className="botaoOnboarding">
        <Grid item>
          <Button variant="contained" href="C1">
            Finalizar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default B1;
