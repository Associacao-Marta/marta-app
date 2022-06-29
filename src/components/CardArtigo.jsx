import React from "react";
import { Grid } from "@mui/material";
import "../assets/css/cardArtigo.css"
import "../assets/css/base.css";


const CardArtigo = (props) => {

    return(
        <Grid container className="cardContainer">
            <Grid item className="iconContainer-cardArtigo">
                <img src={props.img} />
            </Grid>
            <Grid item className="tituloContainer-cardArtigo">
                <h2 className="body2" style={{color: "#337066"}} >{props.titulo}</h2>
            </Grid>
        </Grid>
    );
}


export default CardArtigo;