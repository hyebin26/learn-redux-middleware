import React from "react";

const Counter3 = ({ counter, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter3;
