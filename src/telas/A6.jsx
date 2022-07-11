import React from "react";
import { Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ilustracao from "../assets/img/Onboarding/A6.svg";
import "../assets/css/base.css";
import "../assets/css/AB.css";


const A5 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(5);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container>
      <Grid container className="tituloContainer">
        <h1 className="tituloOnboarding">Caminho para o acolhimento</h1>
      </Grid>

      <Grid container item className="ilustracaoOnboarding">
        <img src={ilustracao} />
      </Grid>

      <Grid container item className="conteudoContainer-Onboarding">
        <p className="body2" style={{paddingLeft: 8, paddingRight: 8}}>
        Encontre o serviço de acolhimento mais perto de você e 
        consulte informações como endereço, telefone e horário 
        de atendimento. 
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
              href="B1"
              size="small"
              onClick={handleNext}
              disabled={activeStep === 6}
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
              href="A5"
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

export default A5;
