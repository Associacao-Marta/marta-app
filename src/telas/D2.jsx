import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

const D2 = () => {
  return (
    <Grid container>
      <BotaoVoltarSuperior />
      <Grid item xs={12}>
        <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
          Nos conte um pouco sobre você
        </subtitle1>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="column">
          <TextField
            label="Nome Completo"
            variant="outlined"
            style={{
              width: 300,
            }}
          />
          <TextField
            label="Telefone"
            variant="outlined"
            style={{
              width: 300,
            }}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            multiline
            rows={4}
            style={{
              width: 300,
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
          Com que profissional gostaria de falar?
        </subtitle1>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={12}>
          <Button variant="contained">psicóloga</Button>
          <Button variant="contained">advogada</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
          Quando gostaria de ser atendida?
        </subtitle1>
      </Grid>
      <Grid item xs={12}>
        calendario
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ margin: 5 }}>
          Enviar
        </Button>
      </Grid>
      <Grid item xs={12}>
        <BotaoDoPanico />
        <MenuInferior />
      </Grid>
    </Grid>
  );
};

export default D2;
