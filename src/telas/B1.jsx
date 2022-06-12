import { Button, Grid, Checkbox } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import Pontos from "../components/Pontos";

const B1 = () => {
  return (
    <Grid container className="A1">
      <Grid className="A1h1">
        <h1>Termos de Uso</h1>
      </Grid>
      <Grid container className="B1ilustracao">
        <CircleIcon sx={{ fontSize: "200px" }} />
      </Grid>
      <Grid item>
        <body2 className="A1body2">
          Antes de continuar, precisamos que leia e aceite os Termos de Uso.
        </body2>
      </Grid>
      <Grid item>
        <body1 className="B1body1">
          <Checkbox /> Li e Aceito os Termos de Uso.
        </body1>
      </Grid>
      <Grid item>
        <Button href="C1" className="B1finalizar" variant="contained">
          Finalizar
        </Button>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default B1;
