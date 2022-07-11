import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Carrossel from "../components/C/Carrossel";
import CardArtigo from "../components/C/CardArtigo";
import Header from "../components/Header";
import "../assets/css/base.css";
import "../assets/css/C.css";

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
            <CardArtigo titulo="Por que essas relações de violência perduram?" tela="C5" href="C5"/>
            <CardArtigo titulo="Sinais de que a mulher está sofrendo violência doméstica" tela="C6" href="C6"/>
          </Stack>
        </Grid>

        <Grid container>
          <Grid item>
            <h1 className="tituloH1">Veja também</h1>
          </Grid>
          <Grid container className="carrosselArtigos" dir="ltr">
          <Stack direction="row" spacing={2}>
            <CardArtigo titulo="Feminicídio " tela="C7" href="C7"/>
            <CardArtigo titulo="Maria da Penha" tela="C8" href="C8"/>
            <CardArtigo titulo="Atendimento público específico e especializado no SUS" tela="C9" href="C9"/>
            <CardArtigo titulo="Plano Nacional de Enfrentamento ao Feminicídio" tela="C10" href="C10"/>
          </Stack>
        </Grid>
        </Grid>
        <div style={{margin: "50px"}} />
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />

    </Grid>
  );
};

export default C1;
