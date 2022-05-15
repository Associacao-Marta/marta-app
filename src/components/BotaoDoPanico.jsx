import React from "react";
import { Fab, Grid } from "@mui/material";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import "../assets/css/base.css";

const BotaoDoPanico = () => {
  return (
    <Grid container className="BotaoDoPanico">
      <Fab color="primary">
        <GppMaybeIcon />
      </Fab>
    </Grid>
  );
};

export default BotaoDoPanico;
