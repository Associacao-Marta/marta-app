import React from "react";
import { Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ilustracao from "../assets/img/Onboarding/A1.svg";
import "../assets/css/base.css";
import "../assets/css/AB.css";

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
    <Grid container>
      <Grid container className="tituloContainer">
        <h1 className="tituloOnboarding">Bem-vinda!</h1>
      </Grid>

      <Grid container item className="ilustracaoOnboarding">
        <img src={ilustracao} />
      </Grid>

      <Grid container item className="conteudoContainer-Onboarding">
        <p className="body2">
        Olá! Seja bem-vinda ao aplicativo da Associação Marta.
        Nossa missão é atuar na prevenção e conscientização da violência contra a mulher.
        </p>
      </Grid>

      <Grid container className="pularOnboarding">
          <Button href="B1">
            Pular
          </Button>
      </Grid>

      <Grid item>
        <MobileStepper
          style={{ backgroundColor: "transparent" }}
          position="bottom"
          variant="dots"
          steps={6}
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
