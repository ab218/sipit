import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import CafeCard from './CafeCard';
import GoogleMapContainer from './MapContainer';
import Snackbar from './Snackbar';
import { loadPosition, makeFetchCafesThunk } from '../actions';

const mainTheme = {
  backgroundColor: '#5d4427',
};

const mapDown = {
  paddingBottom: '8em',
};

class Home extends Component {
  async componentDidMount() {
    const { makeFetchCafes, loadPosition: loadPos } = this.props;
    await loadPos();
    makeFetchCafes('coffee', 10);
  }

  searchCafes = (e) => {
    const {
      cafeSearch, locationSearch, resultsSearch, makeFetchCafes,
      myLatLng,
    } = this.props;
    e.preventDefault();
    if (locationSearch === '') {
      makeFetchCafes(cafeSearch, resultsSearch, myLatLng);
    } else {
      makeFetchCafes(cafeSearch, resultsSearch, locationSearch);
    }
  }

  render() {
    const { location, cafesList, fetchCafesLoading } = this.props;

    return (
      <div style={mainTheme}>
        <div style={mapDown}>
          <Navbar
            searchCafes={this.searchCafes}
          />
        </div>
        {cafesList && (<GoogleMapContainer />)}
        {fetchCafesLoading
          ? <h1 style={{ color: 'white' }}>Brewing results...</h1>
          : <CafeCard cafesList={cafesList} />
        }
        {location.state === 'hello'
          ? <Snackbar />
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
  fetchCafesLoading: state.fetchCafes.cafesLoading,
  myLatLng: state.getPosition.myLatLng,
  cafeSearch: state.searchFields.searchName,
  locationSearch: state.searchFields.searchLocation,
  resultsSearch: state.searchFields.searchResults,
});

const mapDispatchToProps = dispatch => ({
  loadPosition: () => dispatch(loadPosition()),
  makeFetchCafes: (term, limit, loc) => {
    dispatch(makeFetchCafesThunk(term, limit, loc));
  },
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
