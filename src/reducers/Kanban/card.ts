import { cards as defaultCards } from "normalizedState";
import { addEntity } from "./_utilities";
import { CARD_CREATE } from "actions/Kanban/card";

const cardsReducer = (cards = defaultCards, action) => {
  // console.log("defaultCards:", defaultCards);
  const { type, payload } = action;
  if (type === CARD_CREATE) {
    const { card, cardId } = payload;
    return addEntity(cards, card,cardId)
  }
  return cards;
};

export default cardsReducer;
