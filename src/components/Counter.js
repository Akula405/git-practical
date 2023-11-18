import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import Todo from "./Todo";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.counterSlice.count);

  const handleAdd = () => {
    dispatch(increment());
  };
  const handleDecrese = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h3>Count : {value}</h3>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleDecrese}>-</button>
      <button onClick={handleReset}>Reset</button>
      <Todo />
    </div>
  );
};

export default Counter;
