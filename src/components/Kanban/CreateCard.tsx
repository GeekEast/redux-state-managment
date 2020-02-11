import React, { useState } from "react";

const CreateCard = props => {
  const [state, setState] = useState({ title: "", description: "" });
  const { title, description } = state;
  const { onCreateCard } = props;
  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const isInvalid = !(!!title && !!description);
  const handleSubmit = event => {
    event.preventDefault();
    if (isInvalid) return;
    if (onCreateCard) onCreateCard(state);
    setState({
      ...state,
      title: "",
      description: ""
    });
  };

  return (
    <form className="CreateCard" onSubmit={handleSubmit}>
      <input
        className="CreateCard-title"
        onChange={handleChange}
        name="title"
        placeholder="Title"
        type="text"
        value={title}
      />
      <input
        className="CreateCard-description"
        onChange={handleChange}
        placeholder="Description"
        name="description"
        type="text"
        value={description}
      />
      <input
        className="CreateCard-submit"
        type="submit"
        value="Create New Card"
        disabled={isInvalid}
      />
    </form>
  );
};

export default CreateCard;
