import React from "react";
import { Button, Typography } from "@mui/material";
import { Card, Checkbox, Grid } from "@mui/material";

const F1 = () => {
  return (
    <Typography>
      <Card>
        <Grid container>
          <Grid>
            <subtitle1 style={{ fontSize: 16, fontWeight: 600 }}>
              Precisa de Ajuda?
            </subtitle1>
          </Grid>
          <Grid>
            <body2>
              Você está prestes a ligar para polícia. Tem certeza que deseja
              continuar?
            </body2>
          </Grid>
          <Grid>
            <Checkbox /> <outlined>Não mostrar novamente</outlined>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained">OK</Button>
          </Grid>
        </Grid>
      </Card>
    </Typography>
  );
};

export default F1;
