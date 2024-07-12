import React, { useState } from 'react';
import { Button, Stack, Grid, TextField } from '@mui/material';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import InputMask from 'react-input-mask';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import ConfirmAppointment from '../../components/scheduling/ConfirmAppointment';
import CancelAppointment from '../../components/scheduling/CancelAppointment';
import Header from '../../components/Header';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/calendario.css';
import '../../assets/css/base.css';
import '../../assets/css/D.css';
import { initialForm } from './utils/Scheduling.utis';

const SchedulingForm = () => {
  const [form, setForm] = useState(initialForm);

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
                // error="error name"
                helperText="Preencha o campo acima"
                variant="outlined"
                onChange={(event) => handleChangeForm('name', event.target.value)}
              />
              <InputMask
                mask="99 99999-9999"
                maskPlaceholder=""
                // error="error phone"
                helperText="Informe um número de telefone válido"
                label="Telefone"
                onChange={(event) => handleChangeForm('phone', event.target.value)}>
                <TextField />
              </InputMask>
              <TextField
                label="Conte como podemos te ajudar"
                // error="error description"
                helperText="Preencha o campo acima"
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
              onChange={(date) => {
                const selectedDateWithTime = setHours(setMinutes(date, 0), 8);
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
              onChange={(date) => handleChangeForm('date', date)}
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
            <ConfirmAppointment form={form} />
          </Grid>
          <Grid container className="buttonContainer">
            <CancelAppointment />
          </Grid>
        </Grid>
        <Grid item className="EspacoInferior" />
      </Grid>
    </Grid>
  );
};

export default SchedulingForm;
