import React, { Component } from 'react';
import Routes from '../Routes';
import { Navbar, Footer } from '../components';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}
