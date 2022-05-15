import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

const D4 = () => {
  return (
    <Grid container>
      <BotaoVoltarSuperior />
      <Grid item xs={8}>
        <TextField
          label="Protocolo"
          variant="outlined"
          style={{
            width: 300,
          }}
        />
      </Grid>
      <Grid>
        <overline>
          Para confirmar data e horário do seu atendimento, basta inserir o
          número de protocolo que te enviamos por WhatsApp.
        </overline>
      </Grid>

      <Grid item xs={12}>
        <BotaoDoPanico />
        <MenuInferior />
      </Grid>
    </Grid>
  );
};

export default D4;
