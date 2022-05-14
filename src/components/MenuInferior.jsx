import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MenuInferior = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Artigos" icon={<FeedOutlinedIcon />} />
      <BottomNavigationAction
        label="Atendimento"
        icon={<CalendarTodayIcon />}
      />
      <BottomNavigationAction label="Apoio" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default MenuInferior;
