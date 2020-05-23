import { combineReducers } from 'redux';
import world from '../data.json';

export const countryReducer = (state = world, action) => {
  const { type } = action;
  switch (type) {
    case 'RANDOM':
      const idx = state.findIndex((c) => c.country === 'Argentina');
      const country = state[idx];
      const updatedCountry = {
        ...country,
        population: (country.population as number) + 1,
      };
      return [...state.slice(0, idx), updatedCountry, ...state.slice(idx + 1)];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  countries: countryReducer,
});
