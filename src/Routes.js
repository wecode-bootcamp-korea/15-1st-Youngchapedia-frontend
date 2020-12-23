import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Detail from './Pages/Detail/Detail';
import MyPageMain from './Pages/MyPage/MyPageMain';
import MyPageFooterDetail from './Pages/MyPage/Components/MyPageFooterDetail/MyPageFooterDetail';
import Error from './Pages/Error/Error';
import DetailMainCommentLink from './Pages/Detail/DetailMain/Components/DetailMainComment/DetailMainCommentModal/DetailMainCommentModal';
import '@fortawesome/fontawesome-free/js/all.js';
import FilterPage from './Pages/FilterPage/FilterPage';
import SearchResultPage from './Components/Nav/Search/SearchResultPage';



class Routes extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/details" component={Detail} />
          <Route exact path="/mypage" component={MyPageMain} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/details" component={Detail} />
          <Route exact path="/mypage" component={MyPageMain} />
          <Route
            exact
            path="/mypagefooterdetail"
            component={MyPageFooterDetail}
          />

          <Route exact path="/detail" component={Detail} />
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
