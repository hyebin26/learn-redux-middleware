import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/counter";
import { increaseAsync, decreaseAsync } from "../modules/asyncCounter3";

const AsyncCounterContainer3 = (props) => {
  const number = useSelector((state) => state.asyncCounter3);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default AsyncCounterContainer3;