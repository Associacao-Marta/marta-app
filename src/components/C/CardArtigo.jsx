import React from "react";
import { Grid, Stack, Link } from "@mui/material";
import "../../assets/css/cardArtigo.css";
import "../../assets/css/base.css";
import C5_icon from "../../assets/img/artigos/C5_icon.svg";
import C6_icon from "../../assets/img/artigos/C6_icon.svg";
import C7_icon from "../../assets/img/artigos/C7_icon.svg";
import C8_icon from "../../assets/img/artigos/C8_icon.svg";
import C9_icon from "../../assets/img/artigos/C9_icon.svg";
import C10_icon from "../../assets/img/artigos/C10_icon.svg";
import C11_icon from "../../assets/img/artigos/C11_icon.svg";
import C12_icon from "../../assets/img/artigos/C12_icon.svg";
import C13_icon from "../../assets/img/artigos/C13_icon.svg";
import C14_icon from "../../assets/img/artigos/C14_icon.svg";
import C15_icon from "../../assets/img/artigos/C15_icon.svg";

const CardArtigo = (props) => {

  return (
    <Link href={props.href} underline="none">
      <Grid container className="cardContainer">
          <Grid item className="iconContainer-cardArtigo">
            <img
              src={
                props.tela === "C5"
                  ? C5_icon
                  : "" || props.tela === "C6"
                  ? C6_icon
                  : "" || props.tela === "C7"
                  ? C7_icon
                  : "" || props.tela === "C8"
                  ? C8_icon
                  : "" || props.tela === "C9"
                  ? C9_icon
                  : "" || props.tela === "C10"
                  ? C10_icon
                  : "" || props.tela === "C11"
                  ? C11_icon 
                  : "" || props.tela === "C12"
                  ? C12_icon 
                  : "" || props.tela === "C13"
                  ? C13_icon
                  : "" || props.tela === "C14"
                  ? C14_icon
                  : "" || props.tela === "C15"
                  ? C15_icon
                  : "" 
              }
            />
          </Grid>
          <Grid item className="tituloContainer-cardArtigo">
            <h2 className="body2" style={{ color: "#337066" }}>
              {props.titulo}
            </h2>
          </Grid>
      </Grid>
    </Link>
  );
};

export default CardArtigo;
