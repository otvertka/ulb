import React from "react";

function App() {
  let likes = 5;

  function increment() {
    likes += 1;
    console.log(likes);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={() => (likes += 1)}>Increment</button>
      <button onClick={() => (likes -= 1)}>Decrement</button>
    </div>
  );
}

export default App;
