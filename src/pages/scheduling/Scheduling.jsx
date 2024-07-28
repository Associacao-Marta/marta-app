import React from 'react';
import { Button, Grid } from '@mui/material';
import Header from '../../components/Header';
import img from '../../assets/img/atendimento.svg';
import '../../assets/css/base.css';
import '../../assets/css/D.css';

const Scheduling = () => {
  return (
    <Grid container className="pageDContainer">
      <Header titulo="Atendimento" />

      <Grid item container className="ilustracao">
        <img src={img} alt="atendimento" />
      </Grid>

      <Grid container className="tituloContainer">
        <Grid
          container
          className="tituloH1"
          style={{ color: '#337066', paddingBottom: '8px', justifyContent: 'center' }}>
          Marque um horário gratuito com a Associação Marta
        </Grid>
        <Grid className="body2">
          Está precisando de ajuda? Temos serviços psicológicos e jurídicos gratuitos para você!
        </Grid>
      </Grid>

      <Grid container>
        <Grid container className="buttonContainer">
          <Button
            href="atendimento-formulario"
            variant="contained"
            className="agendarAtendimentoButton"
            sx={{ borderRadius: 8, maxWidth: 220 }}>
            Agendar Atendimento
          </Button>
        </Grid>
        <div style={{ margin: '50px' }} />
      </Grid>
    </Grid>
  );
};

export default Scheduling;
