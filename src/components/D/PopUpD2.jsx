import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import iconSuccess from "../../assets/img/icon_check.svg"
import iconFail from "../../assets/img/icon_atencao.svg"
import { db } from "../../firebase-config.js"
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
        {navigator.onLine === true ? (
              <>
            <img src={iconSuccess} style={{position: "relative", top: 5}} /> {"Atendimento Agendado"}
              </>
            ) : (
              <>
              <img src={iconFail} style={{position: "relative", top: 5}} /> {"Opa..."}
              </>
            )}
        
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {navigator.onLine === true ? (
              <>
            Olá! Muito obrigada por agendar um horário conosco! Você pode ver mais detalhes sobre seu atendimento
            na área Consultar Atendimento, informando seu número de telefone. <br/> <br/>
            Estamos ansiosas para te auxiliar da melhor forma possível!
              </>
            ) : (
              <>
              Ocorreu um erro inesperado. <br/><br/>
              Por favor, conecte-se com a internet ou tente novamente mais tarde.
              </>
            )}
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
