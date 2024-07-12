import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import '../assets/css/base.css';

const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  return (
    <Grid className="containerBotao">
      <IconButton color="primary" aria-label="Voltar" onClick={handleGoBack}>
        <ArrowBackIosNewIcon />
      </IconButton>
    </Grid>
  );
};

export default BackButton;
