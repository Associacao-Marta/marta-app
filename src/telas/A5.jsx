import React from "react";
import { Button, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "../assets/css/base.css";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
/** import Pontos from "../components/Pontos"; **/

const A4 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(4);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container className="A3">
      <Grid className="A1h1">
        <h1>Caminho para o acolhimento</h1>
      </Grid>
      <Grid container className="A1ilustracao">
        <CircleIcon sx={{ fontSize: "200px" }} />
      </Grid>
      <Grid item>
        <body2 className="A1body2">
          Encontre o serviço de acolhimento mais perto de você e consulte
          informações como endereço, telefone e horário de atendimento.
        </body2>
      </Grid>
      <Grid item>
        <Button href="B1" className="A1pular">
          Pular
        </Button>
      </Grid>
      <Grid item>
        <MobileStepper
          position="bottom"
          variant="dots"
          steps={5}
          activeStep={activeStep}
          nextButton={
            <Button
              href="B1"
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
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
              href="A4"
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
