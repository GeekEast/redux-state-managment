export const LIST_REMOVE = 'LIST_REMOVE';
export const LIST_CREATE = 'LIST_CREATE';

export const removeList = (listId) => dispatch => {
  dispatch({ type: LIST_REMOVE, payload: { listId } });
}

export const createList = (listData) => dispatch => {
  const listId = Date.now().toString();
  const list = { id: listId, ...listData, cards: [] };
  dispatch({ type: LIST_CREATE, payload: { list, listId } });
}