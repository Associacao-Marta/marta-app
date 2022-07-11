import React from "react";
import { Grid, Chip } from "@mui/material";
import "../../assets/css/base.css";
import "../../assets/css/C.css"
import BotaoAcessibilidade from "../C/BotaoAcessibilidade";

const HeaderTitulo = (props) => {
  return (
    <Grid container>
      <Grid container className="iconArtigoContainer" style={{marginTop: props.margin_top, marginBottom: props.margin_bottom}}>
      <Grid container className="circuloIcon" style={{marginTop: props.margin_top_icon}}/>
        <img src={props.img} className="iconArtigo"/>
      </Grid>

      <Grid className="tituloArtigo">
        <Grid item className="detalheTitulo"></Grid>

        <Grid item className="containerTituloArtigo">
        <div className="tituloH1">
          {props.titulo}
        </div>
        </Grid>
      </Grid>
        
          <Grid container direction="row" className="pageContainer">
              <Chip label={props.chip} style={{ backgroundColor: "#D3EBD3" }} className="chip" />
              <BotaoAcessibilidade />
          </Grid>
        
    </Grid>
  );
};

export default HeaderTitulo;
