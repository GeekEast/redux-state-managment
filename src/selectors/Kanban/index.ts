import { createSelector } from 'reselect';
import _ from 'lodash';

// utils
const getEntities = (entity) => state => _.get(state, [entity, 'entities']);

const generateEntitiesSelector = (entity_name) => createSelector(
  getEntities(entity_name),
  entities => entities
)

export const listsSelector = generateEntitiesSelector('lists');

export const makeListSelector = () => createSelector(
  listsSelector,
  (_, listId) => listId,
  (lists, listId) => _.get(lists, [listId])
);

export const makeCardSelector = () => createSelector(
  (state: any) => state.cards,
  (_, cardId) => cardId,
  (cards, cardId) => _.get(cards, ["entities", cardId])
);