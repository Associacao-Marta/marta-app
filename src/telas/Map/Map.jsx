import React from 'react';

import { IconButton, Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BotaoDoPanico from '../../components/BotaoDoPanico';
import MenuInferior from '../../components/MenuInferior';
import Mapa from '../../components/mapa/mapa';
import '../../assets/css/mapa.css';

const Map = () => {
  return (
    <Grid container>
      <Grid className="containerBotao">
        <IconButton color="primary" aria-label="Voltar" href="C1">
          <ArrowBackIosNewIcon />
        </IconButton>
      </Grid>
      <Grid container>
        <Mapa />
        <BotaoDoPanico />
        <MenuInferior />
      </Grid>
    </Grid>
  );
};

export default Map;
