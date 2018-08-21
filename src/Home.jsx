import React, { Component } from 'react';
// import MapContainer from './Map_Container.jsx';
import CafeCard from './Cafe_Card.jsx';
import axios from 'axios'
// import SideNav from './Side_Nav.jsx';
import SearchBar from './Search_Bar.jsx';
//import SearchBarComponent from './SearchBar.jsx';
import MapContainer from './Map_Container.jsx';

const mainTheme = {
 backgroundColor: '#5d4427',
}

export default class Home extends Component {
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
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      console.log(`got it! At: ${latitude}, ${longitude}`)
      this.setState({
        myLatLng: {
          lat: latitude,
          lng: longitude
        }
      });
    } catch (error) {
      console.log('failed to get position.', error);
    } finally {
      this.getCafeCards('coffee', 10)
    }
  };

  getCurrentPosition = (options = {timeout:10000, maximumAge:3600000}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getCafeCards(term, limit) {
    axios
      .post('/api/yelp', {
        location: this.state.myLatLng,
        term: term,
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

  searchCafes = (e) => {
    e.preventDefault()
    this.getCafeCards(this.state.cafeSearch, 10)
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  componentDidMount() {

    this.loadPosition()

  }

  render() {
    const { yelpDataLoaded, cafesList, myLatLng } = this.state;

    return (<div style={mainTheme}>
      <SearchBar
      searchCafes={this.searchCafes}
      handleInputChange={this.handleInputChange}
       />
      <MapContainer
        cafesList={cafesList}
        myLatLng={myLatLng}
      />
      {yelpDataLoaded
        ? <CafeCard cafesList={cafesList} />
        : <h1 style={{color: 'white'}}>Brewing results...</h1>
      }
    </div>
    )
  }
}


