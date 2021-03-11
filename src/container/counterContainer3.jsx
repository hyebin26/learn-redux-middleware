import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter3 from "../components/counter3";
import { decreaseAsync, increaseAsync } from "../modules/counter4";

const CounterContainer3 = (props) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());

  return (
    <Counter3 count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer3;
