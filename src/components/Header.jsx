import React from "react";
import { Grid } from "@mui/material";
import TopButton from "./TopButton";
import '../assets/css/base.css'

const Header = (props) => {
    return(
    <Grid container className="containerHeader" >
        <Grid item>
            <TopButton destino={props.destino}></TopButton>
        </Grid>
        <Grid item>
        <div className="tituloHeader">{props.titulo}</div>
        </Grid>
    </Grid>
        )
}

export default Header;