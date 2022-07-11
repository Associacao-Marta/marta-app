import React from "react";
import { Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ilustracao from "../assets/img/Onboarding/A4.svg";
import "../assets/css/base.css";
import "../assets/css/AB.css";


const A4 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(3);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container>
      <Grid container className="tituloContainer">
        <h1 className="tituloOnboarding">Atendimentos gratuitos</h1>
      </Grid>

      <Grid container item className="ilustracaoOnboarding">
        <img src={ilustracao} />
      </Grid>

      <Grid container item className="conteudoContainer-Onboarding">
        <p className="body2" style={{paddingLeft: 8, paddingRight: 8}}>
        Marque um dia e horário para receber assistência da Associação Marta. 
        Obtenha conforto psicológico e orientação jurídica de profissionais. 
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
              href="A5"
              size="small"
              onClick={handleNext}
              disabled={activeStep === 4}
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
              href="A3"
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

export default A4;
