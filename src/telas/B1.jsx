import { Typography } from "@mui/material";
import { Button, Grid, Checkbox } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";

const B1 = () => {
  return (
    <Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Bem-vinda!</h1>
        </Grid>
        <Grid item xs={12}>
          <CircleIcon sx={{ fontSize: "200px" }} />
        </Grid>
        <Grid item xs={12}>
          <body2>
            Antes de continuar, precisamos que leia e aceite os Termos de Uso.
          </body2>
        </Grid>
        <Grid item xs={12}>
          <CircleIcon sx={{ fontSize: "8px" }} />
          <CircleIcon sx={{ fontSize: "8px" }} />
          <CircleIcon sx={{ fontSize: "8px" }} />
        </Grid>
        <Grid item xs={12}>
          <Checkbox />
          <body1>Li e Aceito os Termos de Uso.</body1>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" href="#A2">
            FINALIZAR
          </Button>
        </Grid>
      </Grid>
    </Typography>
  );
};

export default B1;
