import React, { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [likes, setLikes] = useState(0); // счётчики лайков
  const [value, setValue] = useState("ТЕКСТ В ИНПУТЕ"); // управляемый инпут

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
