import React from "react";
import { Button, Stack, Grid, TextField } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import PopUpD2 from "../components/PopUpD2.jsx";
import Header from "../components/Header";
import { useState } from "react";
import InputMask from "react-input-mask";
import "../assets/css/base.css";
import "../assets/css/D.css";

const D2 = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newType, setNewType] = useState("");

  const setTypePsicologa = () => {
    setNewType("psicólogas");
  };

  const setTypeAdvogada = () => {
    setNewType("advogadas");
  };

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

          <Grid container className="buttonContainer">
            <PopUpD2
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
