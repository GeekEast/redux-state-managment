import React, { memo } from "react";

const MoveCardToList = ({ listId, lists, moveCardToList }) => (
  <select className="Card-move" onChange={moveCardToList} value={listId}>
    {Object.values(lists).map((list:any) => (
      <option value={list.id} key={list.id}>
        {list.title}
      </option>
    ))}
  </select>
);

export default memo(MoveCardToList);
