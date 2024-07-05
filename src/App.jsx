import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Onboarding from './pages/onboarding/Onboarding';
import TermsOfUse from './pages/termsOfUse/TermsOfUse';

import C16 from './pages/C16';
import C17 from './pages/C17';
import C18 from './pages/C18';
import Scheduling from './pages/scheduling/Scheduling';
import SchedulingConfirmation from './pages/scheduling/SchedulingConfirmation';

import Map from './pages/map/Map';
import Article from './pages/articles/Article';
import Home from './pages/home/Home';
import SchedulingContact from './pages/scheduling/SchedulingContact';

function App() {
  const [isTermChecked, setTermChecked] = useState(false);
  const localStorageTerm = JSON.parse(localStorage.getItem('checked'));

  useEffect(() => {
    setTermChecked(localStorageTerm);
  }, []);

  return (
    <div className="App">
      <Typography>
        <Router>
          <Routes>
            <Route exact path="/" element={isTermChecked ? <Home /> : <Onboarding />} />
            <Route exact path="onboarding" element={<Onboarding />} />
            <Route exact path="termos-de-uso" element={<TermsOfUse />} />
            <Route exact path="agendamento" element={<Scheduling />} />
            <Route exact path="confirmacao-agendamento" element={<SchedulingConfirmation />} />
            <Route exact path="contato-agendamento" element={<SchedulingContact />} />
            <Route exact path="mapa" element={<Map />} />
            <Route exact path="artigos/:id" element={<Article />} />
            <Route exact path="C16" element={<C16 />} />
            <Route exact path="C17" element={<C17 />} />
            <Route exact path="C18" element={<C18 />} />
          </Routes>
        </Router>
      </Typography>
    </div>
  );
}

export default App;
