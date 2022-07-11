import React from "react";
import { Button, Grid } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Header from "../components/Header";
import img from "../assets/img/D1.svg";
import "../assets/css/base.css";
import "../assets/css/D.css";

const D1 = () => {
  return (
    <Grid container className="pageDContainer">
      <Header titulo="Atendimento" backButton={true} destino="C1" />

      <Grid item container className="ilustracao">
        <img src={img} />
      </Grid>

      <Grid container className="tituloContainer">
        <Grid container
          className="tituloH1"
          style={{ color: "#337066", paddingBottom: "8px", justifyContent: "center" }}
        >
          Marque um horário gratuito com a Associação Marta
        </Grid>
        <Grid className="body2">
          Está precisando de ajuda? Temos serviços psicológicos e jurídicos
          gratuitos para você!
        </Grid>
      </Grid>

      <Grid container >
        <Grid container className="buttonContainer">
          <Button href="D2" variant="contained" className="agendarAtendimentoButton"  sx={{ borderRadius: 8 }}>
            Agendar Atendimento
          </Button>
        </Grid>
        <Grid container className="buttonContainer">
          <Button href="D3">Consultar Atendimento</Button>
        </Grid>
        <div style={{margin: "50px"}} />
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default D1;
