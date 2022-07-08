import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C8_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C8 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Maria da Penha"
        chip="Legislação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>
            A Lei Maria da Penha tornou mais rigorosa a punição para agressões contra a mulher quando ocorridas no âmbito doméstico e familiar. A referida lei entrou em vigor no Brasil no dia 22 de setembro de 2006, sendo assim nomeada em homenagem a Maria da Penha Maia, que foi agredida pelo marido durante muitos anos e, em razão das agressões, tornou-se paraplégica, depois de sofrer atentado com arma de fogo, em 1983.
            </p>
            <p>
            A referida lei trouxe um maior respaldo do Estado às mulheres vítimas de violência e no seu texto é capaz de se encontrar a diferenciação entre os tipos de violência, que podem ser física, psicológica, patrimonial, sexual e moral, além de dispor sobre as medidas protetivas de urgência para tutelar a vida das mulheres, como se vê no link a seguir:
            <br />
            <b><a href="https://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2006/Lei/L11340.htm">Lei Maria da Penha</a></b>
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

export default C8;
