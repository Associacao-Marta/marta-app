import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import TopButton from "../components/TopButton";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import calendario from "../assets/mock/Picker.svg";
import PopUpD2 from "../components/PopUpD2.jsx";
import { useState } from "react";


const D2 = () => {
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newType, setNewType] = useState("")

  const setTypePsicologa = () => {
    setNewType("psicólogas")
  }

  const setTypeAdvogada = () => {
    setNewType("advogadas")
  }

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
      <Grid item>
        <img className="D2calendario" src={calendario} alt="calendário" />
      </Grid>
      <Grid container className="D2botoes">
        <Grid item>
          <PopUpD2 newName={newName} newPhone={newPhone} newDescription={newDescription} newType={newType} />
        </Grid>
        <Grid className="EspacoInferior" />
      </Grid>
      <BotaoDoPanico />

      <MenuInferior />
    </Grid>
  );
};

export default D2;
