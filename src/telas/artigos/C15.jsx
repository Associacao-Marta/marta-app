import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/CardArtigo";
import HeaderTitulo from "../../components/HeaderArtigo";
import LeiaMais from "../../components/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/C15ilustracao.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C15 = () => {
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
            <LeiaMais className="leiaMais">
            <p>Essa aplicação foi desenvolvida para a disciplina de Projeto Integrado 1 do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará, em parceria com a Associação Marta. O produto foi projetado pela equipe Os Cappuccinos, composta pelo seguintes integrantes:</p>
            <br />
            <li>
                <ul>Giselle Fonseca - Product Manager (<a href="https://www.linkedin.com/in/giselle-fonseca-b1a2561b9/">Linkedin</a>)</ul>
                <ul>Jadson Alcantara - UX/UI Designer (<a href="https://www.linkedin.com/in/jadsonalcantara/">Linkedin</a>)</ul>
                <ul>Lucas Xavier - Desenvolvedor e Lead Designer (<a href="https://www.linkedin.com/in/lucasemanuelx/">Linkedin</a>)</ul>
                <ul>Lucas de Oliveira - Desenvolvedor, Analista de Requisitos e Arquiteto da Informação (<a href="https://www.linkedin.com/in/lucasmdoliveira/">Linkedin</a>)</ul>
                <ul>Sami Nagahama - Desenvolvedora Full-Stack (<a href="https://www.linkedin.com/in/saminagahama/">Linkedin</a>)</ul>
            </li>
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

export default C15;
