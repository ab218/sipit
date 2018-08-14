import React, { Component } from 'react';
import NavbarComponent from './Navbar.jsx';
import CafeCard from './Cafe_card.jsx';
import axios from 'axios'
import FooterComponent from './Footer.jsx';
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
      <NavbarComponent />
      <TextFieldMargins />
      <CafeCard cafesList={this.state.cafesList}/>
      <FooterComponent />
    </div>
    )
  }
}


