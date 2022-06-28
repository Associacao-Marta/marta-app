import React from "react";
import {
  Autocomplete,
  Card,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import Carrossel from "../components/Carrossel";
import "../assets/css/base.css";
import img1 from "../assets/img/C1artigo1.svg";
import img2 from "../assets/img/C1artigo2.svg";
import img3 from "../assets/img/C1artigo3.svg";

import Header from "../components/Header";
import "../assets/css/C.css";

const busca = [
  { label: "Buscar" },
  { label: "Entenda melhor" },
  { label: "Como identificar" },
];

const C1 = () => {
  return (
    // Colocar autocomplete com TextField para busca????
    // Descobrir como deixar os chips deletable
    // Componentizar MobileStepper
    // Componentizar cards
    // botão flutuante z-index DEIXAR EM CIMA
    // fixar bottom navigation
    // componentizar botão de settings
    // <Grid container className="C1buscar">
    //   <Autocomplete
    //     variant="outlined"
    //     sx={{ marginLeft: "-10px", width: "270px" }}
    //     disablePortal
    //     id="filtros"
    //     options={busca}
    //     renderInput={(params) => <TextField {...params} label="Buscar" />}
    //   />
    //   <IconButton color="primary">
    //     <SettingsApplicationsIcon sx={{ fontSize: "36px" }} />
    //   </IconButton>
    // </Grid>

    <Grid container className="pageCContainer">
        <Header titulo="Artigos" searchButton={true} />
        
      <Grid container className="pageContainer">
        <Grid container className="carrosselContainer">
          <Grid item>
            <p className="tituloH2" style={{ color: "#337066" }}>
              Sobre a Associação Marta
            </p>
          </Grid>
          <Grid container className="carrossel">
            <Carrossel />
          </Grid>
        </Grid>

        <Grid item>
          <p className="tituloH1">Artigos em destaque</p>
        </Grid>

        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack direction="row" spacing={2}>
            <a href="C2">
              <img src={img1} />
            </a>
            <a href="C2">
              <img src={img1} />
            </a>
            <a href="C2">
              <img src={img3} />
            </a>
          </Stack>
        </Grid>

        <Grid container>
          <Grid item>
            <p className="tituloH1">Veja também</p>
          </Grid>
          <Grid container dir="ltr">
            <Stack direction="row" spacing={2}>
              <a href="C2">
                <img src={img3} />
              </a>
            </Stack>
          </Grid>
        </Grid>

      </Grid>

      <BotaoDoPanico />
      <Grid item className="EspacoInferior" />

      <MenuInferior />
    </Grid>
  );
};

export default C1;
