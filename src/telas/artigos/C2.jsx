import React from "react";
import { Grid } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C2_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C2 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        margin_top_icon="0px"
        margin_top="16px"
        margin_bottom="75px"
        img={img}
        titulo="Quem somos"
        chip="Sobre a associação"
      ></HeaderTitulo>

      <Grid container className="pageContainer" style={{paddingRight: "6.67vw"}}>
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
              <p>
                Uma Associação composta apenas por mulheres, que empatiza com a
                causa das vítimas da violência estrutural da sociedade, atuando
                na sua prevenção e conscientização.
              </p>
              <p>
                A Associação Marta leva este nome em homenagem a uma mulher
                anônima que, assim como muitas, já sofreu com a violência
                doméstica, mas que tem uma história inspiradora de superação.
              </p>
              <b>O que fazemos?</b>
              <p>
                Além de realizarmos palestras virtuais e presenciais, temos
                forte presença nas redes sociais com o objetivo de conscientizar
                e educar os estudantes e a comunidade, a fim de que se tornem
                cidadãos mais responsáveis, sensíveis aos temas relacionados à
                causa da Associação.
              </p>
              <p>
                Também promovemos projetos de assistência jurídica e psicológica
                gratuitas para vítimas de violência contra a mulher.
              </p>
              <b>Por que fazemos?</b>
              <p>
                Acreditamos na importância da conscientização por meio de
                palestras e pelas redes sociais, tendo em vista que muitas
                mulheres e adolescentes não sabem identificar as formas de
                violência, não estando preparadas para se proteger delas. Ainda,
                este método nos possibilita capacitar o público-alvo para
                perceber, se sensibilizar e dar suporte quando se depara com uma
                situação de violência.
              </p>
              <b>Contatos</b>
              <p>
                Instagram: <a href="https://www.instagram.com/associacaomarta/">https://www.instagram.com/associacaomarta/</a> <br/>
                Facebook: <a href="https://www.facebook.com/AssociacaoMarta/">https://www.facebook.com/AssociacaoMarta/</a> <br/>
                E-mail: <a href="mailto:contato.associacaomarta@gmail.com">contato.associacaomarta@gmail.com</a> <br/>
                Whatsapp: <a href="tel:+558599612-0974">(85) 99612-0974</a>
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
