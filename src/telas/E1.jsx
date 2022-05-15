import React from "react";
import {
  Card,
  Chip,
  Grid,
  IconButton,
  Menu,
  Stack,
  TextField,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import RectangleIcon from "@mui/icons-material/Rectangle";
import BotaoDoPanico from "../components/BotaoDoPanico";
import MenuInferior from "../components/MenuInferior";
import mapa from "../assets/mock/mockmapa.svg";

const E1 = () => {
  return (
    <Grid>
      <img src={mapa} />
      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default E1;
