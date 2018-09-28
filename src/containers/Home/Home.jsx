import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Navbar, CafeCard, MapContainer } from '../../components';
import { loadPosition, makeFetchCafesThunk, getFavorites } from '../../actions';
import { REDIRECT, NOTIFICATION_SHOW, NOTIFICATION_HIDE } from '../../constants/actionTypes';

class Home extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  async componentDidMount() {
    const {
      redirectFalse, makeFetchCafes, loadPosition: loadPos, getFavorites, cookies,
    } = this.props;
    // after redirecting back to home, set back to false.
    redirectFalse();
    await loadPos();
    makeFetchCafes('coffee', 10);
    if (cookies.get('user') !== undefined) {
      getFavorites(cookies.get('user').id);
    }
  }

  render() {
    const {
      cafesList, fetchCafesLoading,
      notificationIsOpen, notificationHide,
    } = this.props;
    return (
      <div style={{ backgroundColor: '#C1A88B' }}>
        <div style={{ paddingBottom: '8em' }}>
          <Navbar
            page="home"
          />
        </div>
        {cafesList && (<MapContainer />)}
        {fetchCafesLoading
          ? <h1 style={{ color: 'white' }}>Brewing results...</h1>
          : <CafeCard />
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
  redirectFalse: () => dispatch({
    type: REDIRECT,
    payload: false,
  }),
  notificationShow: () => dispatch({
    type: NOTIFICATION_SHOW,
    payload: true,
  }),
  notificationHide: () => dispatch({
    type: NOTIFICATION_HIDE,
    payload: false,
  }),
});

export default compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
