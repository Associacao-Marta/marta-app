import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/CardArtigo";
import HeaderTitulo from "../../components/HeaderArtigo";
import LeiaMais from "../../components/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/C9ilustracao.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C9 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Princípio da organização de atendimento público específico e especializado para mulheres e vítimas de violência doméstica no SUS"
        chip="Legislação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>
            O atendimento especializado para mulheres e vítimas de violência doméstica e sexual tornou-se um dos princípios do Sistema Único de Saúde (SUS) de forma a garantir, entre outros direitos, o acompanhamento psicológico e cirurgias plásticas reparadoras, se for o caso, como se pode ver em maiores detalhes a seguir:
            <br />
            <b><a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/L13427.htm">Lei 13.427/2015</a></b>
            </p>
            </LeiaMais>
          </div>
        </Grid>

        <Grid container className="EspacoInferior" />
        <Grid container>
          <Grid item>
            <h1 className="tituloH1">Veja também</h1>
          </Grid>
          <Grid container dir="ltr">
            <Stack direction="row" spacing={2}>
              <CardArtigo
                titulo="Sinais de que a mulher está sofrendo violência doméstica"
                tema="Como identificar"
                href="C2"
              />
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
