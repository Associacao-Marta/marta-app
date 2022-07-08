import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C7_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C7 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Feminicídio"
        chip="Legislação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
             <p>
             A Lei do Feminicídio (Lei Federal 13.104/15) criminaliza, como seu próprio nome sugere, a conduta de prática do feminicídio, que é o homicídio de mulheres cometido em razão do gênero, ou seja, a vítima é morta em razão de ser mulher.
             </p>
             <p>
             O Brasil é considerado o quinto país do mundo com maior número de feminicídios, fato este que demonstra por si só a importância dessa legislação que está entrou somente em 2015 e pode ser consultada no link a seguir:
             <br />
             <b><a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13104.htm">Lei Federal 13.104/2015</a></b>
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
            <CardArtigo titulo="Maria da Penha" tela="C8" href="C8"/>
            <CardArtigo titulo="Atendimento público específico e especializado no SUS" tela="C9" href="C9"/>
            <CardArtigo titulo="Plano Nacional de Enfrentamento ao Feminicídio" tela="C10" href="C10"/>
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

export default C7;
