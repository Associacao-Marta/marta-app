import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookIcon from '@mui/icons-material/Book';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';import "../assets/css/base.css";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useState } from "react";

const MenuInferior = () => {
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(event, newValue);
  };

  const valueArtigos = ['/','/C1','/C2','/C3','/C4','/C5','/C6','/C7','/C8','/C9'
  ,'/C10','/C11','/C12','/C13','/C14','/C15','/C16','/C17','/C18']

  const valueAtendimento = ['/D1','/D2',"/D4"]

  let indexArtigos = valueArtigos.indexOf(window.location.pathname)
  let indexAtendimento = valueAtendimento.indexOf(window.location.pathname)


  return (
    <BottomNavigation showLabels value={value} onChange={handleChange} className="Menu">
      <BottomNavigationAction
        href="C1"
        label="Artigos"
        value={valueArtigos[indexArtigos]}

        icon={value===valueArtigos[indexArtigos]?<BookIcon/>:<BookOutlinedIcon/>
      }
      />
      <BottomNavigationAction
        href="D1"
        label="Atendimento"
        value={valueAtendimento[indexAtendimento]}

        icon={value===valueAtendimento[indexAtendimento]?<CalendarMonthIcon/>:<CalendarMonthOutlinedIcon/>}
      />
      <BottomNavigationAction
        href="E1"
        label="Local"
        value={'/E1'}
        icon={value==='/E1'?<LocationOnIcon/>:<LocationOnOutlinedIcon/>}
      />
    </BottomNavigation>
  );
};

export default MenuInferior;
