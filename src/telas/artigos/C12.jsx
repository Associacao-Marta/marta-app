import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C12_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C12 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Atendimentos"
        chip="Conheça a aplicação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>
            Uma importante missão da Associação Marta é promover o acolhimento às vítimas de violência contra a mulher, através de serviços de apoio psicológico e/ou jurídico, de forma <b>totalmente gratuita e remota</b>.
            </p>
            <p>
            Se você necessita dessa assistência, para entrar em contato com a Associação basta visitar a página de <b>Atendimento</b> e selecionar a opção <b>Agendar Atendimento</b>, para o atendimento ocorrer da melhor forma possível será necessário preencher um formulário básico com informações de contato, descrição do caso, o tipo de atendimento que deseja receber e sua disponibilidade para a conversa. Ao confirmar o agendamento, um protocolo é enviado via SMS para o número informado. 
            </p>
            <p>
            Caso já tenha feito o agendamento, para obter mais informações posteriormente, você pode na página de <b>Atendimento</b> selecionar a opção <b>Consultar Agendamento</b> e informar o número de protocolo enviado via SMS que foi passado após o agendamento. 
            </p>
            <p><b>Ressaltamos que esse é um serviço que garante segurança e sigilo para todas as mulheres vítimas de violência.</b></p>
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
            <CardArtigo titulo="Locais de Apoio" tela="C13" href="C13"/>
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

export default C12;
