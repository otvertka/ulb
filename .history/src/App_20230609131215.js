import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  return (
    <div className="App">
      {/* <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => (likes -= 1)}>Decrement</button> */}
    </div>
  );
}

export default App;
