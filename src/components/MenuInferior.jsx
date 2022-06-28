import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../assets/css/base.css";
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
        icon={<FeedOutlinedIcon/>}
      />
      <BottomNavigationAction
        href="D1"
        label="Atendimento"
        value={'/D1'}
        icon={<CalendarTodayIcon/>}
      />
      <BottomNavigationAction
        href="E1"
        label="Local"
        value={'/E1'}
        icon={<LocationOnIcon/>}
      />
    </BottomNavigation>
  );
};

export default MenuInferior;
