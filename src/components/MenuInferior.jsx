import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
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


  return (
    <BottomNavigation showLabels value={value} onChange={handleChange} className="Menu">
      <BottomNavigationAction
        href="C1"
        label="Artigos"
        value={'/C1'}
        icon={value==='/C1'?<BookIcon/>:<BookOutlinedIcon/>}
      />
      <BottomNavigationAction
        href="D1"
        label="Atendimento"
        value={'/D1'}
        icon={value==='/D1'?<CalendarMonthIcon/>:<CalendarMonthOutlinedIcon/>}
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
