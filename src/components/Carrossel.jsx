import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "teste1",
    description: `teste1`,
  },
  {
    label: "teste2",
    description: `teste2`,
  },
  {
    label: "teste3",
    description: `teste3`,
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
    <Box sx={{ maxWidth: 232, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          height: 50,
          width: "285px",
          pl: 2,
          bgcolor: "#C4C4C4",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box
        sx={{
          bgcolor: "#C4C4C4",
          height: 150,
          width: "269px",
          p: 2,
        }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        sx={{ marginLeft: "50px" }}
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}
