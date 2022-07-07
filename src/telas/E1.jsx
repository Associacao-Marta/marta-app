import React from "react";
import { Grid } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Mapa from "../components/mapa/mapa";
import "../assets/css/base.css";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const E1 = () => {
  return (
    <Grid container>
    <Grid className="containerBotao">
     <IconButton color="primary" variant="" aria-label="Voltar" href="C1">
        <ArrowBackIosNewIcon />
      </IconButton>
    </Grid>
    <Grid container>
      <Mapa />
      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
    </Grid>
  );
};

export default E1;
