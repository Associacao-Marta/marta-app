import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/CardArtigo";
import HeaderTitulo from "../../components/HeaderArtigo";
import LeiaMais from "../../components/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/C14ilustracao.svg";
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
            <LeiaMais className="leiaMais">
            <p>Em momentos de risco queremos garantir que você tenha um suporte, para isso o aplicativo permite que você solicite ajuda de forma rápida e segura através de um botão de pânico localizado no lado esquerdo inferior da sua tela, que ao ser acionado realiza a discagem de um número de emergência no seu aplicativo de chamadas.</p>
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

export default C14;
