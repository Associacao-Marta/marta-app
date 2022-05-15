import React from "react";
import { Button, Stack, Grid } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import RectangleIcon from "@mui/icons-material/Rectangle";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

const D1 = () => {
  return (
    <Grid container>
      <BotaoVoltarSuperior />
      <Grid item xs={10}>
        <SettingsIcon />
      </Grid>
      <Grid item xs={12}>
        <RectangleIcon sx={{ fontSize: "300px" }} />
      </Grid>
      <Grid>
        <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
          Como podemos te ajudar
        </subtitle1>
      </Grid>
      <Grid>
        <Stack direction="row" spacing={4}>
          <RectangleIcon sx={{ fontSize: "200px" }} />
          <RectangleIcon sx={{ fontSize: "200px" }} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ margin: 5 }}>
          Agendar Atendimento
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Consultar Atendimento</Button>
      </Grid>
      <Grid item xs={12}>
        <BotaoDoPanico />
        <MenuInferior />
      </Grid>
    </Grid>
  );
};

export default D1;
