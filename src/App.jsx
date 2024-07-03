import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Onboarding from './telas/Onboarding/Onboarding';
import TermsOfUse from './telas/TermsOfUse/TermsOfUse';
import Home from './telas/Home/Home';
import C2 from './telas/artigos/C2';
import C3 from './telas/artigos/C3';
import C4 from './telas/artigos/C4';
import C5 from './telas/artigos/C5';
import C6 from './telas/artigos/C6';
import C7 from './telas/artigos/C7';
import C8 from './telas/artigos/C8';
import C9 from './telas/artigos/C9';
import C10 from './telas/artigos/C10';
import C11 from './telas/artigos/C11';
import C12 from './telas/artigos/C12';
import C13 from './telas/artigos/C13';
import C14 from './telas/artigos/C14';
import C15 from './telas/artigos/C15';
import C16 from './telas/C16';
import C17 from './telas/C17';
import C18 from './telas/C18';
import Scheduling from './telas/Scheduling/Scheduling';
import SchedulingConfirmation from './telas/Scheduling/SchedulingConfirmation';
import SchedulingContact from './telas/Scheduling/SchedulingContact';
import Map from './telas/Map/Map';

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
            <Route exact path="inicio" element={<Home />} />
            <Route exact path="agendamento" element={<Scheduling />} />
            <Route exact path="confirmacao-agendamento" element={<SchedulingConfirmation />} />
            <Route exact path="contato-agendamento" element={<SchedulingContact />} />
            <Route exact path="mapa" element={<Map />} />

            <Route exact path="C2" element={<C2 />} />
            <Route exact path="C3" element={<C3 />} />
            <Route exact path="C4" element={<C4 />} />
            <Route exact path="C5" element={<C5 />} />
            <Route exact path="C6" element={<C6 />} />
            <Route exact path="C7" element={<C7 />} />
            <Route exact path="C8" element={<C8 />} />
            <Route exact path="C9" element={<C9 />} />
            <Route exact path="C10" element={<C10 />} />
            <Route exact path="C11" element={<C11 />} />
            <Route exact path="C12" element={<C12 />} />
            <Route exact path="C13" element={<C13 />} />
            <Route exact path="C14" element={<C14 />} />
            <Route exact path="C15" element={<C15 />} />
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
