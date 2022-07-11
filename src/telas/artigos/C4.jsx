import React from "react";
import { Grid } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C4_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C4 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo        
        margin_top_icon="0px"
        margin_top="16px"
        margin_bottom="75px"
        img={img}
        titulo="Doações"
        chip="Sobre a associação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
              <p>
              Gostaria de ajudar a Associação Marta a crescer? Você pode fazer uma doação via Pix, além de doar pela nossa Benfeitoria. Fazendo isso você ajuda a alcançar mulheres em situação de vulnerabilidade e contribui em um papel de ruptura de um ciclo de violência.
              </p>
              <p>
                Doações via Pix por: <br />
                <b>ajude.marta@gmail.com</b>
              </p>
              <p>
              Você também pode contribuir diretamente no site da benfeitoria:<br />
            <b><a href="https://benfeitoria.com/projeto/associacaomarta">Benfeitoria - Associação Marta</a></b>
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

export default C4;
