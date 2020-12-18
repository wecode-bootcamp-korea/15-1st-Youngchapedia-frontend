import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import FilterPage from './Pages/FilterPage/FilterPage';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/filterPage/:id" component={FilterPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
