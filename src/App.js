import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import TryOutPage from './pages/tryoutpage/tryoutpage.component';
import LoginPage from './pages/loginpage/loginpage.component';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tryout" component={TryOutPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
