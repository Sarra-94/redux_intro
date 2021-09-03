import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incerement } from "../JS/actions/count";
const CounterHooks = () => {
  // useselector: hooks connect directly to store and import the state
  const count = useSelector((state) => state.countReducer.count);
  // usedispatch hook to import dispatch to call directly the reducer and change the state with the action
  const dispatch = useDispatch();
  return (
    <div>
      <h1>this is Counter with hooks Component</h1>
      <button onClick={() => dispatch(incerement())}>+</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement(5))}>-</button>
    </div>
  );
};

export default CounterHooks;
