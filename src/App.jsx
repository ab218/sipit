import React, {Component} from 'react';
import NavbarComponent from './Navbar.jsx';

require("./styles/first.css");
require("./styles/second.sass");
require("./styles/third.scss");

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <NavbarComponent />
    </div>
    )
  }
}


