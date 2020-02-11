export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const RESET = "RESET";

export const counterReducer = (state = { count: 0 }, action) => {
  const { type } = action;
  switch (type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};
