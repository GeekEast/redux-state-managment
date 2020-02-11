import { combineReducers } from "redux";
import lists from "./list";
import cards from "./card";
import users from './user'
export const rootReducer = combineReducers({
  lists,
  cards,
  users
});
