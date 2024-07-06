import React from 'react';
import { Grid, TextField } from '@mui/material';
import InputMask from 'react-input-mask';
import PopUpD3 from '../../components/scheduling/PopUpD3';
import Header from '../../components/Header';
import '../../assets/css/base.css';
import '../../assets/css/D.css';

const SchedulingContact = () => {
  const [protocolo, setProtocolo] = React.useState();

  return (
    <Grid container>
      <Header titulo="Consultar atendimento" backButton destino="atendimento" />

      <Grid container className="pageContainer">
        <Grid container className="protocoloContainer">
          <InputMask
            mask="99 99999-9999"
            label="Telefone"
            onChange={(event) => {
              setProtocolo(event.target.value);
            }}>
            <TextField fullWidth />
          </InputMask>

          <p className="body2" style={{ textAlign: 'justify' }}>
            Para confirmar data e horário do seu atendimento, basta inserir o número de telefone que
            você cadastrou durante o agendamento.
          </p>
        </Grid>
      </Grid>

      <Grid container item className="buttonContainer">
        <PopUpD3 protocolo={protocolo} />
      </Grid>
    </Grid>
  );
};

export default SchedulingContact;
