import React from "react";
import { Card, Chip, Grid, Stack } from "@mui/material";
import img from "../assets/img/C2ilustracao.svg";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";

import "../assets/css/base.css";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import BotaoAcessibilidade from "../components/BotaoAcessibilidade";
import LeiaMais from "../components/LeiaMais";

const C2 = () => {
  return (
    <Grid container className="container">
      <Grid container>
        <a href="C1">
          <BotaoVoltarSuperior />
        </a>
      </Grid>
      <Grid>
        <img src={img} />
      </Grid>
      <Grid container className="C2container">
        <Grid>
          <h2 className="C2titulo">
            Por que essas relações de violência perduram tanto tempo?
          </h2>
          <Grid container direction="row" className="C2botoes">
            <Chip label="Entenda melhor" color="primary" className="C2botoes" />
            <BotaoAcessibilidade />
          </Grid>
        </Grid>

        <BotaoDoPanico />
        <Grid container className="C2p" id="target">
          <div className="content">
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
            <Grid className="EspacoInferior" />
          </div>
        </Grid>
      </Grid>

      <MenuInferior />
    </Grid>
  );
};

export default C2;
