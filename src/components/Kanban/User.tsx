import React, { useState, memo } from "react";
import md5 from "md5";
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { updateUser } from "actions/Kanban/user";

const createProfileImageUrl = ({ email }) => {
  const hash = md5(email.trim());
  return `https://www.gravatar.com/avatar/${hash}`;
};

const User = props => {
  const { userId } = props;
  const user = useSelector(state => _.get(state, ['users', 'entities', userId]));
  const [name, setName] = useState(user.name)
  const dispatch = useDispatch();
  const profileImage = createProfileImageUrl(user);
  const onUpdateUser = () => dispatch(updateUser({...user, name}));
  const handleChange = event => setName(event.target.value);

  return (
    <article className="User">
      <img className="User-picture" src={profileImage} alt={user.name} />
      <div className="User-info">
        <h4>{user.name}</h4>
        <input type="text" value={name} onChange={handleChange} />
        <button className="List-remove toggle-options" onClick={onUpdateUser}>
            Confirm
          </button>
      </div>
    </article>
  );
};

export default memo(User);
