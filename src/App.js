import React from "react";
import { Typography } from "@mui/material";

import { ReactDOM } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import A1 from "./telas/A1";
import B1 from "./telas/B1.jsx";
import C1 from "./telas/C1.jsx";
import C2 from "./telas/C2.jsx";
import D1 from "./telas/D1.jsx";
import D2 from "./telas/D2.jsx";
import D3 from "./telas/D3";
import D4 from "./telas/D4";
import D5 from "./telas/D5";
import E1 from "./telas/E1";
import E2 from "./telas/E1";
import F1 from "./telas/F1";

function App() {
  return (
    <div className="App">
      <Typography>
        <Router>
          <Routes>
            <Route exact path="/" element={<A1 />} />
            <Route exact path="B1" element={<B1 />} />
            <Route exact path="C1" element={<C1 />} />
            <Route exact path="C2" element={<C2 />} />
            <Route exact path="D1" element={<D1 />} />
            <Route exact path="D2" element={<D2 />} />
            <Route exact path="D4" element={<D4 />} />
            <Route exact path="E1" element={<E1 />} />
          </Routes>
        </Router>
      </Typography>
    </div>
  );
}

export default App;
