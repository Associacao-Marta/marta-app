import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C14_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C14 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Botão de Emergência"
        chip="Conheça a aplicação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
          <p>Em momentos de risco queremos garantir que você tenha um suporte, para isso o aplicativo permite que você solicite ajuda de forma rápida e segura através de um botão de pânico localizado no lado direito inferior da sua tela, que ao ser acionado realiza a discagem de um número de emergência no seu aplicativo de chamadas.</p>
          </div>
        </Grid>

        <Grid container className="EspacoInferior" />
        <Grid container>
          <Grid item>
            <h1 className="tituloH1">Veja também</h1>
          </Grid>
          <Grid container className="carrosselArtigos" dir="ltr">
          <Stack direction="row" spacing={2}>
            <CardArtigo titulo="Artigos" tela="C11" href="C11"/>
            <CardArtigo titulo="Atendimento" tela="C12" href="C12"/>
            <CardArtigo titulo="Locais de Apoio" tela="C13" href="C13"/>
            <CardArtigo titulo="Quem desenvolveu" tela="C15" href="C15"/>
          </Stack>
        </Grid>
        </Grid>
      </Grid>

      <Grid container className="EspacoInferior" />
      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default C14;
