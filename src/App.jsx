import React, { Component } from 'react';
import NavbarComponent from './Navbar.jsx';
import MapContainer from './Map_Container.jsx';
import CafeCard from './Cafe_card.jsx';
import axios from 'axios'
import FooterComponent from './Footer.jsx';
import SideNav from './Side_Nav.jsx';
import TextFieldMargins from './Textarea.jsx';

//import SearchBarComponent from './SearchBar.jsx';

const mainTheme = {
 backgroundColor: '#c1946a',
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafesList: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/yelp')
      .then(res => {
        return this.setState({ cafesList: res.data })
      })
  }

  render() {

    return (<div style={mainTheme}>
      <SideNav cafesList={this.state.cafesList}/>
      <NavbarComponent />
      <TextFieldMargins />
      <CafeCard cafesList={this.state.cafesList}/>
      <FooterComponent />
    </div>
    )
  }
}


