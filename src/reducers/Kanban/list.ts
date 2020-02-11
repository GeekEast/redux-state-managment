import { lists as defaultLists } from "normalizedState";
import { removeIdFromChildren, addIdToChildren, removeEntity, addEntity } from './_utilities';
import { CARD_CREATE, CARD_REMOVE, CARD_MOVE } from "actions/Kanban/card";
import { LIST_REMOVE, LIST_CREATE } from "actions/Kanban/list";

const listsReducer = (lists = defaultLists, action) => {
  // console.log("defaultLists:", defaultLists);
  const { type, payload } = action;

  if (type === LIST_REMOVE) {
    const { listId } = payload;
    return removeEntity(lists, listId)
  }

  if (type === LIST_CREATE) {
    const { list, listId } = payload;
    return addEntity(lists, list, listId);
  }

  if (type === CARD_CREATE) {
    const { cardId, listId } = payload;
    return addIdToChildren(lists, listId, 'cards', cardId)
  }

  if (type === CARD_REMOVE) {
    const { cardId, listId } = payload;
    return removeIdFromChildren(lists, listId, 'cards', cardId);
  }

  if (type === CARD_MOVE) {
    const { cardId, originListId, destinationListId } = action.payload;
    let newState = removeIdFromChildren(lists, originListId, 'cards', cardId);
    return addIdToChildren(newState, destinationListId, 'cards', cardId);
  }
  return lists;
};

export default listsReducer;
