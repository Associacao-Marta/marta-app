import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#88BCA1",
    },
    secondary: {
      main: "#A2D8CB",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "18px",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body3: {
      fontSize: "12px",
      fontWeight: 400,
    },
    h4: {
      // CORRESPONDE AO body4
      fontSize: "11px",
      fontWeight: 300,
    },
    button: {
      //CORRESPONDE AO BUTTON LARGE
      fontSize: "15px",
      fontWeight: 500,
    },
    subtitle2: {
      //CORRESPONDE AO BUTTON MEDIUM
      fontSize: "14px",
      fontWeight: 500,
    },
    caption: {
      //CORRESPONDE AO BUTTON SMALL 01
      fontSize: "13px",
      fontWeight: 500,
    },
    overline: {
      //CORRESPONDE AO BUTTON SMALL 02
      fontSize: "11px",
      fontWeight: 500,
    },
  },
  values: {
    xs: 0,
    sm: 360,
    md: 600,
    lg: 900,
  },
});

export default theme;
