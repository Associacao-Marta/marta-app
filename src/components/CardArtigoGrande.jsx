import React from "react";
import { Grid, Stack, Link } from "@mui/material";
import "../assets/css/cardArtigo.css";
import "../assets/css/base.css";
import icon_Artigo from "../assets/img/icon_artigo.svg";
import icon_Artigo2 from "../assets/img/icon_artigo2.svg";

const CardArtigoGrande = (props) => {

  return (
    <Link href={props.href} underline="none">
      <Grid container className="cardContainerGrande">
          <Grid item className="iconContainer-cardArtigoGrande">
            <img
              src={
                props.tema === "Entenda melhor"
                  ? icon_Artigo
                  : ""
                  || props.tema === "Como identificar"
                  ? icon_Artigo2
                  : ""
              }
            />
          </Grid>
          <Grid item className="tituloContainer-cardArtigoGrande">
            <h2 className="body2" style={{ color: "#337066" }}>
              {props.titulo}
            </h2>
          </Grid>
      </Grid>
    </Link>
  );
};

export default CardArtigoGrande;
