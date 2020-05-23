export const increaseRandomPopulation = () => (dispatch) => {
  dispatch({ type: 'RANDOM' });
};

export const increasePopulation = (name) => (dispatch) => {
  dispatch({ type: 'SPECIFY', name });
};
