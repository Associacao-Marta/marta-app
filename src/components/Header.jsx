import React from 'react';
import { Grid } from '@mui/material';
import BackButton from './BackButton';
import BackButtonD2 from './scheduling/BackButtonD2';
import '../assets/css/base.css';

const Header = (props) => {
  return (
    <Grid container className="containerHeader">
      <Grid item>
        <BackButtonActive backButton={props.backButton} destino={props.destino} />
        <BackButtonD2Active
          backButtonD2={props.backButtonD2}
          newDate={props.newDate}
          newTime={props.newTime}
          newName={props.newName}
          newPhone={props.newPhone}
          newDescription={props.newDescription}
          newType={props.newType}
        />
      </Grid>
      <Grid item className="itemHeaderTitulo">
        <div className="tituloHeader">{props.titulo}</div>
      </Grid>
    </Grid>
  );
};

const BackButtonActive = (props) => {
  if (props.backButton !== true) return null;
  return <BackButton destino={props.destino} />;
};

const BackButtonD2Active = (props) => {
  if (props.backButtonD2 !== true) return null;

  return (
    <BackButtonD2
      newDate={props.newDate}
      newTime={props.newTime}
      newName={props.newName}
      newPhone={props.newPhone}
      newDescription={props.newDescription}
      newType={props.newType}
    />
  );
};

export default Header;
