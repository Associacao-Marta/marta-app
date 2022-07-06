import React from "react";
import { Grid, Stack } from "@mui/material";
import BotaoDoPanico from "../../components/BotaoDoPanico";
import MenuInferior from "../../components/MenuInferior";
import CardArtigo from "../../components/CardArtigo";
import HeaderTitulo from "../../components/HeaderArtigo";
import LeiaMais from "../../components/LeiaMais";
import Header from "../../components/Header";
import img from "../../assets/img/C2ilustracao.svg";
import "../../assets/css/base.css";
import "../../assets/css/C.css";

const C3 = () => {
  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="C1" backButton={true}></Header>
      <HeaderTitulo
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
              <p>É possível participar realizando um agendamento disponível na página de Atendimento (icon), para saber melhor sobre como fazer um agendamento basta clicar aqui (vai pra página explicando sobre a tela de atendimento).
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

export default C3;
