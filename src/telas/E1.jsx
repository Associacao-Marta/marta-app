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
import Mapa from "../components/mapa/mapa";

const E1 = () => {
  return (
    <Grid container>
      <Grid item className="E1voltar"></Grid>
      <Mapa />
      <BotaoDoPanico />
      <Grid className="EspacoInferior" />
      <MenuInferior />
    </Grid>
  );
};

export default E1;
