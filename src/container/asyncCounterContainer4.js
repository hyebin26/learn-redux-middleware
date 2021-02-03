import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/counter";
import { decreaseAsync, increaseAsync } from "../modules/asyncCounter4";

const AsyncCounterContainer4 = (props) => {
  const number = useSelector((state) => state.asyncCounter4);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default AsyncCounterContainer4;
