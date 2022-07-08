import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function PopUpCancelarD2(props) {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    if(props.newTime !== "NaN:NaN" || props.newDate !== "NaN/NaN/NaN" || props.newName || props.newPhone || props.newDescription || props.newType){
      setOpen(true);
    } else{
      href(); 
  }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const href = () => {
    if(props.newTime === "NaN:NaN" && props.newDate == "NaN/NaN/NaN" && !props.newName && !props.newPhone && !props.newDescription && !props.newType){
      let href2 = "D1";
      return(href2)
    }
  }

  return (
    <div>
      <div className="TopButton">
      <IconButton color="primary" variant="" aria-label="Voltar" onClick={() => {handleClickOpen();}} href={href()} >
        <ArrowBackIosNewIcon />
      </IconButton>
    </div>

      <Grid container className="BotaoDoPanico">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Opa..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Percebi que você não concluiu seu agendamento.<br/><br/>Deseja mesmo sair da página atual?
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: "11px", marginTop: "12px", marginLeft: "-12px" }}
          ></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus sx={{ marginRight: "152px" }}>
            Não
          </Button>
          <Button href="D1" variant="text" autoFocus sx={{  }}>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
    </div>
  );
}
