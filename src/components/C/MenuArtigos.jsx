import * as React from "react";
import IconButton from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListIcon from '@mui/icons-material/List';
import "../../assets/css/C.css"

export default function MenuArtigos() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="TopButton" style={{left:"-10px"}}>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ListIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}

      >
        <MenuItem onClick={handleClose}>
          <a className="menuArtigosLinks" href="C16">Sobre violência de gênero</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menuArtigosLinks" href="C17">Legislação</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menuArtigosLinks" href="C18">Conheça a aplicação</a>
        </MenuItem>
      </Menu>
    </div>
  );
}
