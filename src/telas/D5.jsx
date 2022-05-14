import React from "react";
import { Button, Typography } from "@mui/material";
import { Card, Grid } from "@mui/material";

const D5 = () => {
  return (
    <Typography>
      <Card>
        <Grid container>
          <Grid>
            <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
              Atendimento agendado
            </subtitle1>
          </Grid>
          <Grid>
            <body2>Olá! Muito obrigada por agendar um horário conosco!</body2>
          </Grid>
          <Grid>
            <body2>
              Estamos ansiosas para te auxiliar da melhor forma possível!{" "}
            </body2>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">OK</Button>
          </Grid>
        </Grid>
      </Card>
    </Typography>
  );
};

export default D5;
