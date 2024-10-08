import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import img1 from '../../assets/img/destaques/destaque_1.svg';
import img2 from '../../assets/img/destaques/destaque_2.svg';
import img3 from '../../assets/img/destaques/destaque_3.svg';
import '../../styles/base.css';

const steps = [
  {
    label: 'Destaque 1',
    description: (
      <a href="/artigos/quem-somos">
        <img src={img1} alt="quem somos" style={{ borderRadius: 4, width: '100%' }} />
      </a>
    ),
  },
  {
    label: 'Destaque 2',
    description: (
      <a href="/artigos/marta-escuta">
        <img src={img2} alt="marta escuta" style={{ borderRadius: 4, width: '100%' }} />
      </a>
    ),
  },
  {
    label: 'Destaque 3',
    description: (
      <a href="/artigos/doacoes">
        <img
          src={img3}
          alt="doações
      "
          style={{ borderRadius: 4, width: '100%' }}
        />
      </a>
    ),
  },
];

export default function Carrossel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box style={{ width: '100%', paddingRight: '8%' }}>
      <Box style={{ width: '100%' }}>{steps[activeStep].description}</Box>
      <MobileStepper
        style={{ backgroundColor: 'transparent' }}
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </Box>
  );
}
