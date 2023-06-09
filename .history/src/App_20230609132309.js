import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    count += 1;
  }
  function decrement() {
    count -= 1;
  }

  return (
    <div className="App">
      {/* <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => (likes -= 1)}>Decrement</button> */}
    </div>
  );
}

export default App;
