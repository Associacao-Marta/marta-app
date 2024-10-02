import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Onboarding from './pages/onboarding/Onboarding';
import TermsOfUse from './pages/termsOfUse/TermsOfUse';

import Scheduling from './pages/scheduling/Scheduling';
import SchedulingForm from './pages/scheduling/SchedulingForm';

import Map from './pages/map/Map';
import Article from './pages/article/Article';
import Home from './pages/home/Home';
import Layout from './Layout';
import Articles from './pages/articles/Articles';

const LayoutWrapper = ({ children }) => {
  const localStorageTerm = JSON.parse(localStorage.getItem('checked'));

  const location = useLocation();
  const hideLayout =
    (!localStorageTerm && location.pathname === '/') ||
    location.pathname === '/onboarding' ||
    location.pathname === '/termos-de-uso';
  return hideLayout ? children : <Layout>{children}</Layout>;
};

const queryClient = new QueryClient();

function App() {
  const [isTermChecked, setTermChecked] = useState(false);
  const localStorageTerm = JSON.parse(localStorage.getItem('checked'));

  useEffect(() => {
    setTermChecked(localStorageTerm);
  }, []);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Typography>
          <Router>
            <LayoutWrapper isTermChecked={isTermChecked}>
              <Routes>
                <Route exact path="onboarding" element={<Onboarding />} />
                <Route exact path="/" element={isTermChecked ? <Home /> : <Onboarding />} />
                <Route exact path="termos-de-uso" element={<TermsOfUse />} />
                <Route exact path="atendimento" element={<Scheduling />} />
                <Route exact path="atendimento-formulario" element={<SchedulingForm />} />
                <Route exact path="mapa" element={<Map />} />
                <Route exact path="artigos" element={<Articles />} />
                <Route exact path="artigos/:id" element={<Article />} />
              </Routes>
            </LayoutWrapper>
          </Router>
        </Typography>
      </QueryClientProvider>
    </div>
  );
}

export default App;
