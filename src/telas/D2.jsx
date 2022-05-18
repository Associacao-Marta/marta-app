import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import calendario from "../assets/mock/Picker.svg";
import PopUpD2 from "../components/PopUpD2.jsx";

const D2 = () => {
  return (
    <Grid container>
      <Grid item>
        <BotaoVoltarSuperior className="D1voltar" />
      </Grid>

      <Grid container>
        <h2 className="D2titulo">Nos conte um pouco sobre você</h2>
      </Grid>
      <Grid container className="D2form">
        <Stack direction="column" className="D2caixa">
          <TextField label="Nome Completo" variant="outlined" />
          <TextField label="Telefone" variant="outlined" />
          <TextField label="Descrição" variant="outlined" multiline rows={4} />
        </Stack>
      </Grid>
      <Grid container>
        <h2 className="D2titulo">Com que profissional gostaria de falar?</h2>
      </Grid>
      <Grid container className="D2botoes">
        <Stack direction="row">
          <Button sx={{ marginRight: "70px" }} variant="contained">
            psicóloga
          </Button>
          <Button variant="contained">advogada</Button>
        </Stack>
      </Grid>
      <Grid container>
        <h2 className="D2titulo">Quando gostaria de ser atendida?</h2>
      </Grid>
      <Grid item>
        <img className="D2calendario" src={calendario} alt="calendário" />
      </Grid>
      <Grid container className="D2botoes">
        <Grid item>
          <PopUpD2 />
        </Grid>
        <Grid className="EspacoInferior" />
      </Grid>
      <BotaoDoPanico />

      <MenuInferior />
    </Grid>
  );
};

export default D2;
