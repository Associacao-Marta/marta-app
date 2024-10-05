import React from 'react';
import { Grid, Chip } from '@mui/material';
import '../../styles/base.css';
import '../../styles/articles.css';
import BotaoAcessibilidade from './BotaoAcessibilidade';

const HeaderTitulo = (props) => {
  return (
    <Grid container>
      <Grid
        container
        className="iconArtigoContainer"
        style={{ marginTop: '16px', marginBottom: '75px' }}>
        <Grid container className="circuloIcon">
          <img src={props.img} alt="ir para artigo" className="iconArtigo" />
        </Grid>
      </Grid>

      <Grid className="tituloArtigo">
        <Grid item className="detalheTitulo" />

        <Grid item className="containerTituloArtigo">
          <div className="tituloH1">{props.titulo}</div>
        </Grid>
      </Grid>

      <Grid container direction="row" className="pageContainer">
        <Chip label={props.chip} style={{ backgroundColor: '#D3EBD3' }} className="chip" />
        <BotaoAcessibilidade />
      </Grid>
    </Grid>
  );
};

export default HeaderTitulo;
