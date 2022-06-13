import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#357F78",
      light: "#4DB6AC",
      lighter: "#70C4BC",
    },
    secondary: {
      main: "#8CA18C",
      light: "#888686",
      lighter: "##D3EBD3",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  values: {
    xs: 0,
    sm: 360,
    md: 600,
    lg: 900,
  },
});

export default theme;
