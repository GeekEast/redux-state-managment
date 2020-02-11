import React, { useState, memo, useMemo } from "react";
import { useSelector, shallowEqual } from 'react-redux';
import { listsSelector, makeListSelector, makeCardSelector } from "selectors/Kanban";
import MoveCardToList from './MoveCardToList';

const Card = props => {
  const { cardId, listId, onRemoveCard, onListChange } = props;
  const [showOptions, setShowOptions] = useState(false);

  const listSelector = useMemo(makeListSelector, []);
  const cardSelector = useMemo(makeCardSelector, []);

  const lists = useSelector(listsSelector, shallowEqual);
  const list = useSelector(state => listSelector(state, listId), shallowEqual);
  const card = useSelector(state => cardSelector(state, cardId), shallowEqual);

  // event actions
  const removeCard = () => onRemoveCard(listId, cardId);
  const handleChange = event => onListChange(event.target.value, cardId);
  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <article className="Card">
      <h3>{card.title}</h3>
      <div className="Card-description">{card.description}</div>
      {showOptions && (
        <div className="Card-options">
          <MoveCardToList listId={list.id} lists={lists} moveCardToList={handleChange} />
          <button className="Card-move-danger" onClick={removeCard}>
            Remove Card
          </button>
        </div>
      )}

      <button className="Card-toggle" onClick={toggleOptions}>
        Toggle options
      </button>
    </article>
  );
};

export default memo(Card);
