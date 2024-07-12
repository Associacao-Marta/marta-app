import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { collection, setDoc, doc } from 'firebase/firestore';
import db from '../../firebase-config';
import iconSuccess from '../../assets/img/icon_check.svg';
import iconFail from '../../assets/img/icon_atencao.svg';
import { verifyForm } from '../../pages/scheduling/utils/Scheduling.utis';

export default function ConfirmAppointment(props) {
  const [open, setOpen] = React.useState(false);
  const { name, phone, description, type, date } = props.form;
  const isFormComplete = verifyForm(props.form);

  const enviarAgendamento = async () => {
    const docRef = collection(db, 'atendimento');

    await setDoc(doc(docRef, props.newPhone), {
      // time: props.newTime,
      date,
      name,
      phone,
      description,
      type,
    });
  };

  const handleClickOpen = () => {
    enviarAgendamento();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ borderRadius: 8 }}
        disabled={isFormComplete}>
        Enviar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {navigator.onLine === true ? (
            <>
              <img
                src={iconSuccess}
                alt="confirmação do agendamento"
                style={{ position: 'relative', top: 5 }}
              />{' '}
              Atendimento Agendado
            </>
          ) : (
            <>
              <img
                src={iconFail}
                alt="falha no agendamento"
                style={{ position: 'relative', top: 5 }}
              />{' '}
              Opa...
            </>
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {navigator.onLine === true ? (
              <>
                Olá! Muito obrigada por agendar um horário conosco! Você pode ver mais detalhes
                sobre seu atendimento na área Consultar Atendimento, informando seu número de
                telefone. <br /> <br />
                Estamos ansiosas para te auxiliar da melhor forma possível!
              </>
            ) : (
              <>
                Ocorreu um erro inesperado. <br />
                <br />
                Por favor, conecte-se com a internet ou tente novamente mais tarde.
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            autoFocus
            href="atendimento"
            color="success"
            sx={{ color: '#FFFFFF', borderRadius: 8 }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
