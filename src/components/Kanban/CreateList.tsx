import React, { useState, memo } from "react";
import { useDispatch } from 'react-redux';
import { createList } from "actions/Kanban/list";

const CreateList = props => {
  const [state, setState] = useState({ title: "" });
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createList(state));
    setState({ ...state, title: "" });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const { title } = state;

  return (
    <form className="CreateList" onSubmit={handleSubmit}>
      <input
        className="CreateList-title"
        id="CreateList-title"
        name="title"
        onChange={handleChange}
        placeholder="New List Title"
        value={title}
      />
      <input className="CreateList-submit" type="submit" disabled={!title} />
    </form>
  );
};

export default memo(CreateList);
