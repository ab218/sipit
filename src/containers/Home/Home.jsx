import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Navbar, CafeCard, MapContainer } from '../../components';
import { loadPosition, makeFetchCafesThunk, getFavorites } from '../../redux/actions';
import { REDIRECT, NOTIFICATION_SHOW, NOTIFICATION_HIDE } from '../../redux/types';
import styles from './homeStyles';

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
    const { brewing, mainTheme, pushDown } = styles;
    return (
      <div style={mainTheme}>
        <div style={pushDown}>
          <Navbar
            page="home"
          />
        </div>
        {cafesList && (<MapContainer />)}
        {fetchCafesLoading
          ? <h1 style={brewing}>Brewing results...</h1>
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

const dispatchAction = (dispatch, actionMaker) => (...args) => {
  dispatch(actionMaker(...args));
};

const mapDispatchToProps = dispatch => ({
  loadPosition: dispatchAction(dispatch, loadPosition),
  makeFetchCafes: dispatchAction(dispatch, makeFetchCafesThunk),
  getFavorites: dispatchAction(dispatch, getFavorites),

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
