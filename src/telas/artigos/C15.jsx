import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C15_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C15 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Quem desenvolveu"
        chip="Conheça a aplicação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>Essa aplicação foi desenvolvida para a disciplina de Projeto Integrado 1 do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará, em parceria com a Associação Marta. O produto foi projetado pela equipe Os Cappuccinos, composta pelo seguintes integrantes:</p>
            
            <p><b>Giselle Fonseca</b> - Product Manager (<a href="https://www.linkedin.com/in/giselle-fonseca-b1a2561b9/">Linkedin</a>)</p>
            <p><b>Jadson Alcantara</b> - UX/UI Designer (<a href="https://www.linkedin.com/in/jadsonalcantara/">Linkedin</a>)</p>
            <p><b>Lucas Xavier</b> - Desenvolvedor e Lead Designer (<a href="https://www.linkedin.com/in/lucasemanuelx/">Linkedin</a>)</p>
            <p><b>Lucas de Oliveira</b> - Desenvolvedor, Analista de Requisitos e Arquiteto da Informação (<a href="https://www.linkedin.com/in/lucasmdoliveira/">Linkedin</a>)</p>
            <p><b>Sami Nagahama</b> - Desenvolvedora Full-Stack (<a href="https://www.linkedin.com/in/saminagahama/">Linkedin</a>)</p>
            
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
            <CardArtigo titulo="Artigos" tela="C11" href="C11"/>
            <CardArtigo titulo="Atendimento" tela="C12" href="C12"/>
            <CardArtigo titulo="Locais de Apoio" tela="C13" href="C13"/>
            <CardArtigo titulo="Botão de pânico" tela="C14" href="C14"/>
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
