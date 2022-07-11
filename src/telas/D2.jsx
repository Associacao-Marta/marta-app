import React from "react";
import { useState } from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import PopUpD2 from "../components/D/PopUpD2.jsx";
import PopUpCancelarD2 from "../components/D/PopUpCancelarD2.jsx";
import Header from "../components/Header";
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
  const [errorText1, setErrorText1] = useState("");
  const [errorText2, setErrorText2] = useState("");
  const [errorText3, setErrorText3] = useState("");
  const [newNameError, setNewNameError] = useState(false);
  const [newPhoneError, setNewPhoneError] = useState(false);
  const [newDescriptionError, setNewDescriptionError] = useState(false);
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

  const emptyValidator = () => {
    setNewNameError(false);
    if(newName === ''){
      setNewNameError(true);
      setErrorText1("Preencha o campo acima");
    } else{
      setErrorText1("");
    }
  }

  const emptyValidator2 = () => {
    setNewPhoneError(false);
    if(newPhone.length < 13){
      setNewPhoneError(true);
      setErrorText2("Informe um número de telefone válido");
    } else{
      setErrorText2("");
    }
}

  const emptyValidator3 = () => {
    setNewDescriptionError(false);
    if(newDescription === ''){
      setNewDescriptionError(true);
      setErrorText3("Preencha o campo acima");
    } else{
      setErrorText3("");
    }
}


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

  return (
    <Grid container>
      <Header titulo="Agendar atendimento" backButtonD2={true}
              newDate={formatedDate}
              newTime={formatedTime}
              newName={newName}
              newPhone={newPhone}
              newDescription={newDescription}
              newType={newType}/>

      <Grid container className="pageContainer">
        <Grid container className="formContainer">
          <h3 className="subtitulo">Nos conte um pouco sobre você</h3>

          <Grid container item className="textForm">
            <Stack direction="column" className="textForm" spacing={2}>
              <TextField
                label="Nome Completo"
                error={newNameError}
                onBlur={() => {emptyValidator()}}
                helperText={errorText1}
                variant="outlined"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              <InputMask
                mask={"99 99999-9999"}
                maskPlaceholder=""
                error={newPhoneError}
                onBlur={() => {emptyValidator2()}}
                helperText={errorText2}
                label="Telefone"
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }}
              >
                <TextField  />
              </InputMask>
              <TextField
                label="Conte como podemos te ajudar"
                error={newDescriptionError}
                onBlur={() => {emptyValidator3()}}
                helperText={errorText3}
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
                  variant={newType !== "psicólogas" ? "outlined" : "contained"}
                  onClick={setTypePsicologa}
                >
                  psicóloga
                </Button>
                <Button
                  sx={{ borderRadius: 8 }}
                  variant={newType !== "advogadas" ? "outlined" : "contained"}
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

          <Grid container item className="calendarioContainer">
             <DatePicker 
              autocomplete="off"
              selected={selectedCalendar} 
              onChange={(date) => setSelectedCalendar(date)} 
              placeholderText="Escolha uma data" 
              dateFormat="dd/MM/yyyy"
              locale="pt"
              shouldCloseOnSelect={false}
              closeOnScroll={false}
              disabledKeyboardNavigation={true}
              includeDateIntervals={[
                { start: new Date("2022/07/13"), end: addDays(new Date("2022/07/13"), 31) },
              ]}
              onKeyDown={(e) => {
                e.preventDefault();
             }}
              />
            <DatePicker
              autocomplete="off"
              selected={selectedCalendar}
              onChange={(date) => setSelectedCalendar(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Horário"
              dateFormat="h:mm aa"
              placeholderText="Escolha um horário" 
              shouldCloseOnSelect={false}
              closeOnScroll={false}
              disabledKeyboardNavigation={true}
              minTime={setHours(setMinutes(new Date(), 0), 8)}
              maxTime={setHours(setMinutes(new Date(), 8), 17)}
              onKeyDown={(e) => {
                e.preventDefault();
             }}
              />
          </Grid>

          <Grid container className="buttonContainer" style={{marginTop: 30}}>
            <PopUpD2
              newDate={formatedDate}
              newTime={formatedTime}
              newName={newName}
              newPhone={newPhone}
              newDescription={newDescription}
              newType={newType}
            />
          </Grid>
          <Grid container className="buttonContainer" >
            <PopUpCancelarD2
              newDate={formatedDate}
              newTime={formatedTime}
              newName={newName}
              newPhone={newPhone}
              newDescription={newDescription}
              newType={newType}
            />
          </Grid>
        </Grid>
      <Grid item className="EspacoInferior" />
      </Grid>

      <BotaoDoPanico alt={24}/>
    </Grid>
  );
};

export default D2;
