import React from 'react';
import { Grid, Link } from '@mui/material';
import '../../assets/css/cardArtigo.css';
import '../../assets/css/base.css';
import C5Icon from '../../assets/img/artigos/C5_icon.svg';
import C6Icon from '../../assets/img/artigos/C6_icon.svg';
import C7Icon from '../../assets/img/artigos/C7_icon.svg';
import C8Icon from '../../assets/img/artigos/C8_icon.svg';
import C9Icon from '../../assets/img/artigos/C9_icon.svg';
import C10Icon from '../../assets/img/artigos/C10_icon.svg';
import C11Icon from '../../assets/img/artigos/C11_icon.svg';
import C12Icon from '../../assets/img/artigos/C12_icon.svg';
import C13Icon from '../../assets/img/artigos/C13_icon.svg';
import C14Icon from '../../assets/img/artigos/C14_icon.svg';
import C15Icon from '../../assets/img/artigos/C15_icon.svg';

const icons = {
  C5: C5Icon,
  C6: C6Icon,
  C7: C7Icon,
  C8: C8Icon,
  C9: C9Icon,
  C10: C10Icon,
  C11: C11Icon,
  C12: C12Icon,
  C13: C13Icon,
  C14: C14Icon,
  C15: C15Icon,
};

const CardArtigoGrande = (props) => {
  const selectedIcon = icons[props.tela] || '';

  return (
    <Link href={props.href} underline="none">
      <Grid container className="cardContainerGrande">
        <Grid item className="iconContainer-cardArtigoGrande">
          <img src={selectedIcon} alt={props.titulo} />
        </Grid>
        <Grid item className="tituloContainer-cardArtigoGrande">
          <h2 className="body2" style={{ color: '#337066' }}>
            {props.titulo}
          </h2>
        </Grid>
      </Grid>
    </Link>
  );
};

export default CardArtigoGrande;
