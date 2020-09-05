import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import TryOutPage from './pages/tryoutpage/tryoutpage.component';
import LoginPage from './pages/loginpage/loginpage.component';
import ExamPage from './pages/exampage/exampage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ProfilePage from './pages/profilepage/profilepage.component';
import ErrorPage from './pages/errorpage/errorpage.component';

import './App.scss';

class App extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tryout/:examId" component={TryOutPage} />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
          />
          <Route
            path="/exam/:examId/:examSlug/:session/:number"
            component={ExamPage}
          />
          <Route exact path="/about-us" component={AboutPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route
            path="/:errorid"
            render={() => <ErrorPage>Invalid Url</ErrorPage>}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
