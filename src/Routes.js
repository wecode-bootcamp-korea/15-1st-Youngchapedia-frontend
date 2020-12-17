import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import Signup from './Pages/Login/Signup';
import Forgotpassword from './Pages/Login/Forgotpassword';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/details" component={Detail} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgotpassword" component={Forgotpassword} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
