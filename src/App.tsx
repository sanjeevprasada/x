import React from "react";
// import React, { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const isDarkModeEnabled = true ?? false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Hey it's Sanjeev. Welcome to the everything app!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
