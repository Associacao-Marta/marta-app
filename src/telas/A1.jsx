import React from "react";
import { Button, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "../assets/css/base.css";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ilustracao from "../assets/img/A1.svg";

const A1 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container className="containerMaior">
      <Grid container className="container">
        <h1 className="tituloOnboarding">Bem-vinda!</h1>
      </Grid>
      <Grid container className="container">
        <img src={ilustracao} className="ilustracao" />
      </Grid>
      <Grid item>
        <body2 className="A1body2">
          Olá! Seja bem-vinda ao aplicativo da Associação Marta. Nossa missão é
          atuar na prevenção e conscientização da violência estrutural contra a
          mulher.
        </body2>
      </Grid>
      <Grid container className="botaoOnboarding">
        <Grid item>
          <Button variant="contained" href="B1">
            Pular
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <MobileStepper
          position="bottom"
          variant="dots"
          steps={5}
          activeStep={activeStep}
          nextButton={
            <Button
              href="A2"
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

export default A1;
