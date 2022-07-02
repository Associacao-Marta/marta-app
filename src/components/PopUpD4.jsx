import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import icon from "../assets/img/icon_check.svg"
import { useState } from "react";

//db
import { db } from "../firebase-config.js"
import { getDoc, doc} from "firebase/firestore"

export default function PopUpD4(props) {
  const [open, setOpen] = useState(false);
  const [atendimento, setAtendimento] = useState([]);

  const getAtendimento =  async () => {

    const docRef = doc(db, "atendimento", props.protocolo);
    const data = await getDoc(docRef);

    if(data.exists){
    setAtendimento(data.data())
  } else {
    setAtendimento([])
  }
}

  const handleClickOpen = () => {
    getAtendimento();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ borderRadius: 8 }} disabled={!props.protocolo}>
        Consultar
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <img src={icon} style={{position: "relative", top: 5}} />  {"Nos vemos em breve"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Olá, {atendimento.name}! Seu atendimento com uma de nossas {atendimento.type} está marcado para o dia {atendimento.date} às {atendimento.time}. 
            Caso deseje desmarcar ou cancelar seu horário conosco, entre em contato por Whatsapp, pelo
            número (85) 98765-4321.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={handleClose} autoFocus color="success" sx={{color: "#FFFFFF", borderRadius:8}}>
            OK
          </Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
