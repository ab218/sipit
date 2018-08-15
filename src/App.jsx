import React, { Component } from 'react';
import NavbarComponent from './Navbar.jsx';
// import MapContainer from './Map_Container.jsx';
import CafeCard from './Cafe_card.jsx';
import axios from 'axios'
import FooterComponent from './Footer.jsx';
import SideNav from './Side_Nav.jsx';
import TextFieldMargins from './Textarea.jsx';
//import SearchBarComponent from './SearchBar.jsx';

const mainTheme = {
 backgroundColor: 'brown',
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafesList: [],
      myLatLng: {
        lat: 49.2827,
        lng: 123.1207
      }
    }
  }



  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          myLatLng: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }
        );
      })
    } else {
      //browser doesn't support geolocation, set as vancouver
      this.setState({
        myLatLng: {
          lat: 49.8527,
          lng: -123.1207
        }
      }
      );
    }
  }

  componentWillMount() {
    this.getLocation();
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
      <SideNav
        cafesList={this.state.cafesList}
        myLatLng={this.state.myLatLng}
      />
      <NavbarComponent />
      <TextFieldMargins />
      <CafeCard cafesList={this.state.cafesList} />
      <FooterComponent />
    </div>
    )
  }
}


