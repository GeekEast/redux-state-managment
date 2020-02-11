import React, { useState, useMemo, memo } from "react";
import CreateCard from "./CreateCard";
import Card from "./Card";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { createCard, removeCard, moveCard } from "actions/Kanban/card";
import { makeListSelector } from 'selectors/Kanban';
import { removeList } from "actions/Kanban/list";

const List = props => {
  const { listId } = props;

  const listSelector = useMemo(makeListSelector, [])
  const list = useSelector((store: any) => listSelector(store, listId), shallowEqual);

  const [state, setState] = useState({ showOptions: true });

  const { showOptions } = state;
  const dispatch = useDispatch();
  const toggleOptions = () => setState({ ...state, showOptions: !showOptions });
  const onCardCreate = cardData => dispatch(createCard(listId, cardData));
  const onListRemove = () => dispatch(removeList(listId));
  const handleListChange = (toListId, cardId) => dispatch(moveCard(listId, toListId, cardId));
  const onCardRemove = (listId, cardId) => dispatch(removeCard(listId, cardId));

  return (
    <article className="List">
      <h2>{list.title}</h2>
      {showOptions && (
        <div className="List-options">
          <CreateCard onCreateCard={onCardCreate} />
          <button className="List-remove danger" onClick={onListRemove}>
            Remove List
          </button>
        </div>
      )}
      <button className="List-toggle toggle-options" onClick={toggleOptions}>
        Toggle Options
      </button>
      <div>
        {list.cards.map(cardId => (
          <Card
            key={cardId}
            cardId={cardId}
            listId={list.id}
            onListChange={handleListChange}
            onRemoveCard={onCardRemove}
          />
        ))}
      </div>
    </article>
  );
};

export default memo(List);
