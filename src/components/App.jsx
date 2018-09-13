import React, { Component } from 'react';
import Routes from '../Routes';
import Footer from './Footer';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>

        <Routes />
        <Footer />
      </div>
    );
  }
}
