import React from "react";
import { Grid } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import HeaderTitulo from "../../components/C/HeaderArtigo";
import LeiaMais from "../../components/C/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/artigos/C3_icon.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C3 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
        margin_top_icon="0px"
        margin_top="16px"
        margin_bottom="75px"
        img={img}
        titulo="Marta Escuta"
        chip="Sobre a associação"
      ></HeaderTitulo>

      <Grid container className="pageContainer">
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">
              <p>
              Durante o Marta Escuta, por intermédio de profissionais capacitadas, a Associação Marta disponibilizará os serviços de assessoria jurídica e de escuta solidária, de maneira completamente GRATUITA e remota, às mulheres vítimas de violência, em qualquer lugar do Brasil.
              </p>
              <b>Assessoria jurídica</b>
              <p>
              A assessoria jurídica é realizada por Advogadas capacitadas inscritas na OAB, em que é ofertado <b>suporte jurídico</b> para que mulheres vítimas de violência conheçam seus direitos e possibilidades com <b>segurança e sigilo</b>, incluindo informações sobre Divórcio, guarda de filhos, alimentos, boletim online, medidas protetivas etc., com os respectivos alinhamentos judiciais.
              </p>
              <b>Escuta solidária</b>
              <p>               
              É um <b>serviço de escuta</b>, realizado por Psicólogas capacitadas inscritas no CRP, às mulheres vítimas de violência possibilitando um espaço de fala em que elas <b>se sintam acolhidas</b> e possam externalizar suas angústias, oferecendo uma <b>rede de apoio segura e sigilosa</b>.
              </p>
              <b>Quem pode ser atendida?</b>
              <p>
              Mulheres que sofrem ou já sofreram algum tipo de violência e estejam interessadas nos serviços da campanha.
              </p>
              <b>Como posso participar?</b>
              <p>É possível participar realizando um agendamento disponível na página de <a href="C12"><stan style={{ color: "#337066" }}>Atendimento</stan></a>, para saber melhor sobre como fazer um agendamento basta clicar aqui (vai pra página explicando sobre a tela de atendimento).
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

export default C3;
