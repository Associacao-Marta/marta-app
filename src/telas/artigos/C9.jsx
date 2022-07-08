import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C9_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C9 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Atendimento público específico e especializado no SUS"
        chip="Legislação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>
            O atendimento especializado para mulheres e vítimas de violência doméstica e sexual tornou-se um dos princípios do Sistema Único de Saúde (SUS) de forma a garantir, entre outros direitos, o acompanhamento psicológico e cirurgias plásticas reparadoras, se for o caso, como se pode ver em maiores detalhes a seguir: 
            </p>
            <p>
            <b><a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/L13427.htm">Lei 13.427/2017</a></b>
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

export default C9;
