import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import TopButton from "../components/TopButton";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import calendario from "../assets/mock/Picker.svg";
import PopUpD2 from "../components/PopUpD2.jsx";
import { useState } from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from "date-fns/locale";
import { addDays, subDays } from 'date-fns';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const D2 = () => {
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newType, setNewType] = useState("")
  const [selectedCalendar, setSelectedCalendar] = useState("");
  var formatedDate, formatedTime;
  registerLocale("ptBR", ptBR);
  const [language, setLanguage] = React.useState("ptBR");

  const setTypePsicologa = () => {
    setNewType("psicólogas")
  }

  const setTypeAdvogada = () => {
    setNewType("advogadas")
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

      return (formatedDate, formatedTime)   
  }

  setNewDateNewTime(selectedCalendar)
  console.log(formatedDate)
  console.log(formatedTime)

  return (
    <Grid container>
      <Grid item>
        <TopButton className="D1voltar" />
      </Grid>

      <Grid container>
        <h2 className="D2titulo">Nos conte um pouco sobre você</h2>
      </Grid>
      <Grid container className="D2form">
        <Stack direction="column" className="D2caixa">
          <TextField label="Nome Completo" variant="outlined" onChange={(event) => {setNewName(event.target.value)}}/>
          <TextField label="Telefone" variant="outlined" onChange={(event) => {setNewPhone(event.target.value)}}/>
          <TextField label="Conte como podemos te ajudar" variant="outlined" multiline rows={4} onChange={(event) => {setNewDescription(event.target.value)}}/>
        </Stack>
      </Grid>
      <Grid container>
        <h2 className="D2titulo">Com que profissional gostaria de falar?</h2>
      </Grid>
      <Grid container className="D2botoes">
        <Stack direction="row">
          <Button sx={{ marginRight: "70px" }} variant="contained" onClick={setTypePsicologa}>
            psicóloga
          </Button>
          <Button variant="contained" onClick={setTypeAdvogada}>advogada</Button>
        </Stack>
      </Grid>
      <Grid container>
        <h2 className="D2titulo">Quando gostaria de ser atendida?</h2>
        </Grid>
          <Grid container item>
            {/* <DatePicker 
            selected={selectedCalendar} 
            onChange={(date) => setSelectedCalendar(date)} 
            placeholderText="Escolha um horário" 
            className="D2caixa" 
            dateFormat="dd/MM/yyyy"
            showTimeSelect
            /> */}
              
             <DatePicker 
              wrapperClassName="datePicker"
              selected={selectedCalendar} 
              onChange={(date) => setSelectedCalendar(date)} 
              placeholderText="Escolha uma data" 
              className="D2caixa" 
              dateFormat="dd/MM/yyyy"
              locale={language}
              shouldCloseOnSelect={false}
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
              shouldCloseOnSelect={false}
              minTime={setHours(setMinutes(new Date(), 0), 8)}
              maxTime={setHours(setMinutes(new Date(), 8), 17)}
            />
          </Grid>
      <Grid container className="D2botoes">
        <Grid item>
          <PopUpD2 newDate={formatedDate} newTime={formatedTime} newName={newName} newPhone={newPhone} newDescription={newDescription} newType={newType} />
        </Grid>
        <Grid className="EspacoInferior" />
      </Grid>
      <BotaoDoPanico />

      <MenuInferior />
    </Grid>
  );
};

export default D2;
