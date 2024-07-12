import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';

export default function CancelAppointment() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="text"
        onClick={() => {
          handleClickOpen();
        }}
        sx={{ borderRadius: 8 }}>
        Cancelar
      </Button>

      <Grid container className="BotaoDoPanico">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">Opa...</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Percebi que você não concluiu seu agendamento.
              <br />
              <br />
              Deseja mesmo sair da página atual?
            </DialogContentText>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ fontSize: '11px', marginTop: '12px', marginLeft: '-12px' }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus sx={{ marginRight: '152px' }}>
              Não
            </Button>
            <Button href="atendimento" variant="text" autoFocus sx={{}}>
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </div>
  );
}
