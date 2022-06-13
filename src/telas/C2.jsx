import React from "react";
import { Card, Chip, Grid, Stack } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

import "../assets/css/base.css";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoAcessibilidade from "../components/BotaoAcessibilidade";

const C2 = () => {
  return (
    <Grid container>
      <Grid container className="C2voltar">
        <a href="C1">
          <BotaoVoltarSuperior />
        </a>
      </Grid>
      <Grid className="C2ilustracao">
        <CircleIcon sx={{ fontSize: "100px" }} />
      </Grid>
      <Grid container>
        <h2 className="C2titulo">Titulo do artigo</h2>
        <p className="C2subtitulo">
          Nulla nisl integer egestas tellus. Hac id facilisis sit quis sit
          pellentesque pulvinar. Faucibus cras.
        </p>
      </Grid>
      <Grid container direction="row" className="C1chips">
        <Chip label="Tema 1" color="primary" className="C1chipindividual" />
        <Chip label="Tema 2" color="primary" className="C1chipindividual" />
      </Grid>
      <Grid container direction="row" className="C1chips">
        <BotaoAcessibilidade />
      </Grid>

      <BotaoDoPanico />
      <Grid container className="C2p" id="target">
        <div className="content">
          <p>
            Suspendisse nisi elit lobortis tristique. In facilisis consequat
            hendrerit viverra sagittis diam lorem consequat lobortis. Felis,
            augue eu massa nisl, sed est purus sollicitudin.
          </p>
          <p>
            Nec viverra in consectetur aliquet eu donec adipiscing risus sed.
            Pulvinar bibendum facilisis pellentesque eu morbi mattis condimentum
            imperdiet.
          </p>
          <p>
            Blandit eget tempor egestas pulvinar faucibus tristique. Diam sit
            quam blandit tristique sed. Leo euismod fames tellus porttitor ut
            lacus fames eget. Nulla adipiscing pharetra et fermentum aliquet.
            Amet diam.
          </p>
        </div>
      </Grid>

      <Grid className="EspacoInferior" />
      <MenuInferior />
    </Grid>
  );
};

export default C2;
