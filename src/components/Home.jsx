import React, { Component } from 'react';
import axios from 'axios';
import CafeCard from './CafeCard';
import SearchBar from './SearchBar';
import MapContainer from './MapContainer';
import Dropdown from './Dropdown';
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
      // default LatLng set to Vancouver
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


  getCafeCards(term, limit) {
    const { myLatLng } = this.state;
    axios
      .post('/api/yelp/latlng', {
        latLng: myLatLng,
        term,
        limit,
      })
      .then(res => this.setState({
        cafesList: res.data,
        yelpDataLoaded: true,
      }));
  }

  getCafeCardsLocation(term, limit) {
    const { locationSearch } = this.state;
    axios
      .post('/api/yelp/loc', {
        location: locationSearch,
        term,
        limit,
      })
      .then(res => this.setState({
        cafesList: res.data,
        yelpDataLoaded: true,
        myLatLng: {
          lat: res.data[0].coordinates.latitude,
          lng: res.data[0].coordinates.longitude,
        },
      }));
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
          display: 'inline-flex',
          paddingBottom: '8em',
          marginLeft: '10em',
        }}
        >
          {location.state === 'hello'
            ? <Snackbar />
            : <span />
          }
          <SearchBar
            searchCafes={this.searchCafes}
            handleInputChange={this.handleInputChange}
          />
          <div style={{
            marginTop: '0.65em',
            paddingLeft: '0.3em',
          }}
          >
            <Dropdown
              handleInputChange={this.handleInputChange}
              results={results}
            />
          </div>
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
