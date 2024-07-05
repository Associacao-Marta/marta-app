import React from 'react';
import { Grid, Stack } from '@mui/material';
import CardArtigoGrande from '../components/C/CardArtigoGrande';
import BotaoDoPanico from '../components/BotaoDoPanico';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';
import '../assets/css/base.css';
import '../assets/css/C.css';

const C16 = () => {
  return (
    <Grid container>
      <Header titulo="Artigos" backButton destino="/" />

      <Grid container className="pageContainer">
        <Grid item>
          <h2 className="tituloH2" style={{ color: '#337066' }}>
            Conheça a aplicação
          </h2>
        </Grid>

        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack spacing={2} style={{ width: '100%' }}>
            <CardArtigoGrande titulo="Artigos" tela="C11" href="/artigos/artigos" />
            <CardArtigoGrande titulo="Atendimento" tela="C12" href="/artigos/atendimentos" />
            <CardArtigoGrande titulo="Locais de Apoio" tela="C13" href="/artigos/locais-de-apoio" />
            <CardArtigoGrande
              titulo="Botão de pânico"
              tela="C14"
              href="/artigos/botao-de-emergencia"
            />
            <CardArtigoGrande
              titulo="Quem desenvolveu"
              tela="C15"
              href="/artigos/quem-desenvolveu"
            />
          </Stack>
        </Grid>

        <Grid item className="EspacoInferior" />
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default C16;
