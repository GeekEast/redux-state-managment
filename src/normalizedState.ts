import { normalize, schema } from "normalizr";
import defaultState from "./default-state.json";

// schema
const user = new schema.Entity("users");
const card = new schema.Entity("cards", {
  assignedTo: user
});
const list = new schema.Entity("lists", {
  cards: [card]
});

// normalize
const normalizedLists = normalize(defaultState.lists, [list]);


// export normalized data
export const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result
};

export const cards = {
  entities: normalizedLists.entities.cards,
  ids: Object.keys(normalizedLists.entities.cards)
};

export const users = {
  entities: normalizedLists.entities.users,
  ids: Object.keys(normalizedLists.entities.users)
}

export default {
  lists,
  cards
};
