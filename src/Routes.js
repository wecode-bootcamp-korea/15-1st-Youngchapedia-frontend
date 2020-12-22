import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import MyPageMain from './Pages/MyPage/MyPageMain';
import MyPageEval from './Pages/MyPage/Components/MyPageEval';
import MyPageLikeTo from './Pages/MyPage/Components/MyPageLikeTo';
import MyPageWatching from './Pages/MyPage/Components/MyPageWatching';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/details" component={Detail} />
          <Route exact path="/mypage" component={MyPageMain} />
          <Route exact path="/mypageeval" component={MyPageEval} />
          <Route exact path="/mypageliketo" component={MyPageLikeTo} />
          <Route exact path="/mypagewatching" component={MyPageWatching} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
