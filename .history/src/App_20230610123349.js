import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  // импортируем компонент Counter
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "Javascript", body: "Description" }} />
    </div>
  );
}

export default App;
