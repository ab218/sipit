import React, {Component} from 'react';
import NavbarComponent from './Navbar.jsx';
import CafeCard from './Cafe_card.jsx';

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
      <CafeCard />
    </div>
    )
  }
}


