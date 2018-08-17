import React, { Component } from 'react';
import NavbarComponent from './Navbar.jsx';
import Routes from './Routes.jsx'
import FooterComponent from './Footer.jsx';
import TextFieldMargins from './Textarea.jsx';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {


    return (<div>
      <NavbarComponent />
      <Routes />
      <FooterComponent />
    </div>
    )
  }
}


