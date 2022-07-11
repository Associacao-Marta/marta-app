import React from "react";
import { Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import A1 from "./telas/A1";
import A2 from "./telas/A2";
import A3 from "./telas/A3";
import A4 from "./telas/A4";
import A5 from "./telas/A5";
import A6 from "./telas/A6";
import B1 from "./telas/B1";
import C1 from "./telas/C1";
import C2 from "./telas/artigos/C2";
import C3 from "./telas/artigos/C3";
import C4 from "./telas/artigos/C4";
import C5 from "./telas/artigos/C5";
import C6 from "./telas/artigos/C6";
import C7 from "./telas/artigos/C7";
import C8 from "./telas/artigos/C8";
import C9 from "./telas/artigos/C9";
import C10 from "./telas/artigos/C10";
import C11 from "./telas/artigos/C11";
import C12 from "./telas/artigos/C12";
import C13 from "./telas/artigos/C13";
import C14 from "./telas/artigos/C14";
import C15 from "./telas/artigos/C15";
import C16 from "./telas/C16";
import C17 from "./telas/C17";
import C18 from "./telas/C18";
import D1 from "./telas/D1";
import D2 from "./telas/D2";
import D3 from "./telas/D3";
import E1 from "./telas/E1";

function App() {
  const [localData, setLocalData] = useState();

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('checked')));
    if (localData) {
      setLocalData(localData);
    }
  });

  console.log(localData);

  return (
    <div className="App">
      <Typography>
        <Router>
          <Routes>
            <Route exact path="/" element={localData? <C1 /> : <A1 />} />
            <Route exact path="A1" element={<A1 />} />
            <Route exact path="A2" element={<A2 />} />
            <Route exact path="A3" element={<A3 />} />
            <Route exact path="A4" element={<A4 />} />
            <Route exact path="A5" element={<A5 />} />
            <Route exact path="A6" element={<A6 />} />
            <Route exact path="B1" element={<B1 />} />
            <Route exact path="C1" element={<C1 />} />
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
            <Route exact path="D1" element={<D1 />} />
            <Route exact path="D2" element={<D2 />} />
            <Route exact path="D3" element={<D3 />} />
            <Route exact path="E1" element={<E1 />} />
          </Routes>
        </Router>
      </Typography>
    </div>
  );
}

export default App;
