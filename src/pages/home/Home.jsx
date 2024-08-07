import React from 'react';
import { Grid, Stack } from '@mui/material';
import Carrossel from '../../components/article/Carrossel';
import CardArtigo from '../../components/article/CardArtigo';
import '../../assets/css/base.css';
import '../../assets/css/articles.css';

const Home = () => {
  return (
    <Grid container className="pageCContainer">
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
              tela="motivos"
              href="/artigos/por-que-essas-relacoes-de-violencia-perduram"
            />
            <CardArtigo
              titulo="Sinais de que a mulher está sofrendo violência doméstica"
              tela="sinais"
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
              <CardArtigo titulo="Feminicídio " tela="feminicidio" href="/artigos/feminicidio" />
              <CardArtigo
                titulo="Maria da Penha"
                tela="mariaDaPenha"
                href="/artigos/maria-da-penha"
              />
              <CardArtigo
                titulo="Atendimento público específico e especializado no SUS"
                tela="atendimentoPublico"
                href="/artigos/atendimento-publico"
              />
              <CardArtigo
                titulo="Plano Nacional de Enfrentamento ao Feminicídio"
                tela="planoNacional"
                href="/artigos/plano-nacional"
              />
            </Stack>
          </Grid>
        </Grid>
        <div style={{ margin: '50px' }} />
      </Grid>
    </Grid>
  );
};

export default Home;
