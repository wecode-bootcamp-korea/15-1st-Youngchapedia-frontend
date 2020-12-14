import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/details" component={Details} />
          
        </Switch>
      </Router>
    );
  }
}

export default Routes;
