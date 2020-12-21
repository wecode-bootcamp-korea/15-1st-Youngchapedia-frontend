import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import MyPageMain from './Pages/MyPage/MyPageMain';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/details" component={Detail} />
          <Route exact path="/mypage" component={MyPageMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
