import React from "react";
import { IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const BotaoVoltarSuperior = () => {
  return (
    <Grid>
      <IconButton color="primary" variant="" aria-label="Voltar">
        <ArrowBackIosNewIcon />
      </IconButton>
    </Grid>
  );
};

export default BotaoVoltarSuperior;
