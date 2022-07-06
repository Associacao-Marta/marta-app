import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Carrossel from "../components/Carrossel";
import CardArtigo from "../components/CardArtigo";
import "../assets/css/base.css";
import img3 from "../assets/img/C1artigo3.svg";
import Header from "../components/Header";
import "../assets/css/C.css";

const busca = [
  { label: "Buscar" },
  { label: "Entenda melhor" },
  { label: "Como identificar" },
];

const C1 = () => {
  return (
    <Grid container className="pageCContainer">
        <Header titulo="Artigos" searchButton={true} />     
       
        <Grid container className="pageContainer">
        <Grid container className="carrosselContainer">
          <Grid item>
            <h2 className="tituloH2" style={{ color: "#337066" }}>
              Sobre a Associação Marta
            </h2>
          </Grid>
          <Grid container className="carrossel">
            <Carrossel />
          </Grid>
        </Grid>

        <Grid item>
          <h1 className="tituloH1">Artigos em destaque</h1>
        </Grid>

        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack direction="row" spacing={2}>
            <CardArtigo titulo="Por que essas relações de violência perduram tanto tempo?" tema="Entenda melhor" href="C2"/>
            <CardArtigo titulo="Sinais de que a mulher está sofrendo violência doméstica" tema="Como identificar" href="C2"/>
          </Stack>
        </Grid>

        <Grid container>
          <Grid item>
            <h1 className="tituloH1">Veja também</h1>
          </Grid>
          <Grid container dir="ltr">
            <Stack direction="row" spacing={2}>
              <a href="C2">
                <img src={img3} />
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />

    </Grid>
  );
};

export default C1;
