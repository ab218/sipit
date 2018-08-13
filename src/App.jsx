import React, { Component } from 'react';
import NavbarComponent from './Navbar.jsx';
import CafeCard from './Cafe_card.jsx';
import axios from 'axios'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafes: {}
    }
  }

  componentDidMount() {
    axios
      .get('/api/yelp')
      .then(res => {
        return this.setState({ cafes: res.data })
      })
  }

  render() {

    return (<div>
      <NavbarComponent />
      <CafeCard />
    </div>
    )
  }
}


