import { Typography } from "@mui/material";
import { Button, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import "../assets/css/A.css";
//import "../assets/css/base.css"; //pra saber se tá responsivo
const A1 = () => {
  return (
    //BOLINHAS SÃO STEPPERS. ajeitar isso
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
            Olá! Seja bem-vinda ao aplicativo da Associação Marta. Nossa missão
            é atuar na prevenção e conscientização da violência estrutural
            contra a mulher.
          </body2>
        </Grid>
        <Grid item xs={12}>
          <CircleIcon sx={{ fontSize: "8px" }} />
          <CircleIcon sx={{ fontSize: "8px" }} />
          <CircleIcon sx={{ fontSize: "8px" }} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" href="#A2">
            AVANÇAR
          </Button>
        </Grid>
        <Grid item xs={12}>
          <body2>Pular</body2>
        </Grid>
      </Grid>
    </Typography>
  );
};

export default A1;
