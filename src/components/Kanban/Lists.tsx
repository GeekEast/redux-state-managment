import React, { memo } from "react";
import List from "./List";
import { useSelector } from 'react-redux';
import _ from "lodash";

const Lists = () => {
  const listIds = useSelector(state => _.get(state, ["lists", "ids"], []));
  return (
    <section className="Lists">
      {listIds.map(id => (
        <List key={id} listId={id} />
      ))}
    </section>
  );
};

export default memo(Lists);
