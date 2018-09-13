import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import CafeCard from './CafeCard';
import MapContainer from './MapContainer';
import Snackbar from './Snackbar';

const mainTheme = {
  backgroundColor: '#5d4427',
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // default LatLng = Vancouver (49.2827, -123.1207)
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
      const { fetchCafes, cafeDataLoading, myLatLng } = this.props;
      const res = await axios
        .post('/api/yelp/latlng', {
          latLng: myLatLng,
          term,
          limit,
        });
      fetchCafes(res.data);
      cafeDataLoading(false);
    } catch (error) {
      console.log('could not get it.... :(', error);
    }
  }

  getCafeCardsLocation = async (term, limit) => {
    try {
      const { locationSearch } = this.state;
      const { fetchCafes, cafeDataLoading, getPosition } = this.props;
      const cardLocation = await axios
        .post('/api/yelp/loc', {
          location: locationSearch,
          term,
          limit,
        });
      fetchCafes(cardLocation.data);
      cafeDataLoading(false);
      getPosition(
        cardLocation.data[0].coordinates.latitude,
        cardLocation.data[0].coordinates.longitude,
      );
    } catch (error) {
      console.log('could not get it!', error);
    }
  }

  loadPosition = async () => {
    const { getPosition } = this.props;
    try {
      console.log('trying to get geoposition...');
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      console.log(`got it! At: ${latitude}, ${longitude}`);
      getPosition(latitude, longitude);
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
      results,
    } = this.state;

    const {
      location, cafesList, fetchCafesLoading, myLatLng,
    } = this.props;

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
        {cafesList
        && (
          <MapContainer
            cafesList={cafesList}
            myLatLng={myLatLng}
          />
        )
        }
        {fetchCafesLoading
          ? <h1 style={{ color: 'white' }}>Brewing results...</h1>
          : <CafeCard cafesList={cafesList} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
  fetchCafesLoading: state.fetchCafes.cafesLoading,
  myLatLng: state.getPosition.myLatLng,
});

const mapDispatchToProps = dispatch => ({
  fetchCafes: data => dispatch({
    type: 'FETCH_CAFES',
    payload: data,
  }),
  cafeDataLoading: bool => dispatch({
    type: 'FETCH_CAFES_LOADING',
    payload: bool,
  }),
  getPosition: (lat, lng) => dispatch({
    type: 'GET_POSITION',
    payload: {
      lat,
      lng,
    },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
