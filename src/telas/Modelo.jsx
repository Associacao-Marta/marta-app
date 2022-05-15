import React from "react";
import { Card, Chip, Grid, IconButton, Stack, TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import RectangleIcon from "@mui/icons-material/Rectangle";
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
    <Grid container className="C1">
      <Grid item xs={12}>
        <TextField label="Buscar" variant="outlined" />
        <IconButton>
          <SettingsIcon sx={{ fontSize: "34px" }} />
        </IconButton>
      </Grid>

      <Grid item>
        <Chip label="Tema" />
        <Chip label="Filtros" />
      </Grid>

      <Grid sx={{ display: "flex" }}>
        <subtitle1 style={{ marginTop: 28, marginBottom: 12 }}>
          Destaques
        </subtitle1>
      </Grid>
      <Grid>
        <Carrossel />
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <subtitle1 style={{ marginTop: 28, marginBottom: 12 }}>Tema</subtitle1>
      </Grid>
      <Grid>
        <Stack direction="row" spacing={4}>
          <Card style={{ padding: 25 }}>
            <h4>Artigo</h4>
          </Card>
          <Card style={{ padding: 25 }}>
            <h4>Artigo</h4>
          </Card>
          <Card style={{ padding: 25 }}>
            <h4>Artigo</h4>
          </Card>
        </Stack>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <subtitle1 style={{ marginTop: 28, marginBottom: 12 }}>Tema</subtitle1>
      </Grid>
      <Grid>
        <Stack direction="row" spacing={4}>
          <Card style={{ padding: 25 }}>
            <h4>Artigo</h4>
          </Card>
          <Card style={{ padding: 25 }}>
            <h4>Artigo</h4>
          </Card>
          <Card style={{ padding: 25 }}>
            <h4>Artigo</h4>
          </Card>
        </Stack>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default Modelo;
