import React from "react";
import CounterContext from "./context/CounterContext";
import "./App.css";

function Counter() {
  const { count, setCount } = React.useContext(CounterContext);
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <div className="counter">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
