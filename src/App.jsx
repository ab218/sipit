import React, {Component} from 'react';
import NavbarComponent from './Navbar.jsx';
import CafeCard from './Cafe_card.jsx';
import FooterComponent from './Footer.jsx';
//import SearchBarComponent from './SearchBar.jsx';

require("./styles/first.css");
require("./styles/second.sass");
require("./styles/third.scss");
require("./styles/third.scss");

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <NavbarComponent />
      <CafeCard />
      <CafeCard />
      <FooterComponent />
    </div>
    )
  }
}


