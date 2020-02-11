import React from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";
import Users from './Users';
import { useTimer } from 'hooks';
import "scss/kanban.scss";
// import defaultState from "default-state.json";


export default () => {
  const time = useTimer();
  return (
    <main className="Application">
      <div>
        <Users />
      </div>
      <section>
        <CreateList />
        <Lists />
      </section>

      <div>
        <h3>
          Current Time: {time.toLocaleTimeString()}
        </h3>
      </div>

    </main>
  );
};
