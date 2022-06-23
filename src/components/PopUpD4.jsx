import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import { db } from "../firebase-config.js"
import { getDoc, doc} from "firebase/firestore"

export default function PopUpD4(props) {
  const [open, setOpen] = useState(false);
  const [atendimento, setAtendimento] = useState([]);

  const getAtendimento =  async () => {

    // const userCollectionRef = collection(db, "atendimento");
  
    // const data = await getDocs(userCollectionRef);
    // setAtendimento(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    const docRef = doc(db, "atendimento", props.protocolo);
    const data = await getDoc(docRef);

    if(data.exists){
    setAtendimento(data.data())
  } else {
    setAtendimento([])
  }
  };

  const handleClickOpen = () => {
    getAtendimento();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Enviar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Consulta de Atendimento"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Olá! Seu atendimento com uma de nossas psicólogas está marcado para
            15h45, do dia 25 de outubro de 2022. Caso deseje desmarcar ou
            cancelar seu horário conosco, entre em contato por Whatsapp, pelo
            número (85) 98765-4321. */}
            Olá, {atendimento.name}! Seu atendimento com uma de nossas {atendimento.type} está marcado para o dia {atendimento.data} às {atendimento.hora}. 
            Caso deseje desmarcar ou cancelar seu horário conosco, entre em contato por Whatsapp, pelo
            número (85) 98765-4321.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
