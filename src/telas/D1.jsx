import React from "react";
import { Button, Grid } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import img from "../assets/img/D1.svg";

import "../assets/css/base.css";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
const D1 = () => {
  return (
    <Grid container className="containerMaior">
      <Grid item>
        <BotaoVoltarSuperior className="D1voltar" />
      </Grid>
      <Grid container className="container">
        <h1 className="tituloOnboarding">Atendimento</h1>
      </Grid>
      <Grid item>
        <img src={img} className="ilustracao" />
      </Grid>
      <Grid container className="D1container">
        <h2 className="D1titulo">Como podemos te ajudar?</h2>
        <p className="A1body2">
          Está precisando de ajuda? Marque um horário de atendimento conosco e
          vamos conversar!
        </p>
      </Grid>

      <Grid container className="D1botoes">
        <Grid item>
          <Button href="D2" variant="contained">
            Agendar Atendimento
          </Button>
        </Grid>
        <Grid item className="D1botaoindividual">
          <Button href="D4" variant="contained">
            Consultar Atendimento
          </Button>
        </Grid>
      </Grid>

      <BotaoDoPanico />

      <Grid className="EspacoInferior" />
      <MenuInferior />
    </Grid>
  );
};

export default D1;
