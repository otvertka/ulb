import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0); // счётчики лайков
  const [value, setValue] = useState("ТЕКСТ В ИНПУТЕ"); // управляемый инпут

  return <div className="App"></div>;
}

export default App;
