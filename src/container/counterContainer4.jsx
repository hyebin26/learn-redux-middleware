import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter5";
import Counter3 from "../components/counter3";

const CounterContainer4 = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());
  return (
    <Counter3
      counter={counter}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};
export default CounterContainer4;
