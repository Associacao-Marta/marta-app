import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Paper from '@mui/material/Paper';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookIcon from '@mui/icons-material/Book';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';import "../assets/css/base.css";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import "../assets/css/base.css";
import { useState } from "react";




export default function FixedBottomNavigation() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);
  const ref = React.useRef(0);


  const handleChange = (event, newValue) => {
    setValue(event, newValue);
  };

  const valueArtigos = ['/','/C1','/C2','/C3','/C4','/C5','/C6','/C7','/C8','/C9'
  ,'/C10','/C11','/C12','/C13','/C14','/C15','/C16','/C17','/C18']

  const valueAtendimento = ['/D1','/D2',"/D3"]

  let indexArtigos = valueArtigos.indexOf(window.location.pathname)
  let indexAtendimento = valueAtendimento.indexOf(window.location.pathname)



  return (
    <Box sx={{ pb: 7 }} ref={ref} className="Menu">
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction href="C1"
        label="Artigos"
        value={valueArtigos[indexArtigos]}
        icon={value===valueArtigos[indexArtigos]?<BookIcon/>:<BookOutlinedIcon/>
      }
        />
          <BottomNavigationAction 
          href="D1"
          label="Atendimento"
          value={valueAtendimento[indexAtendimento]}
  
          icon={value===valueAtendimento[indexAtendimento]?<CalendarMonthIcon/>:<CalendarMonthOutlinedIcon/>}/>
          <BottomNavigationAction href="E1"
        label="Local"
        value={'/E1'} icon={value==='/E1'?<LocationOnIcon/>:<LocationOnOutlinedIcon/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
