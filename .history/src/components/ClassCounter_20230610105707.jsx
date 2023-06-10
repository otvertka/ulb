import React from "react";

class ClassCounter extends React.Component {
    function increment() {
        
      }
      function decrement() {
        
      }
    
  
    render() {

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}
