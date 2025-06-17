import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import iconSuccess from '../../assets/img/icon_check.svg';
import iconFail from '../../assets/img/icon_atencao.svg';

export default function ConfirmFormDialog(props) {
  const { isOpen, handleClose } = props;

  // const enviarAgendamento = async () => {
  //   const docRef = collection(db, 'atendimento');
  //   await setDoc(doc(docRef, props.newPhone), {
  //     // time: props.newTime,
  //     date,
  //     name,
  //     phone,
  //     description,
  //     type,
  //   });
  // };

  return (
    <div>
      <Dialog
        open={isOpen}
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
                Olá! Muito obrigada por agendar um horário conosco. Estamos ansiosas para te
                auxiliar da melhor forma possível!
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
