import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import { withCookies, Cookies } from 'react-cookie';
import PropTypes, { instanceOf } from 'prop-types';
import Navbar from './Navbar';
import CafeCard from './CafeCard';
import GoogleMapContainer from './MapContainer';
import { loadPosition, makeFetchCafesThunk, getFavorites } from '../actions';

const mainTheme = {
  backgroundColor: '#C1A88B',
};

const mapDown = {
  paddingBottom: '8em',
};

class Home extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  async componentDidMount() {
    const {
      makeFetchCafes, loadPosition: loadPos, getFavorites, cookies,
    } = this.props;
    await loadPos();
    makeFetchCafes('coffee', 10);
    if (cookies.get('user') !== undefined) {
      getFavorites(cookies.get('user').id);
    }
  }

  render() {
    const {
      location, cafesList, fetchCafesLoading,
      notificationIsOpen, notificationHide,
    } = this.props;
    console.log(location);
    return (
      <div style={mainTheme}>
        <div style={mapDown}>
          <Navbar
            page="home"
          />
        </div>
        {cafesList && (<GoogleMapContainer />)}
        {fetchCafesLoading
          ? <h1 style={{ color: 'white' }}>Brewing results...</h1>
          : <CafeCard cafesList={cafesList} />
        }
        <Snackbar
          open={notificationIsOpen}
          onClose={notificationHide}
          message={<p>Login successful</p>}
          autoHideDuration={2000}
        />
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
  notificationIsOpen: state.notifications.show,
});

const mapDispatchToProps = dispatch => ({
  loadPosition: () => dispatch(loadPosition()),
  makeFetchCafes: (term, limit, loc) => {
    dispatch(makeFetchCafesThunk(term, limit, loc));
  },
  getFavorites: (user_id) => {
    dispatch(getFavorites(user_id));
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
  notificationShow: () => dispatch({
    type: 'NOTIFICATION_SHOW',
    payload: true,
  }),
  notificationHide: () => dispatch({
    type: 'NOTIFICATION_HIDE',
    payload: false,
  }),
});

export default compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
