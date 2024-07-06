import React from 'react';
import { Grid, Stack } from '@mui/material';
import CardArtigoGrande from '../../components/article/CardArtigoGrande';
import Header from '../../components/Header';
import '../../assets/css/base.css';
import '../../assets/css/C.css';

const AppMenu = () => {
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
            <CardArtigoGrande titulo="Artigos" tela="artigos" href="/artigos/artigos" />
            <CardArtigoGrande
              titulo="Atendimento"
              tela="atendimento"
              href="/artigos/atendimentos"
            />
            <CardArtigoGrande
              titulo="Locais de Apoio"
              tela="locaisDeApoio"
              href="/artigos/locais-de-apoio"
            />
            <CardArtigoGrande
              titulo="Botão de pânico"
              tela="botaoDePanico"
              href="/artigos/botao-de-emergencia"
            />
            <CardArtigoGrande
              titulo="Quem desenvolveu"
              tela="equipe"
              href="/artigos/quem-desenvolveu"
            />
          </Stack>
        </Grid>

        <Grid item className="EspacoInferior" />
      </Grid>
    </Grid>
  );
};

export default AppMenu;
