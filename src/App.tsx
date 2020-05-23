import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Country from "components/Country";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Country} />
    </Switch>
  </Router>
);

export default App;
