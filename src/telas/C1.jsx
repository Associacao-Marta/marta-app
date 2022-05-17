import React from "react";
import { Card, Chip, Grid, IconButton, Stack, TextField } from "@mui/material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Carrossel from "../components/Carrossel";
import "../assets/css/base.css";

const C1 = () => {
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
        <TextField
          label="Buscar"
          variant="outlined"
          sx={{ marginRight: "16px" }}
        />
        <IconButton color="primary">
          <SettingsApplicationsIcon sx={{ fontSize: "34px" }} />
        </IconButton>
      </Grid>
      <BotaoDoPanico />
      <Grid container direction="row" className="C1chips">
        <Chip label="Tema" className="C1chipindividual" />
        <Chip label="Filtros" className="C1chipindividual" />
      </Grid>
      <Grid item>
        <h3 className="C1destaques">Destaques</h3>
      </Grid>
      <Grid container className="Carrossel">
        <Carrossel />
      </Grid>
      <Grid item>
        <h3 className="C1destaques">Tema</h3>
      </Grid>
      <Grid container className="Carrossel">
        <Stack direction="row" spacing={4}>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
        </Stack>
      </Grid>
      <Grid item>
        <h3 className="C1destaques">Tema</h3>
      </Grid>
      <Grid container className="Carrossel">
        <Stack direction="row" spacing={4}>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
        </Stack>
      </Grid>
      <Grid item>
        <h3 className="C1destaques">Tema</h3>
      </Grid>
      <Grid container className="Carrossel">
        <Stack direction="row" spacing={4}>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
          <Card href="C2" className="Artigo">
            <h5>Artigo</h5>
          </Card>
        </Stack>
      </Grid>
      <Grid className="EspacoInferior" />
      <MenuInferior />
    </Grid>
  );
};

export default C1;
