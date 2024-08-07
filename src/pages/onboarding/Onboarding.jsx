import React from 'react';
import { Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import '../../assets/css/base.css';
import '../../assets/css/onboarding.css';
import onBoardingData from './OnBoardingData';

const Onboarding = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);
  const navigate = useNavigate();
  const currentData = onBoardingData.find((data) => data.step === activeStep);

  const handleNext = () => {
    if (activeStep === 6) {
      navigate('/termos-de-uso');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container>
      <Grid container className="tituloContainer">
        <h1 className="tituloOnboarding">{currentData.title}</h1>
      </Grid>
      <Grid container item className="ilustracaoOnboarding">
        <img src={currentData.image} alt={currentData.alt} />
      </Grid>
      <Grid container item className="conteudoContainer-Onboarding">
        <p className="body2">{currentData.description}</p>
      </Grid>
      <Grid container className="pularOnboarding">
        <Button href="termos-de-uso">Pular</Button>
      </Grid>
      <Grid item>
        <MobileStepper
          style={{ backgroundColor: 'transparent' }}
          position="bottom"
          variant="dots"
          steps={6}
          activeStep={activeStep - 1}
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Voltar
            </Button>
          }
          nextButton={
            <Button size="small" onClick={handleNext}>
              Avançar
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Onboarding;
