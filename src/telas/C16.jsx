import React from "react";
import { Grid, Stack } from "@mui/material";
import CardArtigoGrande from "../components/C/CardArtigoGrande";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Header from "../components/Header";
import "../assets/css/base.css";
import "../assets/css/C.css";

const C16 = () => {
  return (
    <Grid container>
      <Header titulo="Artigos" backButton={true} destino="C1" />

      <Grid container className="pageContainer">
        <Grid item>
          <h2 className="tituloH2" style={{ color: "#337066" }}>
            Sobre violência de gênero
          </h2>
        </Grid>

        <Grid container className="carrosselArtigos" dir="ltr" >
          <Stack spacing={2} style={{width: "100%"}}>
            <CardArtigoGrande titulo="Por que essas relações de violência perduram?" tela="C5" href="C5"/>
            <CardArtigoGrande titulo="Sinais de que a mulher está sofrendo violência doméstica" tela="C6" href="C6"/>
          </Stack>
        </Grid>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />

    </Grid>
  );
};

export default C16;
