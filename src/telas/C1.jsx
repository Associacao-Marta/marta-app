import React from "react";
import { Typography } from "@mui/material";
import { Card, Chip, Grid, Stack, TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import RectangleIcon from "@mui/icons-material/Rectangle";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

const C1 = () => {
  return (
    // Colocar autocomplete com TextField para busca????
    // Descobrir como deixar os chips deletable
    // Componentizar MobileStepper
    // Componentizar cards
    // botão flutuante z-index DEIXAR EM CIMA
    // fixar bottom navigation
    // componentizar botão de settings

    <Typography>
      <Grid>
        <Grid item xs={4}>
          <TextField
            label="Buscar"
            variant="outlined"
            style={{
              width: 262,
              paddingRight: 16,
            }}
          />
          <SettingsIcon sx={{ fontSize: "56px" }} />
        </Grid>
        <Grid item xs={8} sx={{ display: "flex" }}>
          <Chip label="Tema" style={{ margin: 5 }} />
          <Chip label="Filtros" style={{ margin: 5 }} />
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <subtitle1 style={{ marginTop: 28, marginBottom: 12 }}>
            Destaques
          </subtitle1>
        </Grid>
        <Grid>
          <RectangleIcon sx={{ fontSize: "300px" }} />
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <subtitle1 style={{ marginTop: 28, marginBottom: 12 }}>
            Tema
          </subtitle1>
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
          <subtitle1 style={{ marginTop: 28, marginBottom: 12 }}>
            Tema
          </subtitle1>
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
      </Grid>
      <BotaoDoPanico />
      <MenuInferior />
    </Typography>
  );
};

export default C1;
