import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../assets/css/base.css";

const MenuInferior = () => {
  return (
    <BottomNavigation showLabels className="Menu">
      <BottomNavigationAction
        href="C1"
        label="Artigos"
        icon={<FeedOutlinedIcon color="primary" />}
      />
      <BottomNavigationAction
        href="D1"
        label="Atendimento"
        icon={<CalendarTodayIcon color="primary" />}
      />
      <BottomNavigationAction
        href="E1"
        label="Local"
        icon={<LocationOnIcon color="primary" />}
      />
    </BottomNavigation>
  );
};

export default MenuInferior;
