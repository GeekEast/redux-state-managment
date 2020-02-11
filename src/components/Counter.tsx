import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { increaseCount, decreaseCount, resetCount } from "actions";
import "scss/counter.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => _.get(state, ["counter", "count"], 0));
  return (
    <>
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={() => dispatch(increaseCount())}>Increment</button>
          <button onClick={() => dispatch(decreaseCount())}>Decrement</button>
          <button onClick={() => dispatch(resetCount())}>Reset</button>
        </section>
      </main>
    </>
  );
};

export default Counter;
