import React, { useEffect } from 'react';
import { Button, Grid, Checkbox } from '@mui/material';
import termImage from '../../assets/img/Onboarding/termImage.svg';
import '../../assets/css/base.css';
import '../../assets/css/onboarding.css';

const TermsOfUse = () => {
  const [isTermChecked, setTermChecked] = React.useState(false);

  useEffect(() => {
    localStorage.setItem('checked', JSON.stringify(isTermChecked));
    if (isTermChecked) {
      setTermChecked(isTermChecked);
    }
  }, [isTermChecked]);

  const handleChange = (event) => {
    setTermChecked(event.target.checked);
  };

  return (
    <Grid container>
      <Grid container className="tituloContainer">
        <h1 className="tituloOnboarding">Termos de Uso</h1>
      </Grid>
      <Grid container item className="ilustracaoOnboarding">
        <img alt="termos de uso" src={termImage} />
      </Grid>
      <Grid container item className="conteudoContainer-Onboarding">
        <p className="body2">
          Antes de continuar, precisamos que leia e aceite os{' '}
          <a href="onboarding" style={{ color: '#337066' }}>
            Termos de Uso
          </a>
          .
          <br />
          <br />
          <br />
          <Checkbox checked={isTermChecked} onChange={handleChange} />
          Li e Aceito os Termos de Uso.
        </p>
      </Grid>
      <Grid container className="buttonContainer" sx={{ position: 'absolute', top: '79.75vh' }}>
        <Button
          variant="contained"
          href="/"
          className="addButton"
          disabled={isTermChecked !== true}
          sx={{ borderRadius: 8 }}>
          Finalizar
        </Button>
      </Grid>
    </Grid>
  );
};

export default TermsOfUse;
