import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Typography>Associação Marta</Typography>
      </header>
    </div>
  );
}

export default App;
