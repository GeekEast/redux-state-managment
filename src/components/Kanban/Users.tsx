import React, { memo } from "react";

import CreateUser from "./CreateUser";
import _ from 'lodash';
import { useSelector } from 'react-redux';
import User from "./User";

const Users = (props) => {
  const userIds = useSelector(state => _.get(state, ['users', 'ids'], []));

  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser />
      {userIds.map(userId => (
        <User userId={userId} key={userId} />
      ))}
    </section>
  );
};

export default memo(Users);
