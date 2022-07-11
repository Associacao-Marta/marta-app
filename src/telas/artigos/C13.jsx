import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C13_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C13 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Locais de Apoio"
        chip="Conheça a aplicação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>Garantir o amparo e suporte às mulheres vítimas de violência é extremamente necessário. Para isso, por meio de uma rede de serviços<b>*</b> disponibilizada na página de <b>Locais</b> você pode visualizar um mapa com locais de acolhimento que estão próximos, possibilitando informações como endereço, telefone, e horário de atendimento.</p>
            <p><b>*</b>Essa rede apresenta até o momento somente serviços localizados na Região Metropolitana de Fortaleza</p>
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
            <CardArtigo titulo="Botão de pânico" tela="C14" href="C14"/>
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

export default C13;
