import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C10_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C10 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Plano Nacional de Enfrentamento ao Feminicídio"
        chip="Legislação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>
            O Plano Nacional de Enfrentamento ao Feminicídio visa combater todas as formas de feminicídio por meio de ações governamentais integradas e intersetoriais, bem como garantir os direitos e a assistência às mulheres em situação de violência e aos seus familiares.
            </p>
            <p>
            A Lei em questão prevê ações que conscientizem a sociedade sobre a violência contra as mulheres e ampliem as possibilidades de denúncia:
            <br />
            <b><a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/Lei/L14192.htm">Lei 14.192/2021</a></b>
            </p>
            </LeiaMais>
          </div>
        </Grid>

        <Grid container className="EspacoInferior" />
        <Grid container>
          <Grid item>
            <h1 className="tituloH1">Veja também</h1>
          </Grid>
          <Grid container className="carrosselArtigos" dir="ltr">
          <Stack direction="row" spacing={2}>
            <CardArtigo titulo="Feminicídio " tela="C7" href="C7"/>
            <CardArtigo titulo="Maria da Penha" tela="C8" href="C8"/>
            <CardArtigo titulo="Atendimento público específico e especializado no SUS" tela="C9" href="C9"/>
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

export default C10;
