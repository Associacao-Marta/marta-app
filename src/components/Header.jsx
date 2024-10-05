import React from 'react';
import { Grid } from '@mui/material';

import '../styles/base.css';
import BackButton from './BackButton';

const Header = (props) => {
  const { titulo } = props;
  return (
    <Grid container className="containerHeader">
      <BackButton />
      <Grid item className="itemHeaderTitulo">
        <div className="tituloHeader">{titulo}</div>
      </Grid>
    </Grid>
  );
};

export default Header;
