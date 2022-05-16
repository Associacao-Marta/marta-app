import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";

import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import "../assets/css/base.css";
import BotaoVoltarSuperior from "../components/BotaoVoltarSuperior";
import mapa from "../assets/mock/mockmapa.svg";

const Modelo = () => {
  return (
    <Grid container>
      <Grid item className="E1voltar">
        <BotaoVoltarSuperior />
      </Grid>
      <Grid item className="E1voltar">
        <TextField
          label="Buscar"
          variant="filled"
          sx={{ marginLeft: "50px" }}
        />
      </Grid>
      <Grid item className="E1voltar">
        <IconButton color="primary">
          <SettingsApplicationsIcon
            sx={{ fontSize: "34px", marginLeft: "300px" }}
          />
        </IconButton>
      </Grid>
      <img src={mapa} />

      <Grid item>
        <List
          className="Lista"
          sx={{
            bgcolor: "background.paper",
            width: "360px",
          }}
        >
          <ListItem>
            <ListItemText>Local de Apoio</ListItemText>
            <ListItemText>
              Descrição resumida sobre o local de apoio.
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Local de Apoio</ListItemText>
            <ListItemText>
              Descrição resumida sobre o local de apoio.
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Local de Apoio</ListItemText>
            <ListItemText>
              Descrição resumida sobre o local de apoio.
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Local de Apoio</ListItemText>
            <ListItemText>
              Descrição resumida sobre o local de apoio.
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Local de Apoio</ListItemText>
            <ListItemText>
              Descrição resumida sobre o local de apoio.
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Local de Apoio</ListItemText>
            <ListItemText>
              Descrição resumida sobre o local de apoio.
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Grid>

      <BotaoDoPanico />
      <Grid className="EspacoInferior" />
      <MenuInferior />
    </Grid>
  );
};

export default Modelo;
