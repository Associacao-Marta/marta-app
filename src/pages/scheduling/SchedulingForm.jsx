import React, { useState } from 'react';
import { Button, Stack, Grid, TextField } from '@mui/material';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import InputMask from 'react-input-mask';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import ConfirmFormDialog from '../../components/scheduling/ConfirmFormDialog';
import CancelFormDialog from '../../components/scheduling/CancelFormDialog';
import Header from '../../components/Header';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/calendario.css';
import '../../assets/css/base.css';
import '../../assets/css/D.css';
import { initialForm, verifyForm } from './utils/Scheduling.utils';

// name: pelo menos 3 caracteres e nenhum especial
// phone: 11 caracteres
// description: pelo menos 10 caracteres
// type: psicólogas ou advogadas
// date: data e hora definidas

const SchedulingForm = () => {
  const [form, setForm] = useState(initialForm);
  const [isConfirmOpen, setConfirmOpen] = React.useState(false);
  const [isCancelOpen, setCancelOpen] = React.useState(false);
  const isFormComplete = verifyForm(form);

  const handleSubmit = () => {
    // enviarAgendamento();
    console.log('enviarAgendamento', form);
    setConfirmOpen(true);
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
                  variant={form.type !== 'psicólogas' ? 'outlined' : 'contained'}
                  onClick={() => handleChangeForm('type', 'psicólogas')}>
                  psicóloga
                </Button>
                <Button
                  sx={{ borderRadius: 8 }}
                  variant={form.type !== 'advogadas' ? 'outlined' : 'contained'}
                  onClick={() => handleChangeForm('type', 'advogadas')}>
                  advogada
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid container className="dateForm">
            <h3 className="subtitulo">Quando gostaria de ser atendida?</h3>
          </Grid>
          <Grid container item className="calendarioContainer">
            <DatePicker
              autocomplete="off"
              selected={form.date}
              onChange={(selectedDate) => {
                const selectedDateWithTime = setHours(setMinutes(selectedDate, 0), 8);
                handleChangeForm('date', selectedDateWithTime);
              }}
              placeholderText="Escolha uma data"
              dateFormat="dd/MM/yyyy"
              locale="pt"
              shouldCloseOnSelect={false}
              closeOnScroll={false}
              disabledKeyboardNavigation
              includeDateIntervals={[
                {
                  start: addDays(new Date(), 2),
                  end: addDays(new Date(), 60),
                },
              ]}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
            />
            <DatePicker
              autocomplete="off"
              disabled={!form.date}
              selected={form.date}
              onChange={(selectedDate) => handleChangeForm('date', selectedDate)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Horário"
              dateFormat="h:mm aa"
              placeholderText="Escolha um horário"
              shouldCloseOnSelect={false}
              closeOnScroll={false}
              initialDate={setHours(setMinutes(new Date(), 0), 8)}
              disabledKeyboardNavigation
              minTime={setHours(setMinutes(new Date(), 0), 8)}
              maxTime={setHours(setMinutes(new Date(), 8), 17)}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
            />
          </Grid>
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
