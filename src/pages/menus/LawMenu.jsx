import React from 'react';
import { Grid, Stack } from '@mui/material';
import CardArtigoGrande from '../../components/article/CardArtigoGrande';
import BotaoDoPanico from '../../components/BotaoDoPanico';
import MenuInferior from '../../components/MenuInferior';
import Header from '../../components/Header';
import '../../assets/css/base.css';
import '../../assets/css/C.css';

const LawMenu = () => {
  return (
    <Grid container>
      <Header titulo="Artigos" backButton destino="/" />

      <Grid container className="pageContainer">
        <Grid item>
          <h2 className="tituloH2" style={{ color: '#337066' }}>
            Legislação
          </h2>
        </Grid>

        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack spacing={2} style={{ width: '100%' }}>
            <CardArtigoGrande
              titulo="Feminicídio "
              tela="feminicidio"
              href="/artigos/feminicidio"
            />
            <CardArtigoGrande
              titulo="Maria da Penha"
              tela="mariaDaPenha"
              href="/artigos/maria-da-penha"
            />
            <CardArtigoGrande
              titulo="Atendimento público específico e especializado no SUS"
              tela="atendimentoPublico"
              href="/artigos/atendimento-publico"
            />
            <CardArtigoGrande
              titulo="Plano Nacional de Enfrentamento ao Feminicídio"
              tela="planoNacional"
              href="/artigos/plano-nacional"
            />
          </Stack>
        </Grid>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default LawMenu;
