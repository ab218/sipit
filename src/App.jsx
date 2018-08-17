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
 backgroundColor: '#5d4427',
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafesList: [],
      yelpDataLoaded: false,
      //default LatLng set to Vancouver
      myLatLng: {
        lat: 49.2827,
        lng: -123.1207,
      },
    }
  }

  loadPosition = async () => {
    try {
      console.log(`trying to get geoposition...`)
      const position = await this.getCurrentPosition();
      console.log(`got it! At: ${position.coords.latitude}, ${position.coords.longitude}`)
      this.setState({
        myLatLng: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.getCafeCards('korean', 30)
    }
  };

  getCurrentPosition = (options = {timeout:10000}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getCafeCards(category, limit) {
    axios
      .post('/api/yelp', {
        location: this.state.myLatLng,
        category: category,
        limit: limit
      })
      .then(res => {
        return this.setState({
          ...this.state,
          cafesList: res.data,
          yelpDataLoaded: true,
        })
      })
  }

  componentDidMount() {

    this.loadPosition()

  }

  render() {
    const { yelpDataLoaded } = this.state;

    return (<div style={mainTheme}>
      <SideNav
        cafesList={this.state.cafesList}
        myLatLng={this.state.myLatLng}
      />
      <NavbarComponent />
      <TextFieldMargins />
      {yelpDataLoaded
        ? <CafeCard cafesList={this.state.cafesList} />
        : <h1 style={{color: 'white'}}>Brewing results...</h1>
      }
      <FooterComponent />
    </div>
    )
  }
}


