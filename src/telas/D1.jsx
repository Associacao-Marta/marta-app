import React from "react";
import { Button, Grid, IconButton, Stack } from "@mui/material";
import RectangleIcon from "@mui/icons-material/Rectangle";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

import "../assets/css/base.css";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
const D1 = () => {
  return (
    <Grid container>
      <Grid item>
        <BotaoVoltarSuperior className="D1voltar" />
      </Grid>
      <Grid item>
        <RectangleIcon
          sx={{
            fontSize: "312px",
            color: "#C4C4C4",
            marginLeft: "16px",
          }}
        />
      </Grid>
      <Grid container>
        <h2 className="D1titulo">Como podemos te ajudar</h2>
      </Grid>
      <Grid className="D1cards">
        <Stack direction="row">
          <RectangleIcon sx={{ fontSize: "160px", color: "#C4C4C4" }} />
          <RectangleIcon sx={{ fontSize: "160px", color: "#C4C4C4" }} />
        </Stack>
      </Grid>
      <Grid container className="D1botoes">
        <Grid item>
          <Button className="D1botaoindividual" variant="contained">
            Agendar Atendimento
          </Button>
        </Grid>
        <Grid item>
          <Button className="D1botaoindividual" variant="contained">
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
