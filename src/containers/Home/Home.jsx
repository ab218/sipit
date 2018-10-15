import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { CafeCard, MapContainer } from '../../components';
import { loadPosition, makeFetchCafesThunk, getFavorites } from '../../redux/actions';
import { REDIRECT, NOTIFICATION_SHOW, NOTIFICATION_HIDE } from '../../redux/types';
import styles from './homeStyles';

class Home extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  componentDidMount = () => {
    const {
      loadPosition, getFavorites, cookies, cafesList,
    } = this.props;
    if (!cafesList) { loadPosition(); }
    return cookies.get('user') && getFavorites(cookies.get('user').id);
  }

  componentDidUpdate = () => {
    const { redirect, redirectFalse } = this.props;
    // this makes sure redirect gets set to false on home page on rerender
    // (in the case of searching)
    return redirect && redirectFalse();
  }

  render() {
    const {
      cafesList, fetchCafesLoading,
      notificationIsOpen, notificationHide,
    } = this.props;
    const { brewing, mainTheme, pushDown } = styles;
    return (
      <div style={mainTheme}>
        <div style={pushDown} />
        {cafesList && <MapContainer />}
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
  latLng: state.getPosition.myLatLng,
  redirect: state.redirect.redirect,
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
