import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    //
    <BrowserRouter>
      <Routes path="/about">
        <About />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
