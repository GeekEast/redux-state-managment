import { users as defaultUsers } from "normalizedState";
import { addEntity, updateEntity } from "./_utilities";
import { USER_CREATE, USER_UPDATE } from "actions/Kanban/user";

const userReducer = (users = defaultUsers, action) => {
  // console.log("defaultCards:", defaultUsers);
  const { type, payload } = action;
  if (type === USER_CREATE) {
    const { user, userId } = payload;
    return addEntity(users, user, userId)
  }
  if (type === USER_UPDATE) {
    const { user, userId } = payload;
    return updateEntity(users, user, userId);
  }
  return users;
};



export default userReducer;