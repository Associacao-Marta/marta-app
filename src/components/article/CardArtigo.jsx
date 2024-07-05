import React from 'react';
import { Grid, Link } from '@mui/material';
import '../../assets/css/cardArtigo.css';
import '../../assets/css/base.css';
import { icons } from './CardArtigoGrande';

const CardArtigo = (props) => {
  const selectedIcon = icons[props.tela] || '';

  return (
    <Link href={props.href} underline="none">
      <Grid container className="cardContainer">
        <Grid item className="iconContainer-cardArtigo">
          <img src={selectedIcon} alt={props.titulo} />
        </Grid>
        <Grid item className="tituloContainer-cardArtigo">
          <h2 className="body2" style={{ color: '#337066' }}>
            {props.titulo}
          </h2>
        </Grid>
      </Grid>
    </Link>
  );
};

export default CardArtigo;
