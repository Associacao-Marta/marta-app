import React from 'react';
import { Button, Grid } from '@mui/material';
import BotaoDoPanico from '../../components/BotaoDoPanico';
import MenuInferior from '../../components/MenuInferior';
import Header from '../../components/Header';
import img from '../../assets/img/atendimento.svg';
import '../../assets/css/base.css';
import '../../assets/css/D.css';

const Scheduling = () => {
  return (
    <Grid container className="pageDContainer">
      <Header titulo="Atendimento" backButton destino="/" />

      <Grid item container className="ilustracao">
        <img src={img} alt="agendamento" />
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
            href="confirmacao-agendamento"
            variant="contained"
            className="agendarAtendimentoButton"
            sx={{ borderRadius: 8 }}>
            Agendar Atendimento
          </Button>
        </Grid>
        <Grid container className="buttonContainer">
          <Button href="contato-agendamento">Consultar Atendimento</Button>
        </Grid>
        <div style={{ margin: '50px' }} />
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default Scheduling;
