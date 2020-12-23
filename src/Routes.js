import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import MyPageMain from './Pages/MyPage/MyPageMain';
import MyPageFooterDetail from './Pages/MyPage/Components/MyPageFooterDetail/MyPageFooterDetail';
import FilterPage from './Pages/FilterPage/FilterPage';
import SearchResultPage from './Components/Nav/Search/SearchResultPage';


class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/details" component={Detail} />
          <Route exact path="/mypage" component={MyPageMain} />
          <Route
            exact
            path="/mypagefooterdetail"
            component={MyPageFooterDetail}
          />
          <Route exact path="/filter/:id" component={FilterPage} />
          <Route exact path="/movies/:id" component={Detail} />
          <Route exact path="/details/:id" component={Detail} />
          <Route exact path="/filterPage/:id" component={FilterPage} />
          <Route exact path="/search/:id" component={SearchResultPage} />

        </Switch>
      </Router>
    );
  }
}

export default Routes;
