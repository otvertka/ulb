import React, { useState } from "react";
// создаём компонент
const Counter = function () {
  const [count, setCount] = useState(0);
  // возвращает jsx
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
