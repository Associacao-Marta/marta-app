import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import PopUpD4 from "../components/PopUpD4";

const D4 = () => {
  const [protocolo, setProtocolo] = React.useState("");

  return (
    <Grid container>
      <Grid item>
        <BotaoVoltarSuperior className="D1voltar" />
      </Grid>
      <Grid className="EspacoInferior" />
      <Grid container className="D2form">
        <TextField label="Protocolo" variant="outlined" className="D2caixa" onChange={(event) => {setProtocolo(event.target.value)}}/>
      </Grid>

      <Grid container>
        <p className="D4p">
          Para confirmar data e horário do seu atendimento, basta inserir o
          número de protocolo que te enviamos por WhatsApp.
        </p>
      </Grid>
      <Grid className="EspacoInferior" />

      <Grid container className="D2botoes">
        <Grid item>
          <PopUpD4 protocolo={protocolo}/>
        </Grid>
        <Grid className="EspacoInferior" />
      </Grid>
      <BotaoDoPanico />

      <MenuInferior />
    </Grid>
  );
};

export default D4;
