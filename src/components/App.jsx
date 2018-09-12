import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import Routes from '../Routes';
import FooterComponent from './Footer';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </div>
    );
  }
}
