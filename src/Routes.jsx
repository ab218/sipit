import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Home, Business, Login, Signup, Favorites,
} from './containers';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/login" component={() => <Login />} />
        <Route path="/signup" component={() => <Signup />} />
        <Route path="/favorites" component={() => <Favorites />} />
        <Route path="/business/:id" component={Business} />
      </Switch>
    );
  }
}
