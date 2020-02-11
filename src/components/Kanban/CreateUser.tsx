import React, { useState, memo } from "react";
import { createUser } from '../../actions/Kanban/user';
import { useDispatch } from 'react-redux';

const CreateUser = props => {
  const [state, setState] = useState({ name: "", email: "" });
  const { name, email } = state;
  const dispatch = useDispatch();
  const onCreateUser = () =>  dispatch(createUser({name, email})) ;
  const isInvalid = !(!!name && !!email);

  const handleSubmit = event => {
    event.preventDefault();
    onCreateUser();
    setState({ ...state, name: "", email: "" });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form className="CreateUser" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="email"
      />
      <input type="submit" value="Create User" disabled={isInvalid} />
    </form>
  );
};

export default memo(CreateUser);
