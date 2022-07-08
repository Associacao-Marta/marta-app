import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C6_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C6 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Sinais de que a mulher está sofrendo violência doméstica"
        chip="Violência contra a mulher"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
              <p>
              Em geral, as formas de violências são bastante diversas, mas existem alguns comportamentos que ajudam a identificar que uma pessoa está sofrendo com isso, como quando uma mulher vive aterrorizada, temendo ataques por não conseguir proteger os seus filhos e a si mesma.
              </p>
              <p>
              Além disso, algo bastante sintomático é quando a mulher se isola dos seus familiares e amigos por pressão ou por vergonha ou, ainda, perde a sua liberdade de ir aonde deseja, de estudar e de trabalhar.
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
            <CardArtigo titulo="Por que essas relações de violência perduram?" tela="C5" href="C5"/>
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

export default C6;
