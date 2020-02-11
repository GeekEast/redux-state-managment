import React from "react";
import Counter from "components/Counter";
import Kanban from "components/Kanban";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/kanban" component={Kanban} />
    </Switch>
  </Router>
);

export default App;
