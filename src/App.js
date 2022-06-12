import React from "react";
import { Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import A1 from "./telas/A1";
import A2 from "./telas/A2";
import A3 from "./telas/A3";
import A4 from "./telas/A4";
import A5 from "./telas/A5";
import B1 from "./telas/B1";
import C1 from "./telas/C1";
import C2 from "./telas/C2";
import D1 from "./telas/D1";
import D2 from "./telas/D2";
import D4 from "./telas/D4";
import E1 from "./telas/E1";

function App() {
  return (
    <div className="App">
      <Typography>
        <Router>
          <Routes>
            <Route exact path="/" element={<A1 />} />
            <Route exact path="A2" element={<A2 />} />
            <Route exact path="A3" element={<A3 />} />
            <Route exact path="A4" element={<A4 />} />
            <Route exact path="A5" element={<A5 />} />
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
