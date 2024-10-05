import React, { useState } from 'react';
import { Button, Stack, Grid, TextField } from '@mui/material';
import InputMask from 'react-input-mask';
import ConfirmFormDialog from '../../components/scheduling/ConfirmFormDialog';
import CancelFormDialog from '../../components/scheduling/CancelFormDialog';
import Header from '../../components/Header';
import { initialForm, verifyForm } from './utils/Scheduling.utils';
import CalendarContainer from './CalendarContainer';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/calendario.css';
import '../../styles/base.css';
import '../../styles/scheduling.css';
import usePostAppointment from './hooks/usePostAppointment';

const SchedulingForm = () => {
  const [form, setForm] = useState(initialForm);
  const [isConfirmOpen, setConfirmOpen] = React.useState(false);
  const [isCancelOpen, setCancelOpen] = React.useState(false);
  const isFormComplete = verifyForm(form);
  const { mutate } = usePostAppointment();

  const handleSubmit = () => {
    const formattedDate = {
      date: form.date.toISOString().split('T')[0],
      time: form.date.toTimeString().split(' ')[0].slice(0, 5),
    };

    mutate(
      {
        category: form.type,
        appointment: {
          attender_name: form.name,
          attender_phone_number: form.phone,
          date: formattedDate.date,
          time_slot: formattedDate.time,
          details: form.description,
        },
      },
      {
        onSuccess: () => {
          setConfirmOpen(true);
        },
        onError: (error) => {
          console.error('Error:', error);
        },
      },
    );
  };

  const handleChangeForm = (prop, value) => {
    setForm({ ...form, [prop]: value });
  };

  return (
    <Grid container>
      <Header titulo="Agendar atendimento" />
      <Grid container className="pageContainer">
        <Grid container className="formContainer">
          <h3 className="subtitulo">Nos conte um pouco sobre você</h3>
          <Grid container item className="textForm">
            <Stack direction="column" className="textForm" spacing={2}>
              <TextField
                label="Nome Completo"
                variant="outlined"
                onChange={(event) => handleChangeForm('name', event.target.value)}
              />
              <InputMask
                mask="99 99999-9999"
                maskPlaceholder=""
                label="Telefone"
                onChange={(event) => handleChangeForm('phone', event.target.value)}>
                <TextField />
              </InputMask>
              <TextField
                label="Conte como podemos te ajudar"
                variant="outlined"
                multiline
                rows={4}
                onChange={(event) => handleChangeForm('description', event.target.value)}
              />
            </Stack>
          </Grid>
          <Grid container item className="typeForm">
            <h3 className="subtitulo">Com que profissional gostaria de falar?</h3>
            <Grid container className="buttonContainer">
              <Stack direction="row" spacing={5}>
                <Button
                  sx={{ borderRadius: 8 }}
                  variant={form.type === 'psychological' ? 'contained' : 'outlined'}
                  onClick={() => handleChangeForm('type', 'psychological')}>
                  psicóloga
                </Button>
                <Button
                  sx={{ borderRadius: 8 }}
                  variant={form.type === 'legal' ? 'contained' : 'outlined'}
                  onClick={() => handleChangeForm('type', 'legal')}>
                  advogada
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <CalendarContainer form={form} handleChangeForm={handleChangeForm} />
          <Grid container className="buttonContainer" style={{ marginTop: 30 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ borderRadius: 8 }}
              disabled={!isFormComplete}>
              Enviar
            </Button>
          </Grid>
          <Grid container className="buttonContainer">
            <Button
              variant="text"
              onClick={() => {
                setCancelOpen(true);
              }}
              sx={{ borderRadius: 8 }}>
              Cancelar
            </Button>
          </Grid>
        </Grid>
        <Grid item className="EspacoInferior" />
      </Grid>
      <ConfirmFormDialog isOpen={isConfirmOpen} handleClose={() => setConfirmOpen(false)} />
      <CancelFormDialog isOpen={isCancelOpen} handleClose={() => setCancelOpen(false)} />
    </Grid>
  );
};

export default SchedulingForm;
