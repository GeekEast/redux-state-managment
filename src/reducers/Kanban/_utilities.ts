import { set, get, omit, pipe } from 'lodash/fp';
const removeFromArray = (array, target) => array.filter(n => n !== target);

export const addEntity = (state, entity, id) => {
  return pipe(
    set(['entities', id], entity),
    set('ids', state.ids.concat(id)),
  )(state);
};


export const updateEntity = (state, entity, id) => {
    return set(['entities', id], entity, state);
}

export const removeEntity = (state, id) => {
  return pipe(
    omit(`entities.${id}`),
    set('ids', removeFromArray(state.ids, id)),
  )(state);
};

export const addIdToChildren = (state, entityId, property, childId) => {
  const path = ['entities', entityId, property];
  const children = get(path)(state);
  return set(path, children.concat(childId), state);
};

export const removeIdFromChildren = (state, entityId, property, childId) => {
  const path = ['entities', entityId, property];
  const children = get(path)(state);
  return set(path, removeFromArray(children, childId), state);
};

