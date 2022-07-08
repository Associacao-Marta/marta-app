import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/CardArtigo";
import HeaderTitulo from "../../components/HeaderArtigo";
import LeiaMais from "../../components/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C2_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C2 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        img={img}
        titulo="Quem somos"
        chip="Sobre a associação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
              <p>
                Uma Associação composta apenas por mulheres, que empatiza com
                a causa das vítimas da violência estrutural da sociedade, atuando na sua prevenção e conscientização.
              </p>
              <p>
                A Associação Marta leva este nome em homenagem a uma mulher
                anônima que, assim como muitas, já sofreu com a violência doméstica,
                mas que tem uma história inspiradora de superação.
              </p>
              <b>O que fazemos?</b>
              <p>               
                Além de realizarmos palestras virtuais e presenciais, temos forte
                presença nas redes sociais com o objetivo de conscientizar e educar os
                estudantes e a comunidade, a fim de que se tornem cidadãos mais
                responsáveis, sensíveis aos temas relacionados à causa da Associação.
              </p>
              <p>
              Também promovemos projetos de assistência jurídica e psicológica gratuitas para vítimas de violência contra a mulher.
              </p>
              <b>Por que fazemos?</b>
              <p>
                Acreditamos na importância da conscientização por meio de palestras e
                pelas redes sociais, tendo em vista que muitas mulheres e adolescentes
                não sabem identificar as formas de violência, não estando preparadas
                para se proteger delas. Ainda, este método nos possibilita capacitar o
                público-alvo para perceber, se sensibilizar e dar suporte quando se depara com uma situação de violência.
              </p>
            </LeiaMais>
          </div>
        </Grid>

        <Grid container className="EspacoInferior" />
      </Grid>

      <Grid container className="EspacoInferior" />
      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default C2;
