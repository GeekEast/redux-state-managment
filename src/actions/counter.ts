import { INCREASE, DECREASE, RESET } from "../reducers/counter";

export const increaseCount = () => dispatch => {
  dispatch({ type: INCREASE });
};

export const decreaseCount = () => dispatch => {
  dispatch({ type: DECREASE });
};

export const resetCount = () => dispatch => {
  dispatch({ type: RESET });
};
