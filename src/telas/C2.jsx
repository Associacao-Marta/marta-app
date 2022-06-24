import React from "react";
import { Card, Chip, Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

import "../assets/css/base.css";
import BackButton from "../components/BackButton";
import LeiaMais from "../components/LeiaMais";
import img from "../assets/img/C2ilustracao.svg";

import Header from "../components/Header";
import "../assets/css/C.css";
import HeaderTitulo from "../components/HeaderArtigo";


const C2 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true} ></Header>
        <HeaderTitulo img={img}
        titulo="Por que essas relações de violência perduram tanto tempo?"
        chip="Entenda melhor" ></HeaderTitulo>

      <Grid container className="pageContainer">

        <Grid container className="containerArtigo" id="target">
            <LeiaMais>
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
            <Grid className="EspacoInferior" />
        </Grid>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default C2;
