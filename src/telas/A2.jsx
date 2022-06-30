import React from "react";
import { Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ilustracao from "../assets/img/A1.svg";
import "../assets/css/base.css";
import "../assets/css/AB.css";

const A2 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container>
      <Grid container className="tituloContainer">
        <h1 className="tituloOnboarding">O que é a Associação Marta?</h1>
      </Grid>

      <Grid container item className="ilustracaoOnboarding">
        <img src={ilustracao} />
      </Grid>

      <Grid container item className="conteudoContainer-Onboarding">
        <p className="body2" >
        A Associação Marta é uma associação formada por
        mulheres que promove o acolhimento de vítimas de violência contra a mulher. 
        </p>
      </Grid>

      <Grid container className="pularOnboarding">
          <Button href="B1">
            Pular
          </Button>
      </Grid>
      
      <Grid item>
        <MobileStepper
          position="bottom"
          variant="dots"
          steps={6}
          activeStep={activeStep}
          nextButton={
            <Button
              href="A3"
              size="small"
              onClick={handleNext}
              disabled={activeStep === 2}
            >
              Avançar
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              href="/"
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Voltar
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default A2;
