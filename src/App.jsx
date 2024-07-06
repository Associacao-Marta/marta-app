import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Onboarding from './pages/onboarding/Onboarding';
import TermsOfUse from './pages/termsOfUse/TermsOfUse';

import AboutViolenceMenu from './pages/menus/AboutViolenceMenu';
import LawMenu from './pages/menus/LawMenu';
import AppMenu from './pages/menus/AppMenu';
import Scheduling from './pages/scheduling/Scheduling';
import SchedulingConfirmation from './pages/scheduling/SchedulingConfirmation';

import Map from './pages/map/Map';
import Article from './pages/articles/Article';
import Home from './pages/home/Home';
import SchedulingContact from './pages/scheduling/SchedulingContact';
import Layout from './Layout';

function App() {
  const [isTermChecked, setTermChecked] = useState(false);
  const localStorageTerm = JSON.parse(localStorage.getItem('checked'));

  useEffect(() => {
    setTermChecked(localStorageTerm);
  }, []);

  return (
    <div className="App">
      <Typography>
        <Layout>
          <Router>
            <Routes>
              <Route exact path="/" element={isTermChecked ? <Home /> : <Onboarding />} />
              <Route exact path="onboarding" element={<Onboarding />} />
              <Route exact path="termos-de-uso" element={<TermsOfUse />} />
              <Route exact path="atendimento" element={<Scheduling />} />
              <Route exact path="confirmacao-atendimento" element={<SchedulingConfirmation />} />
              <Route exact path="contato-atendimento" element={<SchedulingContact />} />
              <Route exact path="mapa" element={<Map />} />
              <Route exact path="artigos/:id" element={<Article />} />
              <Route exact path="sobre-violencia-domestica" element={<AboutViolenceMenu />} />
              <Route exact path="legislacao" element={<LawMenu />} />
              <Route exact path="sobre-o-app" element={<AppMenu />} />
            </Routes>
          </Router>
        </Layout>
      </Typography>
    </div>
  );
}

export default App;
