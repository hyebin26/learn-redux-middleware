import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/counter";
import { asyncDecrease, asyncIncrease } from "../modules/asyncCounter2";

const AsyCounterContainer2 = (props) => {
  const number = useSelector((state) => state.asyncCounter2);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(asyncIncrease());
  const onDecrease = () => dispatch(asyncDecrease());

  return (
    <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
  );
};

export default AsyCounterContainer2;
