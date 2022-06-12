import React from "react";
import { Button, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "../assets/css/base.css";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
/** import Pontos from "../components/Pontos"; **/

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
    <Grid container className="A1">
      <Grid className="A1h1">
        <h1>Conhecimento nas suas mãos</h1>
      </Grid>
      <Grid container className="A1ilustracao">
        <CircleIcon sx={{ fontSize: "200px" }} />
      </Grid>
      <Grid item>
        <body2 className="A1body2">
          Aprenda a distinguir os tipos de violência de gênero, entenda como a
          violência acontece e conheça as leis e serviços que garantem os
          direitos das mulheres.
        </body2>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <MobileStepper
          position="bottom"
          variant="dots"
          steps={5}
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
