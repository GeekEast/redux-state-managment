export const USER_CREATE = 'USER_CREATE';
export const USER_UPDATE = 'USER_UPDATE';

export const createUser = (userData) => dispatch => {
  const userId = Date.now().toString();
  const user = { ...userData, id: userId };
  dispatch({ type: USER_CREATE, payload: { user, userId } })
}

export const updateUser = (user) => dispatch => {
  const userId = user.id;
  dispatch({type: USER_UPDATE, payload: {user, userId}})
}