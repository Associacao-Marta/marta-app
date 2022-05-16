import React from "react";
import { Card, IconButton, Grid, TextField, Dialog } from "@mui/material";
import RectangleIcon from "@mui/icons-material/Rectangle";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import "../assets/css/base.css";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import mapa from "../assets/mock/mockmapa.svg";
import SwipeableEdgeDrawer from "../components/Drawer";

const E1 = () => {
  return (
    <Grid container>
      <Grid item className="E1voltar">
        <BotaoVoltarSuperior />
      </Grid>
      <Grid item className="E1voltar">
        <TextField
          label="Buscar"
          variant="filled"
          sx={{ marginLeft: "50px" }}
        />
      </Grid>
      <Grid item className="E1voltar">
        <IconButton color="primary">
          <SettingsApplicationsIcon
            sx={{ fontSize: "34px", marginLeft: "300px" }}
          />
        </IconButton>
      </Grid>
      <img src={mapa} sx={{ width: "95%" }} />

      <BotaoDoPanico />
      <Grid className="EspacoInferior" />
      <MenuInferior />
    </Grid>
  );
};

export default E1;
