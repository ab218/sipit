import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Business from './containers/Business/Business';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Favorites from './containers/Favorites/Favorites';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/business/:id" component={Business} />
      </Switch>
    );
  }
}
