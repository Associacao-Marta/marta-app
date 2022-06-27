import React from "react";
import { Grid } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Mapa from "../components/mapa/mapa";
import "../assets/css/base.css";

const E1 = () => {
  return (
    <Grid>
      <Mapa />
      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default E1;
