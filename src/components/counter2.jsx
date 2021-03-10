import React from "react";

const Counter2 = ({ count, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter2;
