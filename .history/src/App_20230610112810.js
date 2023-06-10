import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  // const [likes, setLikes] = useState(0); // счётчики лайков
  const [value, setValue] = useState("ТЕКСТ В ИНПУТЕ"); // управляемый инпут

  // импортируем компонент Counter
  return (
    <div className="App">
      <div className="App">
        <div className="post">
          <div className="post__content">
            <strong> 1</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
