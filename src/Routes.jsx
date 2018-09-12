import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Business from './components/Business';
import Login from './components/Login';
import Signup from './components/Signup';


export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // setFavorites = (amount) => {
  //   this.setState({
  //     favorites: amount,
  //   });
  // }


  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/business/:id" component={Business} />
      </Switch>
    );
  }
}


// { <Route exact path="/" component={() => {
//     return <Home
//     favorites={this.state.favorites}
//     setFavorites={this.setFavorites} />
// }} />
