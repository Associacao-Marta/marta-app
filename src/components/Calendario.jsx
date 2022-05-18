import React from "react";
import { Grid } from "@mui/material";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickerUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@mui/x-date-pickers";

const Calendario = () => {
  return (
    <MuiPickerUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker"
          label="Calendário"
        />
      </Grid>
    </MuiPickerUtilsProvider>
  );
};

export default Calendario;
