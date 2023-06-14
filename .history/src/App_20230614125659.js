import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    //
    <BrowserRouter>
      <Route path="">
        <About />
      </Route>
    </BrowserRouter>
  );
}

export default App;
