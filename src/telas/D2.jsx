import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import PopUpD2 from "../components/PopUpD2.jsx";
import Header from "../components/Header";
import { useState } from "react";
import InputMask from "react-input-mask";
import DatePicker, {registerLocale} from "react-datepicker";
import { addDays } from 'date-fns';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import pt from "date-fns/locale/pt";
import 'react-datepicker/dist/react-datepicker.css';
import "../assets/css/calendario.css"
import "../assets/css/base.css";
import "../assets/css/D.css";


const D2 = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newType, setNewType] = useState("");
  const [selectedCalendar, setSelectedCalendar] = useState("");
  var formatedDate, formatedTime;
  
  registerLocale("pt", pt);

  const setTypePsicologa = () => {
    setNewType("psicólogas");
  };

  const setTypeAdvogada = () => {
    setNewType("advogadas");
  };

  const setNewDateNewTime = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1), 
      day = '' + d.getDate(), 
      year = d.getFullYear(),
      hour = d.getHours(),
      minutes = d.getMinutes();
      
      if(month.length < 2){
        month = '0' + month;
      }
      if(day.length < 2){
        day = '0' + day;
      }
      if(minutes === 0){
      minutes = minutes + "0";
      }
      
      formatedDate = [day, month, year].join('/');
      formatedTime = (hour + ":" + minutes);

      return (formatedDate, formatedTime);   
  }

  setNewDateNewTime(selectedCalendar)
  console.log(formatedDate)
  console.log(formatedTime)

  return (
    <Grid container>
      <Header titulo="Agendar atendimento" backButton={true} destino="D1"/>

      <Grid container className="pageContainer">
        <Grid container className="formContainer">
          <h3 className="subtitulo">Nos conte um pouco sobre você</h3>

          <Grid container item className="textForm">
            <Stack direction="column" className="textForm" spacing={2}>
              <TextField
                label="Nome Completo"
                variant="outlined"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              <InputMask
                mask={"+55 (99) 99999-9999"}
                label="Telefone"
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }}
              >
                <TextField />
              </InputMask>
              <TextField
                label="Conte como podemos te ajudar"
                variant="outlined"
                multiline
                rows={4}
                onChange={(event) => {
                  setNewDescription(event.target.value);
                }}
              />
            </Stack>
          </Grid>

          <Grid container item className="typeForm">
            <h3 className="subtitulo">
              Com que profissional gostaria de falar?
            </h3>

            <Grid container className="buttonContainer">
              <Stack direction="row" spacing={5}>
                <Button
                  sx={{ borderRadius: 8 }}
                  variant={newType != "psicólogas" ? "outlined" : "contained"}
                  onClick={setTypePsicologa}
                >
                  psicóloga
                </Button>
                <Button
                  sx={{ borderRadius: 8 }}
                  variant={newType != "advogadas" ? "outlined" : "contained"}
                  onClick={setTypeAdvogada}
                >
                  advogada
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Grid container className="dateForm">
            <h3 className="subtitulo">Quando gostaria de ser atendida?</h3>
          </Grid>

          <Grid container item>
             <DatePicker 
              wrapperClassName="datePicker"
              selected={selectedCalendar} 
              onChange={(date) => setSelectedCalendar(date)} 
              placeholderText="Escolha uma data" 
              className="D2caixa" 
              dateFormat="dd/MM/yyyy"
              locale="pt"
              shouldCloseOnSelect={true}
              includeDateIntervals={[
                { start: new Date("2022/07/13"), end: addDays(new Date("2022/07/13"), 31) },
              ]}
              />
            <DatePicker
              wrapperClassName="timePicker"
              selected={selectedCalendar}
              onChange={(date) => setSelectedCalendar(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Horário"
              dateFormat="h:mm aa"
              placeholderText="Escolha um horário" 
              shouldCloseOnSelect={true}
              minTime={setHours(setMinutes(new Date(), 0), 8)}
              maxTime={setHours(setMinutes(new Date(), 8), 17)}
              />
          </Grid>

          <Grid container className="buttonContainer">
            <PopUpD2
              newDate={formatedDate}
              newTime={formatedTime}
              newName={newName}
              newPhone={newPhone}
              newDescription={newDescription}
              newType={newType}
            />
          </Grid>
          <Grid container className="buttonContainer">
            <Button href="D1">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default D2;
