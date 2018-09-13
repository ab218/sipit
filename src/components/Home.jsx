import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import CafeCard from './CafeCard';
import MapContainer from './MapContainer';
import Snackbar from './Snackbar';

const mainTheme = {
  backgroundColor: '#5d4427',
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafesList: [],
      yelpDataLoaded: false,
      // default LatLng = Vancouver (49.2827, -123.1207)
      myLatLng: {
        lat: 49.2827,
        lng: -123.1207,
      },
      results: 10,
      cafeSearch: '',
      locationSearch: '',
    };
  }

  componentDidMount() {
    this.loadPosition();
  }

  getCurrentPosition =
  (options = { timeout: 10000, maximumAge: 3600000 }) => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });


  getCafeCards = async (term, limit) => {
    try {
      const { myLatLng } = this.state;
      const res = await axios
        .post('/api/yelp/latlng', {
          latLng: myLatLng,
          term,
          limit,
        });
      this.setState({
        cafesList: res.data,
        yelpDataLoaded: true,
      });
    } catch (error) {
      console.log('could not get it.... :(', error);
    }
  }

  getCafeCardsLocation = async (term, limit) => {
    try {
      const { locationSearch } = this.state;
      const cardLocation = await axios
        .post('/api/yelp/loc', {
          location: locationSearch,
          term,
          limit,
        });
      this.setState({
        cafesList: cardLocation.data,
        yelpDataLoaded: true,
        myLatLng: {
          lat: cardLocation.data[0].coordinates.latitude,
          lng: cardLocation.data[0].coordinates.longitude,
        },
      });
    } catch (error) {
      console.log('could not get it!', error);
    }
  }

  loadPosition = async () => {
    try {
      console.log('trying to get geoposition...');
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      console.log(`got it! At: ${latitude}, ${longitude}`);
      this.setState({
        myLatLng: {
          lat: latitude,
          lng: longitude,
        },
      });
    } catch (error) {
      console.log('failed to get position.', error);
    } finally {
      this.getCafeCards('coffee', 10);
    }
  };

  searchCafes = (e) => {
    const {
      cafeSearch, locationSearch, results,
    } = this.state;
    e.preventDefault();
    if (locationSearch === '') {
      this.getCafeCards(cafeSearch, results);
    } else {
      this.getCafeCardsLocation(cafeSearch, results);
    }
  }

  handleInputChange = (e) => {
    const {
      target: {
        value, name,
      },
    } = e;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      yelpDataLoaded, cafesList, myLatLng, results,
    } = this.state;

    const { location } = this.props;

    return (
      <div style={mainTheme}>
        <div style={{
          paddingBottom: '8em',
        }}
        >
          <Navbar
            searchCafes={this.searchCafes}
            handleInputChange={this.handleInputChange}
            results={results}
          />

          {location.state === 'hello'
            ? <Snackbar />
            : <span />
          }
          <div style={{
            marginTop: '0.65em',
            paddingLeft: '0.3em',
          }}
          />
        </div>
        {/* <p>you have {this.props.favorites} favorites</p> */}
        <MapContainer
          cafesList={cafesList}
          myLatLng={myLatLng}
        />
        {yelpDataLoaded
          ? <CafeCard cafesList={cafesList} />
          : <h1 style={{ color: 'white' }}>Brewing results...</h1>
        }
      </div>
    );
  }
}
