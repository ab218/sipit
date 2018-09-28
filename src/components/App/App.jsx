import React, { Component } from 'react';
import Routes from '../../Routes';
import Footer from '../Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <Footer />
      </div>
    );
  }
}
