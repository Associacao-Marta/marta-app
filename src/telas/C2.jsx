import React from "react";
import { Card, Chip, Grid, Stack } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

//  procurar barrinha pra antes do título do artigo

const C2 = () => {
  return (
    <Grid container>
      <BotaoVoltarSuperior />
      <Grid item xs={12}>
        <CircleIcon sx={{ fontSize: "100px" }} />
      </Grid>
      <Grid item xs={8}>
        <h2>Título do Artigo</h2>
      </Grid>
      <Grid item xs={12} sx={{ fontSize: "11px" }}>
        <overline>
          Nulla nisl integer egestas tellus. Hac id facilisis sit quis sit
          pellentesque pulvinar. Faucibus cras.
        </overline>
      </Grid>
      <Grid item xs={6}>
        <Chip label="Tema" style={{ margin: 5 }} />
        <Chip label="Filtros" style={{ margin: 5 }} />
      </Grid>
      <Grid>
        <body2>
          Suspendisse nisi elit lobortis tristique. In facilisis consequat
          hendrerit viverra sagittis diam lorem consequat lobortis. Felis, augue
          eu massa nisl, sed est purus sollicitudin.
        </body2>
      </Grid>
      <Grid>
        <body2>
          Nec viverra in consectetur aliquet eu donec adipiscing risus sed.
          Pulvinar bibendum facilisis pellentesque eu morbi mattis condimentum
          imperdiet.
        </body2>
      </Grid>
      <Grid>
        <body2>
          Blandit eget tempor egestas pulvinar faucibus tristique. Diam sit quam
          blandit tristique sed. Leo euismod fames tellus porttitor ut lacus
          fames eget. Nulla adipiscing pharetra et fermentum aliquet. Amet diam.
        </body2>
      </Grid>
      <Grid>
        <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
          Talvez você também goste
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

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default C2;
