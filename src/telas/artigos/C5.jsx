import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/C/CardArtigo";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C5_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C5 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Por que essas relações de violência perduram?"
        chip="Violência contra a mulher"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
              <p>
                Entre todas as causas, pode-se apontar como a maior delas
                justamente o risco ao se romper a relação. Além disso, procurar
                ajuda é algo visto de maneira vergonhosa por muitas das vítimas
                e gera muito medo.
              </p>
              <p>
                Ainda, algo bastante comum é que sempre resta alguma esperança
                de que tudo se resolva e que o agressor mude o seu comportamento
                de maneira rápida.
              </p>
              <p>
                Não se pode esquecer que, em muitos casos, a vítima encontra-se
                depende financeiramente do agressor, está isolada da sua rede de
                apoio e que a sociedade, como um todo, está despreparada para
                lidar com essas situações, culpabilizando a vítima, inclusive,
                por algo que ela está sofrendo, o que demonstra a existência de
                muitos obstáculos que impedem o rompimento do ciclo de
                violência.
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
            <CardArtigo titulo="Sinais de que a mulher está sofrendo violência doméstica" tela="C6" href="C6"/>
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

export default C5;
