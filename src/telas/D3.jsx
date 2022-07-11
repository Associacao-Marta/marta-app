import React from "react";
import { Grid, TextField } from "@mui/material";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import PopUpD3 from "../components/D/PopUpD3";
import Header from "../components/Header";
import InputMask from "react-input-mask";
import "../assets/css/base.css";
import "../assets/css/D.css";

const D3 = () => {
  const [protocolo, setProtocolo] = React.useState();

  return (
    <Grid container>
      <Header titulo="Consultar atendimento" backButton={true} destino="D1" />

      <Grid container className="pageContainer">
      <Grid container className="protocoloContainer">
      <InputMask
                mask={"99 99999-9999"}
                label="Telefone"
                onChange={(event) => {setProtocolo(event.target.value)}}>
                <TextField fullWidth/>
              </InputMask>

        <p className="body2" style={{textAlign: "justify"}}>
          Para confirmar data e horário do seu atendimento, basta inserir o
          número de telefone que você cadastrou durante o agendamento.
        </p>
      </Grid>
    </Grid>

      <Grid container item className="buttonContainer">
          <PopUpD3 protocolo={protocolo}/>
      </Grid>

      <BotaoDoPanico />
      <MenuInferior />

    </Grid>
  );
};

export default D3;
