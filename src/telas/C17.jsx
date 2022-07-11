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
            Legislação
          </h2>
        </Grid>

        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack spacing={2} style={{width: "100%"}}>
            <CardArtigoGrande titulo="Feminicídio " tela="C7" href="C7"/>
            <CardArtigoGrande titulo="Maria da Penha" tela="C8" href="C8"/>
            <CardArtigoGrande titulo="Atendimento público específico e especializado no SUS" tela="C9" href="C9"/>  
            <CardArtigoGrande titulo="Plano Nacional de Enfrentamento ao Feminicídio" tela="C10" href="C10"/>
          </Stack>
        </Grid>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />

    </Grid>
  );
};

export default C16;
