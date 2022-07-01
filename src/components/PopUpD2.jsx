import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { db } from "../firebase-config.js"
import { collection, addDoc, setDoc, doc} from "firebase/firestore"

export default function PopUpD2(props) {
  const [open, setOpen] = React.useState(false);
  
  const enviarAgendamento = async () => {
    const docRef = collection(db, "atendimento");

    await setDoc(doc (docRef, props.newPhone),
     {time: props.newTime, date: props.newDate, name: props.newName, phone: props.newPhone, description: props.newDescription, type: props.newType});
  }

  const handleClickOpen = () => {
    enviarAgendamento();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ borderRadius: 8 }}
      disabled={props.newTime == "NaN:NaN" || props.newDate == "NaN/NaN/NaN" || !props.newName || !props.newPhone || !props.newDescription || !props.newType}>
        Enviar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Atendimento Agendado"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Olá! Muito obrigada por agendar um horário conosco! <br/> <br/>
            Estamos ansiosas para te auxiliar da melhor forma possível!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} autoFocus href="D1" color="success" sx={{color: "#FFFFFF", borderRadius:8}}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
