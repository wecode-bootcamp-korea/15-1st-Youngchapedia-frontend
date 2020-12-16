import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import DetailMainCommentLink from './Pages/Detail/DetailMain/Components/DetailMainComment/DetailMainCommentLink/DetailMainCommentLink';
import '@fortawesome/fontawesome-free/js/all.js';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/detail" component={Detail} />
          <Route
            exact
            path="/detailmain/commentlink"
            component={DetailMainCommentLink}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
