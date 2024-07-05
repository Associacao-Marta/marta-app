import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookIcon from '@mui/icons-material/Book';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../assets/css/base.css';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function FixedBottomNavigation() {
  const { pathname } = window.location;
  const [value, setValue] = React.useState(pathname);
  const ref = React.useRef(0);

  const valueArtigos = [
    '/',
    '/artigos/quem-somos',
    '/artigos/marta-escuta',
    '/artigos/doacoes',
    '/artigos/por-que-essas-relacoes-de-violencia-perduram',
    '/artigos/sinais-de-violencia-domestica',
    '/artigos/feminicidio',
    '/artigos/maria-da-penha',
    '/artigos/atendimento-publico',
    '/artigos/plano-nacional',
    '/artigos/artigos',
    '/artigos/atendimentos',
    '/artigos/locais-de-apoio',
    '/artigos/botao-de-emergencia',
    '/artigos/quem-desenvolveu',
    '/sobre-violencia-domestica',
    '/legislacao',
    '/sobre-o-app',
  ];

  const valueAtendimento = ['/agendamento', '/confirmacao-agendamento', '/contato-agendamento'];

  const indexArtigos = valueArtigos.indexOf(window.location.pathname);
  const indexAtendimento = valueAtendimento.indexOf(window.location.pathname);

  return (
    <Box sx={{ pb: 7 }} ref={ref} className="Menu">
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction
            href="/"
            label="Artigos"
            value={valueArtigos[indexArtigos]}
            icon={value === valueArtigos[indexArtigos] ? <BookIcon /> : <BookOutlinedIcon />}
          />
          <BottomNavigationAction
            href="agendamento"
            label="Atendimento"
            value={valueAtendimento[indexAtendimento]}
            icon={
              value === valueAtendimento[indexAtendimento] ? (
                <CalendarMonthIcon />
              ) : (
                <CalendarMonthOutlinedIcon />
              )
            }
          />
          <BottomNavigationAction
            href="mapa"
            label="Local"
            value="/mapa"
            icon={value === '/mapa' ? <LocationOnIcon /> : <LocationOnOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
