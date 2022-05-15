import React from "react";
import { Button } from "@mui/material";
import { Card, Grid } from "@mui/material";

const D3 = () => {
  return (
    <Card>
      <Grid container>
        <Grid>
          <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
            Consulta de atendimento
          </subtitle1>
        </Grid>
        <Grid>
          <body2>
            Olá! Seu atendimento com uma de nossas psicólogas está marcado para
            15h45, do dia 25 de outubro de 2022.
          </body2>
        </Grid>
        <Grid>
          <body2>
            Caso deseje desmarcar ou cancelar seu horário conosco, entre em
            contato por Whatsapp, pelo número (85) 98765-4321
          </body2>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">OK</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default D3;
