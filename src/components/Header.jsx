import React from "react";
import { Grid } from "@mui/material";
import BackButton from "./BackButton";
import MenuArtigos from "../components/MenuArtigos";
import '../assets/css/base.css'

const Header = (props) => {

    const BackButtonActive = (props) => {
        if(props.backButton === true){
            return(
            <BackButton destino={props.destino}></BackButton>)
        }
    }

    const SearchButtonActive = (props) => {
        if(props.searchButton === true){
            return(
                <MenuArtigos/>
            )
        }
    }

    return(
    <Grid container className="containerHeader" >
        <Grid item>
            <BackButtonActive backButton={props.backButton} destino={props.destino} />
            <SearchButtonActive searchButton={props.searchButton}/>
        </Grid>
        <Grid item className="itemHeaderTitulo">
        <div className="tituloHeader">{props.titulo}</div>
        </Grid>
    </Grid>
        )
}

export default Header;