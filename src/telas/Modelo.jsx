import React from "react";
import { Grid, TextField, Stack } from "@mui/material";

import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import "../assets/css/base.css";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import PopUpBotaoDoPanico from "../components/PopUpBotaoDoPanico";

const Modelo = () => {
  return (
    <Grid container>
      <PopUpBotaoDoPanico />
    </Grid>
  );
};

export default Modelo;
