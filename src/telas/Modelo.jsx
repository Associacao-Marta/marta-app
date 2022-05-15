import React from "react";
import { Card, Chip, Grid, IconButton, Stack, TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Carrossel from "../components/Carrossel";
import "../assets/css/base.css";

const Modelo = () => {
  return (
    // Colocar autocomplete com TextField para busca????
    // Descobrir como deixar os chips deletable
    // Componentizar MobileStepper
    // Componentizar cards
    // botão flutuante z-index DEIXAR EM CIMA
    // fixar bottom navigation
    // componentizar botão de settings
    <Grid container>
      <Grid container className="C1buscar">
        <TextField label="Buscar" variant="outlined" />
        <IconButton color="primary">
          <SettingsIcon sx={{ fontSize: "34px", marginLeft: "16px" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Modelo;
