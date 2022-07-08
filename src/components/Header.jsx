import React from "react";
import { Grid } from "@mui/material";
import BackButton from "./BackButton";
import BackButtonD2 from "../components/D/BackButtonD2"
import MenuArtigos from "../components/C/MenuArtigos";
import '../assets/css/base.css'

const Header = (props) => {

    const BackButtonActive = (props) => {
        if(props.backButton === true){
            return(
            <BackButton destino={props.destino}></BackButton>
            )
        }
    }

    const BackButtonD2Active = (props) => {
        if(props.backButtonD2 === true){
            return(
            <BackButtonD2 newDate={props.newDate}
            newTime={props.newTime}
            newName={props.newName}
            newPhone={props.newPhone}
            newDescription={props.newDescription}
            newType={props.newType}/>
            )
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
            <BackButtonD2Active backButtonD2={props.backButtonD2} 
            newDate={props.newDate}
            newTime={props.newTime}
            newName={props.newName}
            newPhone={props.newPhone}
            newDescription={props.newDescription}
            newType={props.newType}/>
        </Grid>
        <Grid item className="itemHeaderTitulo">
        <div className="tituloHeader">{props.titulo}</div>
        </Grid>
    </Grid>
        )
}

export default Header;