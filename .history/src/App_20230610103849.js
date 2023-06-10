import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [likes, setLikes] = useState(0); // счётчики лайков
  const [value, setValue] = useState("ТЕКСТ В ИНПУТЕ"); // управляемый инпут

  // импортируем компонент Counter
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
