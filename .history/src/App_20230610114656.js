import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";

function App() {
  // const [likes, setLikes] = useState(0); // счётчики лайков
  const [value, setValue] = useState("ТЕКСТ В ИНПУТЕ"); // управляемый инпут

  // импортируем компонент Counter
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong> 1. Javascript </strong>
          <div>Javascript - язык программирования</div>
        </div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default App;
