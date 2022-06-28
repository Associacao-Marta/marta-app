import React from "react";
import { Grid, TextField } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import PopUpD4 from "../components/PopUpD4";
import Header from "../components/Header";
import "../assets/css/base.css";
import "../assets/css/D.css";

const D4 = () => {
  const [protocolo, setProtocolo] = React.useState();

  return (
    <Grid container>
      <Header titulo="Consultar atendimento" backButton={true} destino="D1" />

      <Grid container className="pageContainer">
      <Grid container className="protocoloContainer">
        <TextField
        required
        fullWidth
        label="Protocolo"
        variant="outlined"
        onChange={(event) => {setProtocolo(event.target.value)}}/>

        <p className="body2" style={{textAlign: "justify"}}>
          Para confirmar data e horário do seu atendimento, basta inserir o
          número de protocolo que te enviamos por WhatsApp.
        </p>
      </Grid>
    </Grid>

      <Grid container item className="buttonContainer">
          <PopUpD4 protocolo={protocolo}/>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />

    </Grid>
  );
};

export default D4;
