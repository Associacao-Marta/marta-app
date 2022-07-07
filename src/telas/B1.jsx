import React from "react";
import { Button, Grid, Checkbox } from "@mui/material";
import ilustracao from "../assets/img/B1.svg";
import "../assets/css/base.css";
import "../assets/css/AB.css";

const B1 = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem('checked', JSON.stringify(checked));
    if (checked) {
      setChecked(checked);
    }
  }, [checked]);

  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container>
      <Grid container className="tituloContainer">
        <h1 className="tituloOnboarding">Termos de Uso</h1>
      </Grid>

      <Grid container item className="ilustracaoOnboarding">
        <img src={ilustracao} />
      </Grid>
      
      <Grid container item className="conteudoContainer-Onboarding">
        <p className="body2">
          Antes de continuar, precisamos que leia e aceite os <stan style={{ color: "#337066" }}>Termos de Uso</stan>.
          <br />
          <br />
          <br />
          <Checkbox checked={checked} onChange={handleChange} />
          Li e Aceito os Termos de Uso.
        </p>
      </Grid>

      <Grid container className="buttonContainer" sx={{position: "absolute", top: "638px"}}>
          <Button variant="contained" href="C1"
          disabled={checked != true} sx={{ borderRadius: 8 }}>
            Finalizar
          </Button>
      </Grid>

    </Grid>
  );
};

export default B1;
