import React from "react";
import { IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../assets/css/base.css"

const BackButton = (props) => {
  return (
    <div className="TopButton">
      <IconButton color="primary" variant="" aria-label="Voltar" href={props.destino}>
        <ArrowBackIosNewIcon />
      </IconButton>
    </div>
  );
};

export default BackButton;
