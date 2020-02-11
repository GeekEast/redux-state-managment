export const CARD_CREATE = 'CARD_CREATE';
export const CARD_REMOVE = 'CARD_REMOVE';
export const CARD_ADD = 'CARD_ADD';
export const CARD_MOVE = 'CARD_MOVE';

export const createCard = (listId, cardData) => dispatch => {
  const cardId = Date.now().toString();
  const card = { cardId, ...cardData };
  dispatch({ type: CARD_CREATE, payload: { card, listId, cardId } });
};

export const removeCard = (listId, cardId) => dispatch => {
  dispatch({ type: CARD_REMOVE, payload: { cardId, listId } });
};

export const addCard = (listId, cardId) => dispatch => {
  dispatch({ type: CARD_ADD, payload: { cardId, listId } });
};

export const moveCard = (originListId, destinationListId, cardId) => dispatch => {
  dispatch({ type: CARD_MOVE, payload: { cardId, destinationListId, originListId } });
};
