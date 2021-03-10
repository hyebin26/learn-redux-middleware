import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter2 from "../components/counter2";
import { increaseAsync, decreaseAsync } from "../modules/counter3";

const CounterContainer = (props) => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());

  return (
    <Counter2 count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
