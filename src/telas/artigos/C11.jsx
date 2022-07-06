import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/CardArtigo";
import HeaderTitulo from "../../components/HeaderArtigo";
import LeiaMais from "../../components/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/C11ilustracao.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C11 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Artigos"
        chip="Conheça a aplicação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
            <p>
            É sempre importante adquirir novos conhecimentos, especialmente quando se trata de um assunto sério e recorrente como violência de gênero, as maneiras de combater esse crime e apoiar as mulheres que o vivenciam.
            </p>
            <p>
            Para seguir nessa missão, o app Associação Marta apresenta um conjunto de conteúdos educacionais e informativos localizados na página de <b>Artigos</b> que vão lhe ajudar a se informar sobre diversos assuntos, como distinguir os tipos de violência de gênero, como costumam acontecer os casos, as leis e serviços que garantem o direito e suporte às mulheres, entre outros tipos de informações.
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

export default C11;
