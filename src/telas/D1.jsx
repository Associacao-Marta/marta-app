import React from "react";
import { Button, Grid } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import img from "../assets/img/D1.svg";

import "../assets/css/base.css";
import Header from "../components/Header";

const D1 = () => {
  return (
    <Grid container className="containerMaior">
      <Header titulo="Atendimento"/>
      {/* <Grid item>
        <TopButton className="D1voltar" />
      </Grid> */}
      <Grid item>
        <img src={img} className="ilustracao" />
      </Grid>
      <Grid container className="D1container">
        <h2 className="D1titulo">Marque um horário gratuito com a Associação Marta</h2>
        <p className="A1body2">
        Está precisando de ajuda? Temos serviços psicológicos e jurídicos gratuitos para você!
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
