import React from 'react';
import { Grid, Stack } from '@mui/material';
import BotaoDoPanico from '../../components/BotaoDoPanico';
import MenuInferior from '../../components/MenuInferior';
import Carrossel from '../../components/C/Carrossel';
import CardArtigo from '../../components/C/CardArtigo';
import Header from '../../components/Header';
import '../../assets/css/base.css';
import '../../assets/css/C.css';

const Home = () => {
  return (
    <Grid container className="pageCContainer">
      <Header searchButton />

      <Grid container className="pageContainer">
        <Grid container className="carrosselContainer">
          <Grid item>
            <h2 className="tituloH2" style={{ color: '#337066' }}>
              Sobre a Associação Marta
            </h2>
          </Grid>
          <Grid container className="carrossel">
            <Carrossel />
          </Grid>
        </Grid>

        <Grid item>
          <h1 className="tituloH1">Artigos em destaque</h1>
        </Grid>

        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack direction="row" spacing={2}>
            <CardArtigo
              titulo="Por que essas relações de violência perduram?"
              tela="C5"
              href="/artigos/por-que-essas-relacoes-de-violencia-perduram"
            />
            <CardArtigo
              titulo="Sinais de que a mulher está sofrendo violência doméstica"
              tela="C6"
              href="/artigos/sinais-de-violencia-domestica"
            />
          </Stack>
        </Grid>

        <Grid container>
          <Grid item>
            <h1 className="tituloH1">Veja também</h1>
          </Grid>
          <Grid container className="carrosselArtigos" dir="ltr">
            <Stack direction="row" spacing={2}>
              <CardArtigo titulo="Feminicídio " tela="C7" href="/artigos/feminicidio" />
              <CardArtigo titulo="Maria da Penha" tela="C8" href="/artigos/maria-da-penha" />
              <CardArtigo
                titulo="Atendimento público específico e especializado no SUS"
                tela="C9"
                href="/artigos/atendimento-publico"
              />
              <CardArtigo
                titulo="Plano Nacional de Enfrentamento ao Feminicídio"
                tela="C10"
                href="/artigos/plano-nacional"
              />
            </Stack>
          </Grid>
        </Grid>
        <div style={{ margin: '50px' }} />
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default Home;
