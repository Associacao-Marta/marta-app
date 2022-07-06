import * as React from "react";
import IconButton from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import "../assets/css/C.css"

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
    <div className="TopButton">
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SearchIcon />
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
          <a className="menuArtigosLinks" href="C2">Sobre violência de gênero</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menuArtigosLinks" href="C2">Legislação</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menuArtigosLinks" href="C2">Conheça a aplicação</a>
        </MenuItem>
      </Menu>
    </div>
  );
}
